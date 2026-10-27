import type { Property } from './types';

const booking = (id: string) =>
  `https://q-xx.bstatic.com/xdata/images/hotel/max1280x900/${id}&o=&a=2237691`;
const trip = (id: string) => `https://ak-d.tripcdn.com/images/${id}`;

const photo = {
  courtyard: booking('699109146.jpg?k=fd262e8968e07a8a80bfb7f55f43ec590777684d11f73d42c86758028ce2a1f4'),
  hall: booking('699105268.jpg?k=df2e844a9c793bec0c40176ade05b1598d2e12f885f59aabbb6a17f1c82cd483'),
  frontAtNight: booking('699106462.jpg?k=a1dcd497c1a46f1cf271bf1bdd85bc848ec0ecb336c8507d00943f54428e7040'),
  roomDesk: booking('699126799.jpg?k=2baaeff6e8713a8cec2e1802fea3adc491ab9f5b01a35c2ad5e7eff1f581551d'),
  lounge: booking('699104204.jpg?k=cc08699168fb95f3764c440fafd9bae3323fd92a8401883466b28c538d63c4ce'),
  roomDoors: booking('699116412.jpg?k=5907c2297a76ad599623a4beb401918b637efbb399c5f65aa4e970598cc91177'),
  veranda: booking('699104371.jpg?k=4ab7ca767013320c62a1acc68783ca7d39701d8a0d459a51174efb3724b0cee9'),
  sittingRoom: trip('0225x12000lqyz8p40AF7_R_960_660_R5_D.jpg'),
  roomPatio: trip('0580w12000o9b53t68782_R_960_660_R5_D.jpg'),
  streetNight: trip('0580412000n8r7sve695C_R_960_660_R5_D.jpg'),
  roomNet: trip('0225l12000lqyz7kfE147_R_960_660_R5_D.jpg'),
};

const smallHouse: Property = {
  slug: 'small-house-o64e',

  name: 'Small House',
  fullName: 'Small House Boutique Guest House',
  area: 'Galle Fort',
  lede: 'Four guest rooms around an open courtyard, inside the walls of Galle Fort.',

  contact: {
    whatsapp: '94772095669',
    phoneDisplay: '+94 77 209 5669',
    address: ['Parawa Street, Galle Fort', 'Galle 80000, Sri Lanka'],
  },
  map: {
    query: 'Small House Boutique Guest House, Parawa St, Galle',
    placeId: 'ChIJpQ1JuKZz4ToRwDXeaPrKE34',
    url: 'https://maps.google.com/maps?cid=9084828050186450368',
  },
  rating: {
    score: 4.6,
    count: 78,
    source: 'Google',
    url: 'https://maps.google.com/maps?cid=9084828050186450368',
    checked: '2026-10-20',
  },

  hero: {
    src: photo.frontAtNight,
    alt: 'The front veranda at dusk, with carved wooden pillars, lattice panels over the doors and the lit hall inside',
  },
  intro: {
    title: 'The house',
    paragraphs: [
      'Small House is an old colonial home inside Galle Fort, with whitewashed walls, wooden floors and an open courtyard at its heart. With only four guest rooms, it stays calm and personal.',
      'Breakfast is served in the house every morning. The ramparts, the lighthouse and the cafés of Pedlar Street are all a few minutes away on foot.',
    ],
    photo: {
      src: photo.hall,
      alt: 'The hall, with a round dining table under a chandelier and the staircase behind',
    },
  },
  mentions: [
    { title: 'The breakfast', text: 'Fresh and generous, with Sri Lankan and Western options.' },
    { title: 'Clean, airy rooms', text: 'Spotless, spacious and cool, with comfortable beds.' },
    { title: 'The hosts', text: 'Friendly and caring, and happy to help plan your days.' },
    { title: 'The location', text: "Peaceful, yet a short walk from the Fort's cafés, shops and ramparts." },
  ],
  mentionsSource: 'Summarised from guest reviews on Google and Trip.com.',

  rooms: {
    title: 'Four rooms',
    intro:
      'Every room has air conditioning and its own bathroom. The tile beside each name shows its floor area, drawn to scale.',
    items: [
      {
        name: 'Deluxe Double Room',
        sizeM2: 16,
        photo: {
          src: photo.roomDesk,
          alt: 'A double room with a patterned bedspread, a writing desk and a bright painting',
        },
        facts: ['Views over the courtyard and the town', 'Tea and coffee in the room'],
      },
      {
        name: 'Double Room with Patio',
        sizeM2: 17,
        photo: {
          src: photo.roomPatio,
          alt: 'A double room with a green bench at the foot of the bed and doors opening outside',
        },
        facts: ['Ground floor, with its own patio', 'Opens onto the garden'],
      },
      {
        name: 'Deluxe Queen Room',
        sizeM2: 21,
        photo: { src: photo.roomNet, alt: 'A room with a four-poster bed and a white mosquito net' },
        facts: ['The largest of the double rooms', 'Looks onto the inner courtyard', 'Tea and coffee in the room'],
      },
      {
        name: 'Deluxe King Suite',
        sizeM2: 54,
        photo: { src: photo.roomDoors, alt: 'A bedroom with tall wooden doors and a dressing table' },
        facts: ['Two bedrooms and two bathrooms', 'Private terrace', 'Suits families or friends travelling together'],
      },
    ],
  },

  gallery: {
    title: 'Around the house',
    photos: [
      {
        src: photo.courtyard,
        caption: 'The courtyard',
        alt: 'The whitewashed two-storey house around its open courtyard, with grey-blue shutters and a tiled roof',
      },
      {
        src: photo.lounge,
        caption: 'The lounge',
        alt: 'The lounge, with a blue sofa and yellow cushions against an old brick wall',
      },
      {
        src: photo.sittingRoom,
        caption: 'The sitting room',
        alt: 'The sitting room, with a chandelier above the dining table',
      },
      {
        src: photo.streetNight,
        caption: 'From Parawa Street, at night',
        alt: 'The front veranda seen from the street at night',
      },
    ],
  },
  band: {
    src: photo.veranda,
    caption: 'The upstairs veranda',
    alt: 'The upstairs veranda, with a daybed, terracotta floor tiles and a slatted roof',
    position: '40% 50%',
  },

  location: {
    title: 'Inside the Fort walls',
    text: "Parawa Street sits inside the walls of Galle's old Dutch fort. Most of what you'll want is close by on foot.",
    walks: [
      ['Pedlar Street cafés', '2 min walk'],
      ['Flag Rock', 'About 300 m'],
      ['Lighthouse Beach', '6 min walk'],
      ['Unawatuna Beach', '7 km by tuk-tuk'],
    ],
  },

  enquiry: {
    intro:
      "Choose your dates and send them to us on WhatsApp. We'll reply to confirm availability and the rate for your stay.",
    maxGuests: 6,
  },
  details: [
    ['Check-in', '1 pm to 10 pm'],
    ['Check-out', 'By 11:30 am'],
    ['Breakfast', '7:30 to 10:30 am'],
    ['Wi-Fi', 'Free'],
    ['Airport transfers', 'On request, extra charge'],
  ],

  sources: [
    'Booking.com listing: photos (bstatic.com), room names and sizes, house rules, nearby distances',
    'Trip.com listing: photos (tripcdn.com), guest reviews',
    'Google Maps listing: rating 4.6 from 78 reviews (checked 20 Oct 2026), guest reviews',
  ],
  confirm: [
    'Which photo shows which room: the matches are a best guess.',
    'Refresh the Google rating before sending the link.',
  ],
};

export default smallHouse;
