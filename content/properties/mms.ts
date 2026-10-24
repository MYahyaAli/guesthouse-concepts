import type { Property } from '../types';

const booking = (id: string) =>
  `https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/${id}&o=&a=2237691`;

const photo = {
  treeCorridor: booking('745754199.jpg?k=faa54a0b7c329e2efc48918f164d15a0920f7fb47a4aa2ae7bc73ecc8852eb39'),
  elephantMural: booking('684810507.jpg?k=93df266db55a5d623710af99a20a2d952c5796165281296f1b73f2012e4b276d'),
  tripleBalcony: booking('745747788.jpg?k=b6a7b960cf2aafb4af0c3c4cbf08f1caf2c257d219b456bad0cfc6196fb88246'),
  fourPoster: booking('745751467.jpg?k=e3290e2deb24d1dd5735814c9b58656371b637e06fee97a85271b13fe766c73c'),
  quadCorner: booking('736413835.jpg?k=40b8d13b2ea3553ac7ca1593f26c5b9d4a131a2221fb7744e4db98d5c9806297'),
};

const mms: Property = {
  slug: 'mms-guest-house-9qdm',
  tier: 'B',
  ready: true,
  theme: 'standard',
  themeOverrides: { accent: '#2E6B4F', accentDeep: '#23543E' },

  name: "MM'S Guest House",
  fullName: "MM'S Guest House",
  area: 'Hikkaduwa',
  lede: 'Spotless rooms, painted walls and a garden of huge plants, a five-minute walk from Narigama Beach.',

  contact: {
    whatsapp: '94762159245',
    phoneDisplay: '+94 76 215 9245',
    address: ['399/5 Galle Road (Araliya Road)', 'Hikkaduwa 80240, Sri Lanka'],
  },
  map: {
    query: "MM'S Guest House, Galle Road, Hikkaduwa",
    placeId: 'ChIJsYdetCd34ToRN6Hyh9F7dGo',
    url: 'https://maps.google.com/maps?cid=7670892205178003767',
  },
  rating: {
    score: 5.0,
    count: 31,
    source: 'Google',
    url: 'https://maps.google.com/maps?cid=7670892205178003767',
    checked: '2026-10-20',
  },

  hero: {
    src: photo.elephantMural,
    alt: 'Chairs beneath a painted elephant mural',
  },
  intro: {
    title: 'The house',
    paragraphs: [
      "MM'S is a small guest house just off Galle Road in Hikkaduwa, and its hosts speak English and French.",
      'Guests can use the shared kitchen and the sun terrace, and there is a partner restaurant a few steps away.',
    ],
    photo: {
      src: photo.treeCorridor,
      alt: 'A corridor with a tree painted along the wall',
    },
  },
  mentions: [
    { title: 'Spotless rooms', text: 'Spacious, very clean and thoughtfully decorated.' },
    { title: 'The garden', text: 'An outdoor sitting area full of huge plants.' },
    { title: 'The hosts', text: 'Attentive and kind, always ready to help.' },
    { title: 'Great value', text: 'Lovely rooms for a fair price, close to the beach.' },
  ],
  mentionsSource: 'Summarised from guest reviews on Google.',

  rooms: {
    title: 'The rooms',
    intro: 'Every room has its own bathroom and looks onto the garden.',
    items: [
      { name: 'Double Room with Balcony', sizeM2: [21, 22], facts: ['Air conditioning', 'Balcony over the garden'] },
      { name: 'Triple Room with Balcony', sizeM2: 19, facts: ['Air conditioning', 'Balcony over the garden'] },
      { name: 'Triple Room with Terrace', sizeM2: 21, facts: ['Private terrace', 'Garden view'] },
      { name: 'Quadruple Room with Terrace', sizeM2: 22, facts: ['Air conditioning', 'Room for four', 'Private terrace'] },
    ],
    photos: [
      { src: photo.fourPoster, caption: 'Double Room with Balcony', alt: 'A four-poster bed in the double room with balcony' },
      { src: photo.tripleBalcony, caption: 'Triple Room with Balcony', alt: 'The triple room with balcony, seen through its doors' },
      { src: photo.quadCorner, caption: 'Quadruple Room with Terrace', alt: 'A corner of the quadruple room with terrace' },
    ],
  },

  gallery: { title: 'Around the house', photos: [] },

  location: {
    title: 'Near Narigama Beach',
    text: 'Galle Road runs along the coast through Hikkaduwa, and Narigama Beach is a short walk from the house.',
    walks: [['Narigama Beach', 'About 5 min walk']],
  },

  enquiry: {
    intro:
      "Choose your dates and send them to us on WhatsApp. We'll reply to confirm availability and the rate for your stay.",
    maxGuests: 6,
  },
  details: [
    ['Check-in', '2 pm to 8 pm'],
    ['Check-out', 'By 11 am'],
    ['Kitchen', 'Shared, for guests'],
    ['Wi-Fi', 'Free'],
    ['Parking', 'Free'],
    ['Languages', 'English and French'],
  ],

  sources: [
    'Booking.com listing (read via bedandbreakfast.eu; 9.7 from 32): room types and sizes, garden views, private bathrooms, AC, shared kitchen, sun terrace, garden, free parking and Wi-Fi, check-in 14:00 to 20:00, check-out 10:00 to 11:00, English and French, Narigama Beach about 5 min walk; photos (bstatic.com)',
    'Google Maps listing: rating 5.0 from 31 reviews (checked 20 Oct 2026); review themes (spotless, spacious, harmonious rooms, outdoor sitting area with huge plants, attentive hosts, great value, easy walk to the beach, affiliated restaurant a few metres away)',
  ],
  confirm: [
    'Breakfast isn\'t included with the rooms on Booking.com, and the page doesn\'t mention it.',
    'Booking.com lists two "Double Room with Balcony" types (21 and 22 m²); the page shows them as one.',
    'The Triple Room with Terrace isn\'t listed with air conditioning, so the page doesn\'t claim it.',
  ],
};

export default mms;
