/**
 * SOF Device Database — devices.js
 * Device IDs match worker slugs exactly.
 * type/category is derived from the worker via /routing-summary.
 * fluence is a single numeric value (J/cm²); display formatting done in the comparison tool.
 * price is a single numeric tier (1–5); $ signs and labels derived in the comparison tool.
 * discountCode/discountSaving are determined at runtime via /routing-summary.
 * ───────────────────────────────────────────────────────────────────────────── */

const DEVICES = [
  {
    id: "braun-silk-expert-pro-5",
    name: "Braun Silk Expert Pro 5",
    category: "IPL",
    fluence: 6,
    price: 2,
    wavelength: "510–2000 nm",
    window: "1.5cm² / 3cm² / 4cm²",
    frequency: "Once per week",
    cooling: false,
    scanning: true,
    skinSensor: true,
    lifespan: "400,000",
    skinTones: ["ok","ok","ok","caution","caution",null],
    hairColors: ["ok","ok","ok","ok","x"],
    wins: [
      "Low frequency of use — once per week",
      "Specialized treatment heads for different treatment areas"
    ],
    cons: [
      "Wavelength range carries higher burn risk for dark skin"
    ],
    userReports: "Users report the Braun Silk-Expert Pro 5 delivers significant hair reduction on legs and armpits with regular use, though burns are a commonly reported risk for those with darker skin tones. Pubic areas tend to be slower and may never reach full baldness, but most users still consider Braun a reliable home IPL option.",
    bestFor: null,
    links: {
      buy: "https://get.scienceoverfluff.com/braun-silk-expert-pro-5?ref=comparison-Braun-SilkExpertPro5",
      buyLabel: "Get it here",
      review: null,
      compare: null,
    },
  },
  {
    id: "dermrays-v6s",
    name: "DermRays V6S",
    category: "Laser/LED",
    fluence: 7,
    price: 3,
    wavelength: "1064 nm",
    window: "10 × 30 mm",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: null,
    lifespan: "30,000,000",
    skinTones: ["ok","ok","ok","ok","ok","ok"],
    hairColors: ["ok","ok","ok","x","x"],
    wins: [
      "1064 nm wavelength — optimal for very dark skin up to Fitzpatrick VI",
      "Affordable diode option for darker skin tones",
      "Large treatment window"
    ],
    cons: [
      "High frequency of use",
      "Very low fluence for a laser-based device",
    ],
    userReports: "Users report the V6S is easy to use but has lower fluence than many competing devices, making it less effective for full hair removal. Most users say it only thins hair and slows growth rather than eliminating it, even after months of use. Some users saw little to no improvement.",
    bestFor: null,
    links: {
      buy: "https://get.scienceoverfluff.com/dermrays-v6s?ref=comparison-DermRays-V6S",
      buyLabel: "Get it here",
      review: null,
      compare: null,
    },
  },
  {
    id: "dermrays-v8s",
    name: "DermRays V8S",
    category: "Laser/LED",
    fluence: 9,
    price: 3,
    wavelength: "810 nm",
    window: "10 × 30 mm",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: null,
    lifespan: "30,000,000",
    skinTones: ["ok","ok","ok","ok","ok",null],
    hairColors: ["ok","ok","ok","x","x"],
    wins: [
      "Affordable entry point for diode laser",
      "High lifetime flash count",
      "Large treatment window covers area faster"
    ],
    cons: [
      "High frequency of use",
      "Low fluence compared to similar devices"
    ],
    userReports: "Users report mixed results, with many seeing slow progress or only thinning rather than full elimination even after weeks of use. Pain levels vary, and expectations should be tempered.",
    bestFor: null,
    links: {
      buy: "https://get.scienceoverfluff.com/dermrays-v8s?ref=comparison-DermRays-V8S",
      buyLabel: "Get it here",
      review: null,
      compare: null,
    },
  },
  {
    id: "philips-lumea-8000",
    name: "Philips Lumea 8000",
    category: "IPL",
    fluence: 5,
    price: 3,
    wavelength: "520–1200 nm / 590–1200 nm",
    window: "2cm² / 3cm² / 4.1cm²",
    frequency: "Every 2 weeks",
    cooling: false,
    scanning: true,
    skinSensor: true,
    lifespan: "450,000",
    skinTones: ["ok","ok","ok","caution",null,null],
    hairColors: ["ok","ok","ok","ok","x"],
    wins: [
      "Low frequency of use",
      "Specialized treatment heads",
      "Companion guidance app"
    ],
    cons: [
      "Lower fluence than some budget IPL options"
    ],
    userReports: "Users report the Philips Lumea 8000 produces strong hair reduction over time and is notably easy to use, with most describing it as painless or mildly uncomfortable. Legs tend to show the best results, while other areas can be slower, and effectiveness is highest for those with light skin and dark hair.",
    bestFor: null,
    links: {
      buy: "https://get.scienceoverfluff.com/philips-lumea-8000?ref=comparison-Lumea8000",
      buyLabel: "Get it here",
      review: null,
      compare: null,
    },
  },
  {
    id: "philips-lumea-9000",
    name: "Philips Lumea 9000",
    category: "IPL",
    fluence: 5,
    price: 4,
    wavelength: "520–1200 nm / 590–1200 nm",
    window: "2cm² / 3cm² / 4.1cm²",
    frequency: "Every 2 weeks",
    cooling: false,
    scanning: true,
    skinSensor: true,
    lifespan: "450,000",
    skinTones: ["ok","ok","ok","caution",null,null],
    hairColors: ["ok","ok","ok","ok","x"],
    wins: [
      "Low frequency of use",
      "Specialized treatment heads",
      "Companion guidance app",
      "Can be used plugged in or cordless"
    ],
    cons: [
      "Lower fluence than some budget IPL options",
      "High price point for an IPL device"
    ],
    userReports: "Users report the Philips Lumea 9000 delivers significant hair reduction with consistent use, especially on legs and underarms. The cordless design (can be used plugged in or not) is a convenience, though results vary by body area with bikini and facial hair often requiring more persistence. Some users with darker blonde hair have reported slowed hair growth after consistent use of this device.",
    bestFor: null,
    links: {
      buy: "https://get.scienceoverfluff.com/philips-lumea-9000?ref=comparison-Lumea9000",
      buyLabel: "Get it here",
      review: null,
      compare: null,
    },
  },
  {
    id: "tria-4x",
    name: "Tria 4X",
    category: "Laser/LED",
    fluence: 20,
    price: 4,
    wavelength: "810 nm",
    window: "10 mm (circular)",
    frequency: "Every 2 weeks",
    cooling: false,
    scanning: false,
    skinSensor: null,
    lifespan: "90,000",
    skinTones: ["ok","ok","ok","ok",null,null],
    hairColors: ["ok","ok","ok","x","x"],
    wins: [
      "Established product (first on the market for at-home use)",
      "Compact and maneuverable for small areas"
    ],
    cons: [
      "Painful to use — no cooling",
      "Long treatment sessions",
      "Poor battery life",
      "Very low lifetime flash count"
    ],
    userReports: "Many users report the Tria 4X works well for small areas and facial hair, but the small treatment window makes large areas slow and tedious. Users consistently report significant pain at higher settings, common battery issues that interrupt sessions, and device failures, though some still see effective long-lasting reduction with consistent use.",
    bestFor: null,
    links: {
      buy: "https://get.scienceoverfluff.com/tria-4x?ref=comparison-Tria-4X",
      buyLabel: "Get it here",
      review: null,
      compare: "https://www.scienceoverfluff.com/p/tria-4x-vs-viqure-s-ld",
    },
  },
  {
    id: "ulike-air-3",
    name: "Ulike Air 3",
    category: "IPL",
    fluence: 6.36,
    price: 1,
    wavelength: "560–1200 nm",
    window: "3.3 cm²",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: false,
    lifespan: "300,000",
    skinTones: ["ok","ok","ok","caution",null,null],
    hairColors: ["ok","ok","ok","x","x"],
    wins: [
      "One of the most affordable IPL devices",
    ],
    cons: [
      "High frequency of use required",
    ],
    userReports: "Users report the Ulike Air 3 works well for armpits and legs, with many seeing significant reduction even with inconsistent use over time. The device is described as relatively painless and quick to use, though bikini and facial hair respond less reliably.",
    bestFor: null,
    links: {
      buy: "https://get.scienceoverfluff.com/ulike-air-3?ref=comparison-Ulike-Air3",
      buyLabel: "Get it here",
      review: null,
      compare: null,
    },
  },
  {
    id: "ulike-air-4",
    name: "Ulike Air 4",
    category: "IPL",
    fluence: 7.27,
    price: 1,
    wavelength: "550–1200 nm",
    window: "3.3 cm²",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: false,
    lifespan: "300,000",
    skinTones: ["ok","ok","ok","caution",null,null],
    hairColors: ["ok","ok","ok","x","x"],
    wins: [
      "One of the most affordable devices",
      "Higher fluence than many other IPLs"
    ],
    cons: [
      "High frequency of use required",
    ],
    userReports: "The Ulike Air 4 is a relatively new device (successor to the Air 3), so there are currently no long-term user reviews.",
    bestFor: null,
    links: {
      buy: "https://get.scienceoverfluff.com/ulike-air-4?ref=comparison-Ulike-Air4",
      buyLabel: "Get it here",
      review: null,
      compare: "https://www.scienceoverfluff.com/p/ulike-technical-review-and-results",
    },
  },
  {
    id: "ulike-air-10",
    name: "Ulike Air 10",
    category: "IPL",
    fluence: 6.67,
    price: 1,
    wavelength: "550–1200 nm",
    window: "3.9 cm²",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: true,
    lifespan: "300,000",
    skinTones: ["ok","ok","ok","caution","caution",null],
    hairColors: ["ok","ok","ok","x","x"],
    wins: [
      "Least painful IPL device",
      "Affordable price point",
      "4 flashes per second (Dual Lights technology)"
    ],
    cons: [
      "High frequency of use (3× per week)",
      "Results vary on difficult-to-treat hair (finer hair or medium-brown hair color)"
    ],
    userReports: "Users report the Ulike Air 10 is comfortable to use, with many seeing noticeable slowing and thinning of hair after consistent use over weeks to months. Results vary by body area and hair type, though fair skin with dark hair tends to respond best.",
    bestFor: null,
    links: {
      buy: "https://get.scienceoverfluff.com/ulike-air-10?ref=comparison-Ulike-Air10",
      buyLabel: "Get it here",
      review: "https://www.scienceoverfluff.com/p/ulike-technical-review-and-results",
      compare: null,
    },
  },
  {
    id: "ulike-x",
    name: "Ulike X",
    category: "IPL",
    fluence: 6.67,
    price: 2,
    wavelength: "550–1200 nm",
    window: "3.9 cm²",
    frequency: "3× per week",
    cooling: true,
    scanning: true,
    skinSensor: true,
    lifespan: "300,000",
    skinTones: ["ok","ok","ok","caution","caution",null],
    hairColors: ["ok","ok","ok","x","x"],
    wins: [
      "Affordable price point",
      "2 flashes per second (Dual Lights technology)"
    ],
    cons: [
      "High frequency of use",
    ],
    userReports: "Users report the Ulike X provides fast, noticeable hair reduction on dark coarse hair, with many seeing results within weeks and praising the cooling feature for comfort. However, results vary significantly by person and body area (face responds less reliably than body).",
    bestFor: null,
    links: {
      buy: "https://get.scienceoverfluff.com/ulike-x?ref=comparison-Ulike-X",
      buyLabel: "Get it here",
      review: null,
      compare: "https://www.scienceoverfluff.com/p/ulike-technical-review-and-results",
    },
  },
  {
    id: "viqure-epipro",
    name: "ViQure EpiPro",
    category: "Laser/LED",
    fluence: 30,
    price: 5,
    wavelength: "808 nm",
    window: "12 × 14 mm",
    frequency: "Every 3-8 weeks",
    cooling: true,
    scanning: true,
    skinSensor: null,
    lifespan: "5,000,000",
    skinTones: ["ok","ok","ok","ok","ok","ok"],
    hairColors: ["ok","ok","ok","ok","ok"],
    wins: [
      "Highest fluence of any at-home device",
      "Rated for all skin tones including very dark skin",
      "Works on a wide range of hair colors"
    ],
    cons: [
      "Highest price point",
      "Must be used with ultrasound gel"
    ],
    userReports: "Many users report purchasing the EpiPro after other devices have failed them, though its high price tag often deters first-time buyers. Users consistently say the high fluence delivers successful results for stubborn areas like male facial hair, and overall reviews are generally positive.",
    bestFor: null,
    links: {
      buy: "https://get.scienceoverfluff.com/viqure-epipro?ref=comparison-EpiPro",
      buyLabel: "Get it here",
      review: null,
      compare: "https://www.scienceoverfluff.com/p/viqure-s-ld-vs-epipro-which-one-should-you-buy",
    },
  },
  {
    id: "viqure-s-ld",
    name: "ViQure S-LD",
    category: "Laser/LED",
    fluence: 25,
    price: 4,
    wavelength: "780–850 nm",
    window: "8 × 8 mm",
    frequency: "Every 3-8 weeks",
    cooling: true,
    scanning: true,
    skinSensor: null,
    lifespan: "100,000,000",
    skinTones: ["ok","ok","ok","ok","ok",null],
    hairColors: ["ok","ok","ok","x","x"],
    wins: [
      "Best value for price of any at-home device",
      "Works on a wide range of skin tones including darker skin",
      "Effective on hormonal hair (face, pubic region)",
      "Highly maneuverable due to smaller treatment head",
      "Highest lifetime flash count of any device"
    ],
    cons: [
      "Must be used with ultrasound gel"
    ],
    userReports: "Users report significant hair reduction across various skin and hair types including Fitzpatrick IV-V skin tones. Several users have had progress in stubborn treatment areas like the bikini region. The cooling tip makes pain more manageable for sensitive zones, despite not being completely painless.",
    bestFor: null,
    links: {
      buy: "https://get.scienceoverfluff.com/viqure-s-ld?ref=comparison-S-LD",
      buyLabel: "Get it here",
      review: "https://www.scienceoverfluff.com/p/viqure-s-ld-at-home-hair-removal-timelines-hacks-results",
      compare: null,
    },
  },
];

