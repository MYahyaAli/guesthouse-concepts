import type { Property } from '../types';

/** Google Maps "By owner" photos. */
const owner = (id: string) => `https://lh3.googleusercontent.com/gps-cs-s/${id}=w1600-h1200-k-no`;

const photo = {
  pavilion: owner('ANWiy9T-e2pcU8fhmLaSRd52152lq5opO-ZU3mxdTRpgov2-0nogaxe9_FgA1Gc54FCJuC_cPOOEiAwjQoAbbXKH37TRBUOqosQlbFpC4P_dlL2zqsd1i0DefJTS7yG_JsIQ3H-NRH3qIzGSPt_6'),
  tealBedroom: owner('ANWiy9Sp_2p2fHnuJn8bBGj3yUgQm5-ievbpHfs2ePe_Aq3F8b8jko720aBzu5hNGyPkxb7Yi1lw4UHi8CqpJulReW8h9H-yYWCX-tkWEjukh6KUD_-KK3xYIvystebJigRZ1XfFhOAMJRPkMYP4'),
  cottage: owner('ANWiy9TzZH6qje_AO6qge-UDOPK8VBzDVdhOlEqHF4Nl08srktHEiT3qUD41dQGufFO3ynyFuQnOldThmeUQnYcKbq9-TsdlKaw9d64NTOT358GMrOCcOf83bVzPIprcT6K5xoirMMgr'),
  wallsAtNight: owner('ANWiy9RJk20u3egdlJmoPan4_3i0A3F0DbnDZCsQ43apV6Jc2Z2Q8gKiMQTWh46NHhAOBaXZyF8JYYk2EVOsWHzy6A8aftP1Ec4XKDh97vJXBCYvp5GWvxk8xR7zQQA7Vq6Fj8uX_bKLa-TwnY6c'),
  room: owner('ANWiy9RrG9OIXCZxN8g9reOwkCmxvU_eHxmP5oBmx7n5k8gEeXorzE4KJsKJ1pv_gohOiCmv_HBti2gNXcJUzxD-cB5mKttYCF9Aq6M_oz24MyJlPZIauG_y9xt85niiwyv0JwAlrBbabg'),
  terrace: owner('ANWiy9SbptjczGWiM9_oSl9my1kJY7MvMWzCRSdXW1vPnfdc8YPkYScQzAk8MU-4uhZ2L9pp56UA8pQwWeVdPEbA_qC2RaiCESHZLXEMQX78Dfl9M7LMvPKtP7lotH3NocoWvnWL5r8MRYahASE'),
  gardenPath: owner('ANWiy9SM_syymZW1FrwDKYhKOFq2OeqFKmDQlI9G9N9fRTYAZsczyawhKO-VMEAV--VNjJDiFhhOx_jtfh0GPS1DbPbGsuoGKZyG6OLAaNJCGM2Rt9kB2oOdCUcfeGaytwWNUrOmMLD-ig'),
  latticePath: owner('ANWiy9QG8sWPEqAWeJYKvYrHhlYZS0v5Dns4vW8R7c7IEI3GGLsk-F5nJrGv9dUEkFgQhVApsWPdKNWhXP8fxIEC5p4x1QrZ47-FgOz8qHsjEYLd6AmEB7VHD93jD9_nWzFDymrfhLXEcH_In_3v'),
  bedroom: owner('ANWiy9SW8_lLwQnvyM7w7DGaiR6vAI_xbMJw_ca5Pblhr41tyY5xkN_6c1sjU9llxREFLaPTJ7sOtMCuTr7_1xsPeX0wmyVT6gMYxv_6qDl3wMtqHy9Qz02DgCXspZzPeVdTQpeI6JZaZ3ed01qC'),
  breakfast: owner('ANWiy9Qu_b-cGjzfI1vWOqKscVAx4NzQfw7LjcmICV-PTzMsgVRjGLLGbm0seVCXi1OBNHffNL-LeywE_xw6nFGqoCxqf07JXY_8_4mVyjhwIhHvX2jmg1pQinahvHaZuGgdsL2uPlFL'),
  flowers: owner('ANWiy9SfX7rh5mf9r-KdqhYUyEGjjOjn-2VYfbIu02UhLC579NDjUOnJUmbyLOsHfsOg1S3X0zF3QgduCxsqMKliIjMQ7U-w_8ukXQOTc8um67ZIKh2kizo6oPuJpTnTyhCCjDXZ50xXExLvVAGQ'),
};

