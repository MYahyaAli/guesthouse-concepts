import type { Property } from '../types';

/** Google Maps "By owner" photos. */
const owner = (id: string) => `https://lh3.googleusercontent.com/gps-cs-s/${id}=w1600-h1200-k-no`;

const photo = {
  front: owner('ANWiy9QyljWWojgh7bBxcRJGw-mG9RU_d0eEG3vzeVaqO_G9pBwCj9LsB85f7bVdk6i2l3UdpkPs1TMxx1Zgn6jrQ0vpGmffUkq2LxTVBo43TrecWimc-A_LkaSNdL2kyo2Am7xMX4bx'),
  mapRoom: owner('ANWiy9QZu9Wem0JHs4U1UDpIz3qqoWY1EyyyvTDsdtImEj_9agGf1g8cID7cxkiM-VbWwxiLuOVJ3Y-7OS6deSd5K83wXAI6058xtunSA65R6NOcNfJEwz7ZVC5bkPxj1_8nhJVSv8r0xkXsL2I'),
  rooftop: owner('ANWiy9R7enFPCt6_iat4mwFTbXgwDbzhxddkO8_1WkJwSYval2C4LrzhkEYBAb5jSkXLgi1gXUrB5YUVwtX0yzLyPd66gdL8R01GgUnvdT1rM17ahEQZz6X0rlcZ5fQAYykB-KLA82RI'),
  lounge: owner('ANWiy9Tbc3HPyjqe2NgQbOeuJUh7ZO7FhlWfoKIJvuRN1phHeMTNvVAKimnqvoaPW5DsM1JJK071pYrRxeIywc5NPO5MLUWvKP0-KIYxkf8YMVDNeaQoxmVBYF8AMxGU3F2eGxH43kcR'),
  atNight: owner('ANWiy9QoGnhNW_FxrdIcsoQYpZPpA0TuFMQho2NOcPJ-7n61cq7FptMr4ku15B4hiK1StpR1wQ3Rr41gpJLNIrpZBahPgsdk8yrKGXJR0xTSHXvLHAb-QApJth7g0I38V325CQlQ'),
  seaBalcony: owner('ANWiy9R2Gbqc2yuzaXgI9CwDWHY_QzXLVOQZBKwg_r_9XA4y0owLkbbq6wkCPmBPJ2J8a6ybJP04TJMec-kRmtn0GlftJ3_HFHz3V48680ZvTcQ0CO7IYYMUyo8kXs66lLXXzy_zcB4'),
  diningLounge: owner('ANWiy9T6tBbHSVFFZtmzg83atkJhDvak1TmVv1e28Y9fIjQ_cbJEIJawA9z3hkaUKwRD0nKvlLGcIxpL2ix7OhcoS7Duigs7Tr2iV40-fa36HSI0efQoZuF3bfUMuZ6uvtZUZGssXdr3cJQz6E32'),
  terracottaRoom: owner('ANWiy9QJvs346kb-zHW4c9BlosQwzGn5bcvQbAXvsx2rscxfQmghzic1eqk2qZMflT8YWXrNOlfKVmI3vPXKwH231raPYWP-Nb-uVN4VGeIGoqaALDx3FNvRqN1Xfmi2FW6MZR5wQMYEuw'),
  bar: owner('ANWiy9SR1xwmm78GjCnP3NJhwgqqjUjmMJBBopLPj1Hkeb3VqprdMH3GGNDJCHQ-7TsKNywZUox-eLGrytJXSc6blJmVXkJl2W7oHQBz8GM19eLpo9T2ZsszG56fPitc073XajZGoP4Y1_5hVxYb'),
  palmBalcony: owner('ANWiy9QA5-ATggu8xxHLsUhthsXcOgXTv1DNSAVvlPZX9kVQRIySRMtvvCWQ1bQnWmX-3mr3_JMSsU7ZTjHiR_s_ZFnXNVYmUjNPLFps5IDODxAk5XLGmHqoe8JsVvObEKFom5Wc92lj8Nbrgsg'),
  beach: owner('ANWiy9TgUY1kDJBBBv6Wk7NiJAhDOzUNr6JcnOI9mtDjbca9_rJpFmf6X9g6W8vp18P-cu0koMreJy39OBqV3Ij4Ks4hx1xR8J4y-9cl1UfahYheweSPKY1u1E6Xpx18Zdam9RimbTmBcsR631E'),
  rooftopBenches: owner('ANWiy9QqbENx3Siu_zAOT0yd5INQ8tVBIXSB0_SYbqQi3tJ6CcFpn9Jdj8_q1WHlXEr_TjRiFF7thtvBei5IcaCLh3HxMw2yk3Egakysn4iifw4fow14tSWgXcVI1vDMSGkyLqm8gIYgQw'),
};

