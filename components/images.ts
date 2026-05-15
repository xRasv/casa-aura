// Curated Unsplash imagery — warm, editorial, hospitality.
// Verified IDs that consistently return warm/moody interiors, dining, wellness.
const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  hero: u("photo-1600585154340-be6161a56a0c", 2400),
  experience: u("photo-1615874959474-d609969a20ed", 1400),

  feat1: u("photo-1540555700478-4be289fbecef", 900),     // spa stones / candles
  feat2: u("photo-1414235077428-338989a2e8c0", 900),     // warm restaurant table
  feat3: u("photo-1519671482749-fd09be7ccebf", 900),     // candlelit dining
  feat4: u("photo-1530229540764-0a06b16ce91f", 900),     // intimate event lights

  // Gallery — moody, warm, editorial
  gal1: u("photo-1600585154526-990dced4db0d", 1200),     // warm arch interior
  gal2: u("photo-1571896349842-33c89424de2d", 900),      // spa moment detail
  gal3: u("photo-1592861956120-e524fc739696", 1200),     // dark candlelit table
  gal4: u("photo-1583416750470-de5e3b4f8b1f", 900),      // spa treatment room
  gal5: u("photo-1530062845289-9109b2c9c868", 1400),     // outdoor candlelit dining
  gal6: u("photo-1566073771259-6a8506099945", 1400),     // warm lounge / lobby

  testimonial: u("photo-1540555700478-4be289fbecef", 1400),
  location: u("photo-1568605114967-8130f3a36994", 1400),
  faq: u("photo-1602002418082-a4443e081dd1", 1200),
  finalCta: u("photo-1582719508461-905c673771fd", 2400),
};
