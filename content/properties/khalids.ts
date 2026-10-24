import type { Property } from '../types';

const booking = (id: string) =>
  `https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/${id}&o=&a=2237691`;

const photo = {
  doorway: booking('44019651.jpg?k=e56e1ced35f8f839cc3916a80b94324ad65036e955a4553b4c7780fd0fb0dbac'),
  hallway: booking('53293449.jpg?k=e10e2bdd34f15e2bc2297ed8bac4d197131a32ef978e0a06d2c62d927fcb16bd'),
  frontAtDusk: booking('53220085.jpg?k=d4b0ddfcf42e9d0785c5a1d9d7422c11c5831e53f5cb76e2acea2b03b87990ef'),
  familyRoom: booking('114425163.jpg?k=65f1fdea4638ffe9e30f566c41c69f901c6d57c235fb6cf041e7a05698537070'),
  twinBathroom: booking('114424905.jpg?k=0bc08281cbb0ec186822bff99ee3d573945adf7c217fe2d1ffc2dd423d936b8f'),
  bathroom: booking('49240339.jpg?k=2d776f9662643fc4c24455fb3ea55dbb81755c5a5fa6a4b1b876979c6180b1df'),
};

const khalids: Property = {
  slug: 'khalids-guest-house-thtz',
  tier: 'A',
  ready: true,
  theme: 'fort-pedlar',

  name: "Khalid's Guest House",
  fullName: "Khalid's Guest House",
  area: 'Galle Fort',
  lede: 'Colonial rooms on Pedlar Street in Galle Fort, several with their own balcony and a view of the sea.',

  contact: {
    whatsapp: '94773177676',
    phoneDisplay: '+94 77 317 7676',
    address: ['102 Pedlar Street, Fort', 'Galle 80000, Sri Lanka'],
  },
  map: {
    query: "Khalid's Guest House, 102 Pedlar Street, Galle Fort",
    url: 'https://maps.google.com/maps?cid=8272740845013238477',
  },
  rating: {
    score: 4.6,
    count: 30,
    source: 'Google',
    url: 'https://maps.google.com/maps?cid=8272740845013238477',
    checked: '2026-10-20',
  },

  hero: {
    src: photo.frontAtDusk,
    alt: 'The front of the house at dusk, with cobalt-blue columns along the veranda',
  },
  intro: {
    title: 'On Pedlar Street',
    navLabel: 'The house',
    paragraphs: [
      "Khalid's Guest House is a colonial house at 102 Pedlar Street, the Fort's main street of cafés and small shops. Inside, an arched hallway with a polished floor leads to the rooms.",
      'Each room has a private balcony, and some look out to the sea.',
    ],
    photo: {
      src: photo.doorway,
      alt: 'A carved wooden door standing open onto an arched hallway',
    },
  },
  mentions: [
    { title: 'The breakfast', text: 'Generous and fresh, with Sri Lankan dishes, fruit and juice.' },
    { title: 'The welcome', text: "Friendly and helpful, whether it's a tuk-tuk, a tip or a hand with your bags." },
    { title: 'The rooms', text: 'Spacious and full of colonial character, with good air conditioning and comfortable beds.' },
    { title: 'The location', text: 'Central, a few steps from the ramparts, the sea and the cafés of Pedlar Street.' },
  ],
  mentionsSource: 'Summarised from guest reviews on Google and Tripadvisor.',

  rooms: {
    title: 'The rooms',
    intro: 'Every room has air conditioning, its own bathroom, and tea and coffee.',
    items: [
      { name: 'Double Room', sizeM2: 19, facts: ['Sea view', 'Private balcony'] },
      { name: 'Twin Room', sizeM2: 19, facts: ['Two single beds', 'Sea view', 'Private balcony'] },
      { name: 'Triple Room with Balcony', sizeM2: 37, facts: ['Room for three', 'Sea view', 'Private balcony'] },
      { name: 'Deluxe Family Room', sizeM2: 37, facts: ['Includes bunk beds', 'City view', 'Private balcony'] },
    ],
    photos: [
      { src: photo.familyRoom, caption: 'Deluxe Family Room', alt: 'The family room, with bunk beds' },
      { src: photo.twinBathroom, caption: "The Twin Room's bathroom", alt: "The twin room's bathroom, with a stone basin" },
      { src: photo.bathroom, caption: 'A private bathroom', alt: 'A private bathroom in one of the rooms' },
    ],
  },

  gallery: { title: 'Around the house', photos: [] },
  band: {
    src: photo.hallway,
    caption: 'The arched hallway',
    alt: 'A hallway of white arches with a polished floor',
  },

  location: {
    title: 'In the heart of the Fort',
    text: 'Pedlar Street runs through the middle of Galle Fort, so the ramparts, the lighthouse and the beach are all close on foot.',
    walks: [
      ['Pedlar Street cafés', 'On the doorstep'],
      ['The ramparts', 'A few minutes on foot'],
      ['Lighthouse Beach', 'About 5 min walk'],
    ],
  },

  enquiry: {
    intro:
      "Choose your dates and send them to us on WhatsApp. We'll reply to confirm availability and the rate for your stay.",
    maxGuests: 6,
  },
  details: [
    ['Check-in', '11:30 am to 10:30 pm'],
    ['Check-out', 'By 11 am'],
    ['Parking', 'Free'],
    ['Bicycles', 'For hire'],
    ['Airport transfers', 'On request, extra charge'],
  ],

  sources: [
    'Booking.com listing (read via bedandbreakfast.eu): room types, sizes, views, facilities, check-in and check-out',
    'Booking.com photos (bstatic.com). There are no Google "By owner" photos.',
    'Google Maps listing: rating 4.6 from 30 reviews (checked 20 Oct 2026)',
    'Tripadvisor ("Mrs Khalid\'s Guest House", 4.5 from 100 reviews): guest review themes',
  ],
  confirm: [
    'Some reviews say breakfast is served at a sister property around the corner. The page never says where breakfast is served; ask.',
    'Check-in: Booking.com says 11:30 am to 10:30 pm, another site says from 1 pm.',
    'Ask for room photos: the only ones are the family room and two bathrooms.',
    'Older reviews mention a tired look (2022), ants (2019) and no sign outside. Check the place still looks like its photos before pitching.',
  ],
};

export default khalids;
