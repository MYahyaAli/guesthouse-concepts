'use client';

import { textLink } from './styles';

/** The Composer listens for this on window, so the room cards stay server components. */
export const ASK_ROOM_EVENT = 'ask-about-room';

export function AskAboutRoom({ room, className = '' }: { room: string; className?: string }) {
  return (
    <button
      type="button"
      className={`${textLink} ${className}`}
      onClick={() => window.dispatchEvent(new CustomEvent<string>(ASK_ROOM_EVENT, { detail: room }))}
    >
      Ask about this room
    </button>
  );
}