const SKIN_META = [
  { color: "#FFECE3", label: "Fitzpatrick I",   roman: "I"   },
  { color: "#F6DEC4", label: "Fitzpatrick II",  roman: "II"  },
  { color: "#EFC795", label: "Fitzpatrick III", roman: "III" },
  { color: "#D69F78", label: "Fitzpatrick IV",  roman: "IV"  },
  { color: "#9F6D56", label: "Fitzpatrick V",   roman: "V"   },
  { color: "#64483E", label: "Fitzpatrick VI",  roman: "VI"  },
];

const HAIR_META = [
  { label: "Black",       img: "https://raw.githubusercontent.com/ScienceOverFluff/ScienceOverFluff/main/Images/Black-Hair.png"      },
  { label: "Dark brown",  img: "https://raw.githubusercontent.com/ScienceOverFluff/ScienceOverFluff/main/Images/Dark-Brown-Hair.png" },
  { label: "Light brown", img: "https://raw.githubusercontent.com/ScienceOverFluff/ScienceOverFluff/main/Images/Light-Brown-Hair.png"},
  { label: "Dark blonde", img: "https://raw.githubusercontent.com/ScienceOverFluff/ScienceOverFluff/main/Images/Dark-Blonde-Hair.png"},
  { label: "Auburn",      img: "https://raw.githubusercontent.com/ScienceOverFluff/ScienceOverFluff/main/Images/Auburn-Hair.png" },
];
