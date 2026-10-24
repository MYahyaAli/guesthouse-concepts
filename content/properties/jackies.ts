import type { Property } from '../types';

/** Tripadvisor photos from the "21/bc" series, which look like the property's own uploads. */
const tripadvisor = (id: string) =>
  `https://dynamic-media-cdn.tripadvisor.com/media/photo-o/${id}/jackie-s-guest-house.jpg?w=1600&h=-1&s=1`;

const photo = {
  restaurant: tripadvisor('21/bc/30/07'),
  shala: tripadvisor('21/bc/32/ee'),
  barHut: tripadvisor('21/bc/b5/67'),
  gardenPath: tripadvisor('21/bc/b3/b3'),
};

const jackies: Property = {
  slug: 'jackies-guesthouse-k6mu',
  tier: 'A',
  ready: true,
  theme: 'mirissa-garden',

  name: "Jackie's Guesthouse",
  fullName: "Jackie's Guesthouse",
  area: 'Mirissa',
  lede: 'A garden guesthouse with its own yoga shala, a five-minute walk from Mirissa Beach.',

  contact: {
    whatsapp: '34657074928',
    phoneDisplay: '+34 657 074 928',
    address: ['Sunanda Road', 'Mirissa 81740, Sri Lanka'],
  },
  map: {
    query: "Jackie's Guesthouse, Sunanda Road, Mirissa",
    placeId: 'ChIJeUL_HjMV4ToRUfUHxqQPLiE',
    url: 'https://maps.google.com/maps?cid=2390865652551775569',
  },
  rating: {
    score: 4.8,
    count: 102,
    source: 'Google',
    url: 'https://maps.google.com/maps?cid=2390865652551775569',
    checked: '2026-10-20',
  },

  hero: {
    src: photo.shala,
    alt: 'The yoga shala in the garden',
  },
  intro: {
    title: 'The garden',
    paragraphs: [
      "Jackie's is a small guesthouse of seven rooms, set in a tropical garden on Sunanda Road in Mirissa.",
      'There are daily yoga classes in the garden shala and a small gym, and the open-air restaurant and bar serve healthy breakfasts and, in the evening, barbecued fish, chicken and burgers.',
    ],
    photo: {
      src: photo.restaurant,
      alt: 'The open-air restaurant, with rattan lamps hanging over the tables',
    },
  },
  mentions: [
    { title: 'The feel of the place', text: 'Relaxed, homely and a little romantic.' },
    { title: 'The food', text: 'Healthy breakfasts, and barbecued fish, chicken and burgers at night.' },
    { title: 'The people', text: 'Friendly staff who make you feel part of the family.' },
    { title: 'The rooms', text: 'Clean and cool, with strong air conditioning.' },
  ],
  mentionsSource: 'Summarised from guest reviews on Google and Tripadvisor.',

  rooms: {
    title: 'Seven rooms',
    intro: 'The rooms are air-conditioned, and some have a small private garden with an outdoor shower.',
    items: [],
  },

  day: {
    title: "A day at Jackie's",
    moments: [
      { when: 'Morning', text: 'A yoga class in the shala, then a healthy breakfast in the garden.' },
      { when: 'Afternoon', text: 'An afternoon on Mirissa Beach, a short walk away.' },
      { when: 'Evening', text: 'Barbecued fish or chicken, and a drink at the garden bar.' },
    ],
    photo: {
      src: photo.barHut,
      alt: 'The bar, a small hut in the garden',
    },
  },

  gallery: { title: 'Around the garden', photos: [] },
  band: {
    src: photo.gardenPath,
    caption: 'Through the garden',
    alt: 'A path winding through the tropical garden',
  },

  location: {
    title: 'Close to Mirissa Beach',
    text: "Jackie's is on Sunanda Road, a short walk from the beach.",
    walks: [
      ['Mirissa Beach', 'About 5 min walk'],
      ['Weligama', 'About 6 km by tuk-tuk'],
    ],
  },

  enquiry: {
    intro:
      "Choose your dates and send them to us on WhatsApp. We'll reply to confirm availability and the rate for your stay.",
    maxGuests: 6,
  },
  details: [
    ['Yoga', 'Daily classes in the garden shala'],
    ['Gym', 'Small gym on site'],
    ['Food', 'Open-air restaurant and garden bar'],
    ['Rooms', 'Air-conditioned'],
  ],

  links: [{ label: 'Instagram', url: 'https://www.instagram.com/jackiesguesthouse/' }],

  sources: [
    'Google Maps listing: rating 4.8 from 102 reviews (checked 20 Oct 2026); review themes (yoga shala and daily classes, healthy breakfast, BBQ fish and chicken, burgers, outdoor bar, family-like staff, about 5 min walk to the beach, clean rooms with strong AC, mini gardens and outdoor showers)',
    'Tripadvisor (4.7 from 11): 7 rooms, small gym, photos (21/bc series)',
    'Instagram: instagram.com/jackiesguesthouse',
  ],
  confirm: [
    'The WhatsApp number is Spanish (+34). Check it is the one guests should use, and pitch in English.',
    "The photos look like the property's own Tripadvisor uploads; confirm. There are no room photos, so ask for some.",
    'Check-in and check-out times, that yoga classes are still daily, and that every room has air conditioning (reviews praise the AC).',
    'Weligama distance is approximate (about 6 km).',
  ],
};

export default jackies;