const bayHouse: Property = {
  slug: 'the-bay-house-ng56',
  tier: 'A',
  ready: true,
  theme: 'weligama-breeze',

  name: 'The Bay House',
  fullName: 'The Bay House Weligama',
  area: 'Weligama',
  lede: 'White garden cottages behind breeze-block walls, a two-minute walk from the beach in Weligama.',

  contact: {
    whatsapp: '971528106690',
    phoneDisplay: '+971 52 810 6690',
    address: ['Abeyagiri, Pelena', 'Weligama, Sri Lanka'],
  },
  map: {
    query: 'The Bay House Weligama',
    placeId: 'ChIJkfSbFkUV4ToROKx8I_70SGI',
    url: 'https://maps.google.com/maps?cid=7082179786394348600',
  },
  rating: {
    score: 4.8,
    count: 118,
    source: 'Google',
    url: 'https://maps.google.com/maps?cid=7082179786394348600',
    checked: '2026-10-20',
  },

  hero: {
    src: photo.wallsAtNight,
    alt: 'Terracotta breeze-block walls lit up at night',
  },
  intro: {
    title: 'Behind the walls',
    navLabel: 'The house',
    paragraphs: [
      'The Bay House sits in a quiet residential corner of Weligama, a short walk from the bay. Whitewashed cottages stand around a garden, behind terracotta breeze-block walls that glow in the evening.',
      'Breakfast and barbecues are served on the terrace, and the surf spots of Weligama Bay are about ten minutes away.',
    ],
    photo: {
      src: photo.cottage,
      alt: 'One of the white cottages in the garden',
    },
  },
  mentions: [
    { title: 'Clean and cosy', text: 'Exceptionally clean, cosy rooms.' },
    { title: 'Quiet and private', text: 'A calm place to come back to after the beach.' },
    { title: 'Beautiful inside and out', text: 'Beautifully designed rooms and a lovely garden.' },
    { title: 'The hosts', text: 'A friendly host family who make you feel at home.' },
  ],
  mentionsSource: 'Summarised from guest reviews on Google.',

  rooms: {
    title: 'The rooms',
    intro: 'Bright, simple rooms with crisp white walls and touches of teal.',
    items: [],
    photos: [
      { src: photo.tealBedroom, caption: 'Teal headboard', alt: 'A bedroom with a teal headboard' },
      { src: photo.room, caption: 'A double room', alt: 'A bedroom at The Bay House' },
      { src: photo.bedroom, caption: 'A bright room', alt: 'A bright bedroom with white walls' },
    ],
  },

  gallery: {
    title: 'Around the garden',
    photos: [
      { src: photo.terrace, caption: 'The terrace', alt: 'The terrace, with a surfboard leaning against the wall' },
      { src: photo.gardenPath, caption: 'The garden path', alt: 'A path through the garden' },
      { src: photo.latticePath, caption: 'After dark', alt: 'A lit path beside a brick lattice wall' },
      { src: photo.breakfast, caption: 'Breakfast', alt: 'Breakfast laid out on the table' },
      { src: photo.flowers, caption: 'In the garden', alt: 'Flowers beside lit paving stones' },
    ],
  },
  band: {
    src: photo.pavilion,
    caption: 'The garden pavilion',
    alt: 'A pavilion in the garden',
  },

  location: {
    title: 'Close to the bay',
    text: 'The Bay House is in Pelena, a quiet residential part of Weligama, close to the beach and the surf spots of the bay.',
    walks: [
      ['The beach', 'About 2 min walk'],
      ["The fishermen's beach", 'About 5 min walk'],
      ['Surf spots', 'About 10 min away'],
    ],
  },

  enquiry: {
    intro:
      "Choose your dates and send them to us on WhatsApp. We'll reply to confirm availability and the rate for your stay.",
    maxGuests: 6,
  },
  details: [
    ['Breakfast', '7 to 10:30 am'],
    ['Dinner', '7 to 10 pm'],
  ],

  sources: [
    'Their Wix site (2015): about 2 min walk to the beach, 5 min to the fishermen\'s beach, 10 min to surf spots, breakfast and BBQ on the terrace, quiet residential area, address Abeyagiri, Pelena; phones +94 41 226 0270 (landline) and +971 52 810 6690',
    'Google Maps "By owner" photos (196); rating 4.8 from 118 reviews (checked 20 Oct 2026); review themes; breakfast and dinner hours',
  ],
  confirm: [
    'The WhatsApp number: +971 52 810 6690 is from their 2015 website and Google lists no phone. Confirm it before pitching; the other number on the site is a landline.',
    'Their website still links to Google+ and uses a stock photo in its hero: a strong opening for the pitch.',
    '"Weligama Bay House" at 60 Samaraweera Place is a different property; don\'t mix them up.',
    'Breakfast and dinner hours come from the Google listing.',
    'Room types, sizes and amenities aren\'t published; the page describes rooms by their photos.',
  ],
};

export default bayHouse;
