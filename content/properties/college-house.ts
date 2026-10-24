import type { Property } from '../types';

/** Airbnb photos from "The College House by Fort" (room 33044161), very likely this house: see `confirm`. */
const airbnb = (path: string) => `https://a0.muscache.com/im/pictures/${path}?im_w=1440`;

const photo = {
  gardenFromUpstairs: airbnb('73b3c0db-6e6d-47ca-bcf2-473a8f8e2e79.jpg'),
  front: airbnb('67e4f0fa-edcf-4de6-8e75-5aaec2418362.jpg'),
  fourPoster: airbnb('hosting/Hosting-33044161/original/780406ff-667c-4136-830d-2ec878e5bd50.jpeg'),
  sittingRoom: airbnb('hosting/Hosting-33044161/original/688ee55b-5834-47af-8533-be2d5e8e118e.jpeg'),
};

const collegeHouse: Property = {
  slug: 'college-house-4r6s',
  tier: 'B',
  ready: true,
  theme: 'standard',
  themeOverrides: { accent: '#8A3B2E', accentDeep: '#6F2F25' },

  name: 'College House',
  fullName: 'College House',
  area: 'Colombo',
  lede: 'A restored colonial family home on College Street, in a quiet corner of old Colombo near the harbour.',

  contact: {
    whatsapp: '94777651515',
    phoneDisplay: '+94 77 765 1515',
    address: ['52 College Street', 'Colombo 01300, Sri Lanka'],
  },
  map: {
    query: 'College House, 52 College Street, Colombo',
    placeId: 'ChIJT92ise9Y4joR-hNB2OSmrU0',
    url: 'https://maps.google.com/maps?cid=5597313413702292474',
  },
  rating: {
    score: 4.6,
    count: 49,
    source: 'Google',
    url: 'https://maps.google.com/maps?cid=5597313413702292474',
    checked: '2026-10-20',
  },

  hero: {
    src: photo.front,
    alt: 'The colonial front of the house, with its veranda',
  },
  intro: {
    title: 'The house',
    paragraphs: [
      'College House stands on College Street, just north of Fort and Pettah. The hosts live in the house, and breakfast is cooked at home.',
      "It was once the home of the host's mother, a celebrated Sri Lankan dancer of the 1950s, and its rooms are still furnished with antiques.",
    ],
    photo: {
      src: photo.sittingRoom,
      alt: 'A sitting room furnished with antiques',
    },
  },
  mentions: [
    { title: 'The house', text: 'A beautifully restored old home, calm and full of character.' },
    { title: 'The rooms', text: 'Spacious, nicely decorated and very clean.' },
    { title: 'The hosts', text: 'A warm couple who live in the house and look after you well.' },
    { title: 'The breakfast', text: 'Copious and homemade, with plenty of fresh fruit.' },
  ],
  mentionsSource: 'Summarised from guest reviews on Google.',

  rooms: {
    title: 'The rooms',
    intro: 'Spacious rooms furnished with antiques, one with a four-poster bed.',
    items: [],
    photos: [{ src: photo.fourPoster, caption: 'The four-poster', alt: 'A bedroom with a four-poster bed' }],
  },

  gallery: { title: 'Around the house', photos: [] },
  band: {
    src: photo.gardenFromUpstairs,
    caption: 'The garden, from upstairs',
    alt: 'The garden, seen from an upstairs window',
  },

  location: {
    title: 'North of the Fort',
    text: 'An old part of Colombo by the harbour, a short ride from Fort, Pettah and Galle Face Green.',
    walks: [
      ["St Anthony's Church", 'About 500 m'],
      ['Fort railway station', 'About 3 km'],
      ['Galle Face Green', 'About 3 km'],
    ],
  },

  enquiry: {
    intro:
      "Choose your dates and send them to us on WhatsApp. We'll reply to confirm availability and the rate for your stay.",
    maxGuests: 6,
  },
  details: [
    ['Breakfast', 'Homemade'],
    ['Hosts', 'Live in the house'],
  ],

  sources: [
    'Google Maps listing: rating 4.6 from 49 reviews (checked 20 Oct 2026); review themes (restored old family home, tranquil, spacious clean rooms, live-in couple, copious homemade breakfast with fresh fruit)',
    'Airbnb "The College House by Fort" (rooms/33044161, 4.91 from 128): photos, location north of Fort and Pettah by the harbour, distances, the story of the host\'s mother',
  ],
  confirm: [
    'Most important: confirm College House is the same place as the Airbnb listing "The College House by Fort" (rooms/33044161) before sending. The photos, the dancer story and the distances all come from that listing. Compare its facade photo with the photos on Google.',
    'Reviews say the house is about 170 years old; the page gives no number.',
    'Room types, sizes, check-in and check-out times.',
  ],
};

export default collegeHouse;
