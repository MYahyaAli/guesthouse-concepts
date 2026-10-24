import type { Property } from '../types';

/** Google Maps "By owner" photos. */
const owner = (id: string) => `https://lh3.googleusercontent.com/gps-cs-s/${id}=w1600-h1200-k-no`;

const photo = {
  lawn: owner('ANWiy9QXd2FIO9wWw4n-8ZWl1ZmQ2nkxKbEth_gQKnRhWjnVIZqtL4dFLYXYh24VGr1CvffDIyIPYzbCrNdGFUO1BUFttNOEvWbQct4XNVPIr9f8HYXTLLLqDX8kWn4PWc7IKgEXQUQiaA'),
  balconyRoom: owner('ANWiy9QrNI5eazmCHZ3OpQ-A878k5ymv303rx6Z5uWqDF05caZUPkwzom1kAemlasOiCW32OCtd_trZW7SQL1voj2-bwHqyFLuq1l4D6uGySdBNkVCsy3TvVDvo6p3T-3Jf_4Ab9GLtkGg'),
  lounge: owner('ANWiy9RuD_M1iGEBhUorTJ1P-OC3FLvmbSFwZtNLR50PRsTAigLhuAmcVhLwQtW8WvaIBd5NSiNr7nChY1IrVygdBl8dfGVX_oVTk12-2KGegKdhe3ciehkjVRbxSE887kRAl5O6Xdiq'),
  bedroom: owner('ANWiy9R2ZhNg9eRlivefNS6lGtG5dHbbsvwyPgbTHpIYouoLZMTbzTWsZEAHAB4rVILJ7GwtxV3HnklC9VlnqZp_ZMEf8TpxNWEkbZ-k7e09DjMWPBqifAlMYHmG8WneM8g6cAWr6-aM'),
  redCushions: owner('ANWiy9QP2GZMjuIWqmyGWyoa4KiraLfUFefUmpNQBlV2SLuRN8K1yUvapwemjmenk4nzv2REeSqYVx5gLj7qT7Wjoe7B0NEge4WldFUf09vP19jbZVVzacJxD5KiHnTxaJFG1tYcSN-ffA'),
  brightRoom: owner('ANWiy9SxqGJEcWt0W2Bc6kKwD087mi1FcoLcUF7Zb_sySXeKKsDvrpvgtlteoEQoPPOMi8x1Dwbey47ya_KDcIZlweOsOF-HZoAyk4hn7oklSsedv0w22kT9QQEXiS1LqMdSM82F1B9zZQ'),
  twinRoom: owner('ANWiy9QGdoorHCPhsXw4BlFu6tSMyO5tIMQo68xOGgCS_1d9AXszcVRZAjkujnyokbHaIIg2RRnnI3gewwW2zhsJ1S0StVbWT6F6GkCuG4gbqu64-lyr3yA9TksO9M4MyUe1yei0trA76A'),
  rooftop: owner('ANWiy9Rdjkb-uAMtutIbnw3S2-PZt7WkVOrbK-oj9HlBLWn3LT5hsVRUeHzK2wUlBlASWuayhskAlTnqb4eH79GdszcsQK7K3um9Hf55pxotxe-FuX2DRaQfZPil1UwFfVunKaz_05xo'),
  redRoom: owner('ANWiy9TLL72FPOqedazpf2C19BuJ9G4F9-XY-6vvzHHI-LnJT7TdOof5jZ34bNaQL38b3zJFdQJvTShT5mR6QSxaenMw9Hy7D2y3XTk1rSJvWXY5ZKk6mPd5esU4AocexN7dbbZgMSM'),
  gardenVeranda: owner('ANWiy9SGE77OQ_oWjUM92-I2bLrfw9HF9uuxEthNYxkPcfsCgJtoq5g_N_YT4XA_pWbO-Hfm35fR1psTVUxixjY0dITqJRLip6PbVOJet_AoT-zxy292L2CSCkzCAXu749TdnYeqZWCq_Q'),
  diningRoom: owner('ANWiy9RJd23XswkiSMLhizG1lkpMsmPRz_UNve_LLf9wtks_axatv2Rdcl-WvwwF2tcvZ050MTLMG-h6cGNpIupb4hgQdPbjFnHAx-Ld3W1goI9bJmDH0_G_PlUCWp8bSRfDrPXr-iBJ'),
  hillsideGarden: owner('ANWiy9QHyZrc8s3EIuc5E3qKqOO32RpPN7IenS9zZssGCoMSgkdiazvdsHjK1ZeuHMoX-ufg_vSf_7YhP_6sS20Pet8wYDcS-idGRwj0BaRklwC4kxUazWbjgBaPNt_DM9fR4jTgRaL_'),
  goldenRoom: owner('ANWiy9S_JM_Gy9qB9xFZQyI4WhGaheTZF-MSZ_anw3KCER1m3jyg7V5T5MbS7-J2Z3SybMrjh8ULuxcNB63jgHfiKBFvM3CbGQqe_oBO-wBgD8auyTExA_6GYbmdF0K7Mlj1JlYBFk2v'),
};