const mountBay: Property = {
  slug: 'mount-bay-e113',
  tier: 'B',
  ready: true,
  theme: 'standard',
  themeOverrides: { accent: '#1E6091', accentDeep: '#184D74' },

  name: 'Mount Bay',
  fullName: 'Mount Bay Guest House',
  area: 'Mount Lavinia',
  lede: 'Big, bright rooms and a rooftop terrace that looks over the palms to the sea, close to Mount Lavinia Beach.',

  contact: {
    whatsapp: '94722777729',
    phoneDisplay: '+94 72 277 7729',
    address: ['26/11 De Saram Road', 'Dehiwala-Mount Lavinia 10370, Sri Lanka'],
  },
  map: {
    query: 'Mountbaylk, 26/11 De Saram Rd, Mount Lavinia',
    placeId: 'ChIJERLf_xlb4joRYNKu68txlvM',
    url: 'https://maps.google.com/maps?cid=17552341718369489504',
  },
  rating: {
    score: 4.7,
    count: 94,
    source: 'Google',
    url: 'https://maps.google.com/maps?cid=17552341718369489504',
    checked: '2026-10-20',
  },

  hero: {
    src: photo.rooftop,
    alt: 'The rooftop terrace, with palm trees and the sea beyond',
  },
  intro: {
    title: 'The guest house',
    paragraphs: [
      'Mount Bay is a guest house on De Saram Road in Mount Lavinia, with spacious rooms, a lounge, a dining room and a rooftop terrace.',
      'There is a restaurant in the house, and a bar with a pool table for the evenings.',
    ],
    photo: {
      src: photo.front,
      alt: 'The front of the building',
    },
  },
  mentions: [
    { title: 'Spacious rooms', text: 'Big, very clean rooms with comfortable beds.' },
    { title: 'Cool and comfortable', text: 'Good air conditioning and hot water.' },
    { title: 'The service', text: 'Friendly staff and excellent service.' },
    { title: 'The food', text: 'Good food from a great chef.' },
  ],
  mentionsSource: 'Summarised from guest reviews on Google and Kayak.',

  rooms: {
    title: 'The rooms',
    intro: 'Spacious rooms with air conditioning and hot water, some with a balcony facing the sea.',
    items: [],
    photos: [
      { src: photo.mapRoom, caption: 'A double room', alt: 'A bedroom with a map on the wall' },
      { src: photo.terracottaRoom, caption: 'Terracotta floors', alt: 'A bedroom with a terracotta tiled floor' },
      { src: photo.seaBalcony, caption: 'A sea-view balcony', alt: 'A balcony with a view of the sea' },
    ],
  },

  gallery: {
    title: 'Around the house',
    photos: [
      { src: photo.palmBalcony, caption: 'Over the palms', alt: 'A balcony looking over palm trees to the sea' },
      { src: photo.lounge, caption: 'The lounge', alt: 'The lounge' },
      { src: photo.diningLounge, caption: 'The dining room', alt: 'The dining lounge' },
      { src: photo.bar, caption: 'The bar', alt: 'The bar, with a pool table' },
      { src: photo.rooftopBenches, caption: 'On the roof', alt: 'Benches on the rooftop terrace' },
      { src: photo.atNight, caption: 'At night', alt: 'The building at night, lit with string lights' },
    ],
  },
  band: {
    src: photo.beach,
    caption: 'The beach nearby',
    alt: 'The beach near the guest house',
  },

  location: {
    title: 'By Mount Lavinia Beach',
    text: 'De Saram Road is in Mount Lavinia, south of central Colombo, close to the beach.',
    walks: [],
  },

  enquiry: {
    intro:
      "Choose your dates and send them to us on WhatsApp. We'll reply to confirm availability and the rate for your stay.",
    maxGuests: 6,
  },
  details: [
    ['Restaurant', 'In the house'],
    ['Bar', 'With a pool table'],
  ],

  sources: [
    'Google Maps listing ("Mountbaylk"): "By owner" photos; rating 4.7 from 94 reviews (checked 20 Oct 2026); review themes (spacious, very clean rooms, good AC and hot water, excellent service, on-site restaurant with a great chef, view of Mount Lavinia Beach)',
    'Kayak ("Mount Bay Guest House", 8.3 from 132): big rooms, comfy beds, friendly staff, good food',
    'Facebook page only; no website',
  ],
  confirm: [
    'The name: Google lists "Mountbaylk", Kayak "Mount Bay Guest House". Ask which they want; the page uses Mount Bay.',
    'How far the beach is: the page leaves distances out until we know.',
    'Some reviews mention bathroom repairs and noise from the coastal railway. Check the place before pitching.',
    'The restaurant may trade under its own name (a review mentions "Cey Wok"); ask before naming it.',
  ],
};

export default mountBay;
