import type { Property } from '../types';

/** Google Maps "By owner" photos. */
const owner = (id: string) => `https://lh3.googleusercontent.com/gps-cs-s/${id}=w1600-h1200-k-no`;

const photo = {
  balcony: owner('ANWiy9TuWecY3dm1BuKGjifycbZg3CysIqiazdKqJ8Rk1x_xnVXbAcuVl69qvmvgw8tPcAz7V_2cdc83nnQ_ZOSeSjRyiELYiMGYzFWUpLuENrVpg6te1QDT-PF9ca2Yphw5TqNyC3p_'),
  orangeRoom: owner('ANWiy9RXMts6s0C7AfOeXsK1KrnoaNNGqOz1e8g9fk0KFgdSyfisUIQ7sHGCJwTxu6eH-lZPyjcNOjXw18P_8QRDVYENkVEjEZlPnptICRLIIb3fMHAJ-CVcHNsyM0Sg4FL8Ij8f2cvK'),
  greenRoom: owner('ANWiy9SjZ9Yy0UfXbWENm0NMhWzq2HIQKkYpO37TiJ_mCzz6wPP064IiERzGNVpjf3JO_ecouhsmFUFXwH2DvH5T5sgA4U4rzle7O7LcMePUKKSvN0xdKCb0hoTHj73cWhNrvLS_Ke0a4DwRS8Tu'),
  roofKitchen: owner('ANWiy9SZY2yEbRkcE-IEL7bqJtKXsUKONx3ijhnz-ARuetbsikEQk8C-aKi-ZSF0JAQ8oIYEuD67Z7y-S-HsK2aiwYBWz3J8CoYuNuarG_vgDR1Tbe7oAsvHacm0bLcaTyin-kEahXtOMCXiSNo'),
  balconyDesk: owner('ANWiy9SEKVLBsj29MIiAhZykZE1lZfG6LWhigRRonrWIhOwbSM5RKapvLB2dFz85BQtMxiIWKbkIpLVMfesKDh-k5acsZZhuMJ9LEzgZK4tso7loeX0HXFipFz_FBE4qOM4NwtgUQGkh3yAXET_K'),
  sunbedRoom: owner('ANWiy9QvunfQOgVXFm60ahXHdwPXH2Gv1l-HVahLbHaiSnl6n3TYwAS2nUodXSc9eAenoYxICl6rwvUkaJMEaan7mBt08CsR11wry8rrOZwn25GfZMU3ll1ugy-MjV9B0UR_Xah5d8EW'),
  roofAtNight: owner('ANWiy9T8_rgfb-6H2n61R7U9DnBUjUEBPuBRRbvZekRJSTamqtCvewS8GyLvfldbCyLJo0qsA-AdXsfNm8_xGQSRACebA72UmOPCa_JMUjaJuw08kzsFZF6nRZta2cdmw4dxoeWtczA'),
  front: owner('ANWiy9Q69LeWq4HRYbCZ7bYJDDJCB7TvMC445i-UyvI1KubHKaZTKpXvv1rnDwz7u_hCWXt3-9jYj2QeWk-UZnYeUiuRpOZZKiB-gYlAscMt03q9TjQw6ns3DD0ra1UBVKWkPpEeVWNzVA'),
  staircase: owner('ANWiy9TfVb4dfTrZYUMGnRlzUQOXdtGfPqwV7bLrUaX6qBn_a67f-5VUrxvjYVNANkStJriUfil_hswvx72pzkNSdDnHwxRgX87WJUTnkBiwOMWHX0hqSfCFsw6GEt0pEL_X69p3Qx-u'),
};

