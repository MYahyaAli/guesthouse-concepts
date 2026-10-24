'use client';
/* eslint-disable @next/next/no-img-element -- static export: a plain <img> with sizes from the photo manifest */

import { useCallback, useState } from 'react';

/**
 * The <img> behind Photo. A photo that fails to load becomes a labelled
 * placeholder of the same shape. Errors can fire before hydration, so the
 * ref also catches an image that has already failed.
 */
export function PhotoImg({
  src,
  alt,
  width,
  height,
  position,
  className,
  eager,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  position?: string;
  className: string;
  eager: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const checkAlreadyFailed = useCallback((img: HTMLImageElement | null) => {
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div className={`ph ${className}`} role="img" aria-label={alt}>
        {alt}
      </div>
    );
  }

  return (
    <img
      ref={checkAlreadyFailed}
      className={`object-cover ${className}`}
      style={position ? { objectPosition: position } : undefined}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}
