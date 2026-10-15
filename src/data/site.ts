const bookingEmail = 'nashkiidairtas@proton.me'

export const site = {
  name: 'Nashkii Dairtas',
  role: 'Musician & sound artist',

  bookingEmail: bookingEmail,

  epkSite: 'https://nashkiidairtas.github.io/epk',

  github: 'https://github.com/nashkiidairtas',

  socials: [
    { label: 'Instagram', href: 'https://instagram.com/nashkiidairtas' },
    { label: 'YouTube', href: 'https://youtube.com/@nashkiidairtas' },
    { label: 'Facebook', href: 'https://www.facebook.com/1297446943458729' },
    // { label: "Spotify", href: "" },
    { label: 'SoundCloud', href: 'https://soundcloud.com/nashkiidairtas' },
    { label: 'TikTok', href: 'https://tiktok.com/nashkiidairtas' },
    { label: 'X', href: 'https://x.com/nashkiidairtas' }
  ],

  // Working genres (private): electro, electro house, progressive house,
  // complextro, electropop, future bass, alternative
  // Note for the site: amateur, low budget, new, independent, simple.
  // Anonymity is deliberate but never mentioned in the copy.

  // TODO (owner): other fact-sheet fields you may want, fill any of these:
  //   vocals: instrumental or with vocals?
  //   live: club set, band, or studio only?
  //   active since: which year did the project start?
  //   collabs: open to remixes, covers, features? any conditions?
  //   gear: what drum machines, synths, or software?
  //   influences: artists you want named (no places, nothing private)

  // TODO: replace with real releases as they come out
  releases: [
    {
      no: '001',
      title: 'ID 001',
      format: 'Single',
      year: 'Forthcoming',
      note: 'Insert genre name or vibes here.'
    },
    {
      no: '002',
      title: 'ID 002',
      format: 'Single',
      year: 'Forthcoming'
      // note: "Slow one, built from field recordings.",
    }
    // {
    //   no: "003",
    //   title: "*****",
    //   format: "Album",
    //   year: "In progress",
    // note: "The album. Still in progress.",
    // },
  ],

  // TODO: refine with the artist's own words
  shortBio:
    'Nashkii Dairtas is a new electronic music project. Everything is made at home with simple, low-cost gear: drum machines, synths and recordings, including sounds recorded in nature. Some tracks are slow, others are made for dancing. Nothing has been released yet, the first tracks are still being finished.',

  longBio: [
    'Nashkii Dairtas is a new electronic music project. Everything is made at home with simple, low-cost gear: drum machines, synths, and field recordings, including sounds recorded in nature. The style mixes electro and house with occasional future bass and electropop. Arrangements stay simple. Some tracks are slow, others are made for dancing. Nothing has been released yet, the first tracks are still being finished.',
    'The project is independent: no label, no fixed plan. Tracks get released online as they are done. Tak jumps to new ideas when something gets boring, and that keeps things moving. There is no schedule and no deadline, just recording and uploading.',
    `For booking, press, remixes and collaborations, email ${bookingEmail}.`
  ],

  facts: [
    { label: 'Project', value: 'Nashkii Dairtas' },
    { label: 'Music', value: 'Electronic' },
    {
      label: 'Styles',
      value: 'Electro, house, future bass, electropop'
    },
    {
      label: 'Setup',
      value: 'Home studio, simple and low-cost gear'
    },
    {
      label: 'Sources',
      value: 'Field recordings, nature sounds, synths, drum machines'
    },
    {
      label: 'Status',
      value: 'New and independent, nothing released yet'
    },
    { label: 'Location', value: 'Online only' },
    {
      label: 'Contact',
      value: bookingEmail
    }
  ]
}