const orangeHouse: Property = {
  slug: 'orange-house-e683',
  tier: 'B',
  ready: true,
  theme: 'standard',
  themeOverrides: { accent: '#B4500E', accentDeep: '#93410B' },

  name: 'The Orange House',
  fullName: 'The Orange House Weligama',
  area: 'Weligama',
  lede: "Four bright rooms and a rooftop terrace under string lights, just off Weligama's Main Street.",

  contact: {
    whatsapp: '94783106663',
    phoneDisplay: '+94 78 310 6663',
    address: ['No. 46/7 Main Street', 'Weligama 81700, Sri Lanka'],
  },
  map: {
    query: 'The Orange House, 46/7 Main Street, Weligama',
    placeId: 'ChIJ1bIR7-EV4ToR0qN9gu_-928',
    url: 'https://maps.google.com/maps?cid=8068197562097443794',
  },
  rating: {
    score: 4.9,
    count: 65,
    source: 'Google',
    url: 'https://maps.google.com/maps?cid=8068197562097443794',
    checked: '2026-10-20',
  },

  hero: {
    src: photo.roofAtNight,
    alt: 'The roof terrace at night, under strings of lights',
  },
  intro: {
    title: 'The house',
    paragraphs: [
      "The Orange House is a small guesthouse run by a Sri Lankan family, in a quiet spot just outside Weligama's busy centre.",
      'Upstairs there is a shared kitchen and a rooftop terrace for long evenings, and bicycles and scooters can be hired at the house.',
    ],
    photo: {
      src: photo.staircase,
      alt: 'The orange staircase inside the house',
    },
  },
  mentions: [
    { title: 'Cute, clean rooms', text: 'Bright, spotless and full of colour.' },
    { title: 'The terrace', text: 'A rooftop terrace and balconies to relax on.' },
    { title: 'Great value', text: 'Comfortable rooms at a fair price.' },
    { title: 'A quiet spot', text: 'Peaceful, just outside the busy centre.' },
  ],
  mentionsSource: 'Summarised from guest reviews on Google.',

  rooms: {
    title: 'Four rooms',
    intro: 'Bright, simple rooms, with balconies on the upper floor.',
    items: [],
    photos: [
      { src: photo.orangeRoom, caption: 'Orange curtains', alt: 'A bedroom with orange curtains' },
      { src: photo.greenRoom, caption: 'The green room', alt: 'A bedroom decorated in green' },
      { src: photo.sunbedRoom, caption: 'Out to the sunbeds', alt: 'A bedroom opening onto a terrace with sunbeds' },
    ],
  },

  gallery: {
    title: 'Around the house',
    photos: [
      { src: photo.front, caption: 'The front', alt: 'The front of the house, with its orange sign' },
      { src: photo.balcony, caption: 'A balcony', alt: 'A balcony at The Orange House' },
      { src: photo.roofKitchen, caption: 'The rooftop kitchen', alt: 'The rooftop kitchen and lounge' },
      { src: photo.balconyDesk, caption: 'A desk outside', alt: 'A desk on the balcony' },
    ],
  },

  location: {
    title: 'In Weligama',
    text: 'The Orange House is just off Main Street, close to the centre of Weligama but away from its traffic.',
    walks: [],
  },

  enquiry: {
    intro:
      "Choose your dates and send them to us on WhatsApp. We'll reply to confirm availability and the rate for your stay.",
    maxGuests: 6,
  },
  details: [
    ['Check-in', 'Any time, 24 hours'],
    ['Kitchen', 'Shared, on the top floor'],
    ['Terrace', 'On the roof'],
    ['Bicycles and scooters', 'For hire'],
  ],

  sources: [
    'Google Maps "By owner" photos; rating 4.9 from 65 reviews (checked 20 Oct 2026); review themes (cute clean rooms, balcony and terrace, value, shared top-floor kitchen, motorbike and bicycle rental, peaceful, just outside the centre)',
    'Tripadvisor (d25154092): run by a Sri Lankan family, 4 rooms, rooftop terrace, bikes, kitchenette, 24-hour check-in',
    'Booking.com: the-orange-house-villa-weligama',
  ],
  confirm: [
    'Room types, sizes and amenities (Tripadvisor says 4 rooms).',
    'How far the beach is: the page leaves distances out until we know.',
  ],
};

export default orangeHouse;