const villa49: Property = {
  slug: 'villa-49-21o2',
  tier: 'A',
  ready: true,
  theme: 'kandy-hill',

  name: 'Villa 49',
  fullName: 'Villa 49',
  area: 'Kandy',
  lede: 'Rooms full of colour on a quiet lane near Kandy Lake, with a rooftop terrace that looks out over the hills.',

  contact: {
    whatsapp: '94714460911',
    phoneDisplay: '+94 71 446 0911',
    address: ['No. 49 Louis Peiris Mawatha, Lane 1', 'Kandy 20000, Sri Lanka'],
  },
  map: {
    query: 'Villa 49, Louis Peiris Mawatha, Kandy',
    placeId: 'ChIJAfQvpTBm4zoRdza3wgbMzI0',
    url: 'https://maps.google.com/maps?cid=10217765984005469815',
  },
  rating: {
    score: 4.7,
    count: 425,
    source: 'Google',
    url: 'https://maps.google.com/maps?cid=10217765984005469815',
    checked: '2026-10-20',
  },

  hero: {
    src: photo.rooftop,
    alt: 'The rooftop terrace, looking out over green hills',
  },
  intro: {
    title: 'The villa',
    paragraphs: [
      'Villa 49 sits on a quiet lane near Kandy Lake, a short walk from the Temple of the Tooth and the town centre. Each room is decorated differently, and there is a garden, a lounge and a rooftop terrace with views across the hills.',
      'Breakfast is served in the garden, with string hoppers, eggs, fruit and juice, and the restaurant cooks Sri Lankan and Western food, including rice and curry in the evening.',
    ],
    photo: {
      src: photo.gardenVeranda,
      alt: 'A veranda opening onto the garden',
    },
  },
  mentions: [
    { title: 'A real home', text: 'Characterful rooms, and the feel of a family house rather than a hotel.' },
    { title: 'The welcome', text: 'Warm, attentive service from the moment you arrive.' },
    { title: 'Peace and quiet', text: "A peaceful spot that's still close to the sights." },
    { title: 'Easy walks', text: 'The lake and the Temple of the Tooth are both within walking distance.' },
  ],
  mentionsSource: 'Summarised from guest reviews on Google and ZenHotels.',

  rooms: {
    title: 'The rooms',
    intro:
      'Every room has air conditioning, a mini fridge and cable TV. There are doubles, a family room and a bridal suite, and the top-floor room has a vaulted ceiling and a terrace of its own.',
    items: [],
    photos: [
      { src: photo.redRoom, caption: 'A room in deep red', alt: 'A bedroom decorated in deep red' },
      { src: photo.goldenRoom, caption: 'A room in warm gold', alt: 'A bedroom decorated in warm golden tones' },
      { src: photo.balconyRoom, caption: 'A room with a balcony', alt: 'A bedroom with a door out to a balcony' },
      { src: photo.twinRoom, caption: 'A twin room', alt: 'A twin room with two beds' },
      { src: photo.brightRoom, caption: 'A bright double', alt: 'A bright, airy bedroom' },
      { src: photo.bedroom, caption: 'A double room', alt: 'A double bedroom at Villa 49' },
    ],
  },

  gallery: {
    title: 'Around the villa',
    photos: [
      { src: photo.lawn, caption: 'The lawn', alt: 'The lawn, with glass doors opening into the house' },
      { src: photo.lounge, caption: 'The lounge', alt: 'The lounge' },
      { src: photo.redCushions, caption: 'A corner to read in', alt: 'A sitting area with red cushions' },
      { src: photo.diningRoom, caption: 'The dining room', alt: 'The dining room' },
    ],
  },
  band: {
    src: photo.hillsideGarden,
    caption: 'The garden on the hillside',
    alt: 'The garden on the hillside, thick with green',
  },

  location: {
    title: 'Near Kandy Lake',
    text: "Louis Peiris Mawatha is a quiet lane close to the lake, so most of Kandy's sights are an easy walk or a short tuk-tuk ride away.",
    walks: [
      ['Temple of the Tooth', 'About 10 min walk'],
      ['Kandy Lake', 'A short walk'],
      ['Town centre', '10 to 15 min walk'],
    ],
  },

  enquiry: {
    intro:
      "Choose your dates and send them to us on WhatsApp. We'll reply to confirm availability and the rate for your stay.",
    maxGuests: 6,
  },
  details: [
    ['Check-in', 'From 2 pm'],
    ['Check-out', 'By noon'],
    ['Reception', 'Open 24 hours'],
    ['Wi-Fi', 'Free'],
    ['Parking', 'Free'],
    ['Airport transfers', 'On request'],
  ],

  sources: [
    'villa49.weebly.com (their own site): beside the lake, about 10 min walk to the Temple of the Tooth; About page: about 15 min to the centre, Sri Lankan and Western restaurant, AC, mini fridge and cable TV in rooms, free Wi-Fi and parking, 24h reception, rooftop terrace, tours and airport shuttle, Tourist Board approved',
    'Google Maps "By owner" photos; rating 4.7 from 425 reviews (checked 20 Oct 2026); review themes',
    'ZenHotels listing (9.2 from 585): room types, breakfast in the garden, rice and curry dinners, check-in from 14:00, check-out until 12:00',
  ],
  confirm: [
    'Room names, sizes and how many rooms there are (ZenHotels says 6 to 8). The page describes rooms by their photos; captions like "A room in deep red" are ours.',
    'Their site says about 10 min walk to the centre; its About page says 15. The page says 10 to 15.',
    'That breakfast is still served in the garden and the restaurant still serves dinner.',
  ],
};

export default villa49;
