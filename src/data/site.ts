// TODO: replace with the real booking email
const bookingEmail = "nashkiidairtas@proton.me";

export const site = {
  name: "Nashkii Dairtas",
  role: "Musician & sound artist",
  location: "Indonesia",

  bookingEmail: bookingEmail,

  github: "https://github.com/nashkiidairtas",

  socials: [
    { label: "Instagram", href: "https://instagram.com/nashkiidairtas" },
    { label: "YouTube", href: "https://youtube.com/@nashkiidairtas" },
    { label: "Facebook", href: "https://www.facebook.com/1297446943458729" },
    // { label: "Spotify", href: "" },
    { label: "SoundCloud", href: "https://soundcloud.com/nashkiidairtas" },
    { label: "TikTok", href: "https://tiktok.com/nashkiidairtas" },
    { label: "X", href: "https://x.com/nashkiidairtas" },
  ],

  // TODO: replace with real releases as they come out
  releases: [
    {
      no: "001",
      title: "Transmission 001",
      format: "Single",
      year: "Forthcoming",
      note: "First signal from the Shift sessions.",
    },
    {
      no: "002",
      title: "Transmission 002",
      format: "Single",
      year: "Forthcoming",
      note: "Night-street recordings, slowed and weighted.",
    },
    {
      no: "003",
      title: "Shift — full record",
      format: "Album",
      year: "In progress",
      note: "Eight studies in peach and plum.",
    },
  ],

  // TODO: refine with the artist's own words
  shortBio:
    "Nashkii Dairtas is a musician working between sound and image — gathering night-street recordings, tape hiss and synthesised texture into slow, heavy abstractions. The work is documented in the Shift archive: eight studies in peach and plum.",

  longBio: [
    "Nashkii Dairtas is a musician and sound artist assembling slow, heavy abstractions from unlikely material: night-street field recordings, tape hiss, detuned synthesisers, and the hum of empty rooms. The pieces move at walking pace — loops that refuse to resolve, low frequencies that arrive before the melody does.",
    "Sound is only half the practice. Each recording session produces a visual counterpart — the Shift archive, a series of duotone studies in peach and plum shot on nocturnal streets and unlit fields. Sleeves, stage visuals and press material all draw from the same archive, so the music is never heard without being seen.",
    `Debut transmissions are forthcoming. For booking, press and collaboration, contact ${bookingEmail}.`,
  ],

  facts: [
    { label: "Project", value: "Nashkii Dairtas" },
    // { label: "Practice", value: "Music / sound / image" },
    // { label: "Status", value: "Independent" },
  ],
};
