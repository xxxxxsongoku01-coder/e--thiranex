// ─── PRODUCT DATA ───
const PRODUCTS = [
  {
    id: "arch-vase-01",
    name: "Arch Vase No. 1",
    material: "Stoneware",
    category: "ceramics",
    price: 148,
    badge: "new",
    description: "Hand-thrown in small batches from high-fired stoneware. Each piece carries the subtle variation of its making — a quiet record of the hands that shaped it. The wide-mouthed arch silhouette holds single stems or generous arrangements alike.",
    specs: { Height: "28 cm", Diameter: "14 cm", Weight: "680 g", Finish: "Unglazed satin", Origin: "Lisbon, PT" },
    svg: `<svg viewBox="0 0 120 180" width="120" height="180"><ellipse cx="60" cy="160" rx="38" ry="8" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M22 160 C18 120 16 80 30 50 Q42 24 60 20 Q78 24 90 50 C104 80 102 120 98 160" stroke="currentColor" stroke-width="1.5" fill="none"/><ellipse cx="60" cy="30" rx="22" ry="8" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>`
  },
  {
    id: "mono-carafe-02",
    name: "Mono Carafe",
    material: "Borosilicate Glass",
    category: "glass",
    price: 94,
    description: "Mouth-blown borosilicate glass, clear and weightless. The elongated neck creates a pleasing ritual of pouring. Heat-resistant to 200°C. Sealed with a cork stopper turned from reclaimed oak.",
    specs: { Height: "32 cm", Capacity: "750 ml", Material: "Borosilicate", Stopper: "Reclaimed oak", Origin: "Bohemia, CZ" },
    svg: `<svg viewBox="0 0 80 200" width="80" height="200"><path d="M28 195 L20 120 Q14 80 16 50 L20 30 Q22 20 32 16 L40 14 L48 16 Q58 20 60 30 L64 50 Q66 80 60 120 L52 195 Z" stroke="currentColor" stroke-width="1.5" fill="none"/><ellipse cx="40" cy="195" rx="24" ry="5" stroke="currentColor" stroke-width="1" fill="none"/><line x1="36" y1="14" x2="44" y2="14" stroke="currentColor" stroke-width="1"/><path d="M36 4 Q40 0 44 4 L44 14 L36 14 Z" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>`
  },
  {
    id: "basin-bowl-03",
    name: "Basin Bowl",
    material: "Cement",
    category: "ceramics",
    price: 112,
    badge: "sale",
    salePrice: 89,
    description: "Cast in a proprietary cement blend — lighter than it looks, surprisingly warm to the touch. Food-safe sealer applied inside. Use as a fruit bowl, a centrepiece, a resting place for keys and correspondence.",
    specs: { Diameter: "34 cm", Height: "9 cm", Weight: "1.4 kg", Finish: "Micro-sealed", Origin: "Berlin, DE" },
    svg: `<svg viewBox="0 0 160 80" width="160" height="80"><path d="M10 20 Q20 8 80 8 Q140 8 150 20 L148 58 Q140 72 80 72 Q20 72 12 58 Z" stroke="currentColor" stroke-width="1.5" fill="none"/><ellipse cx="80" cy="20" rx="68" ry="12" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>`
  },
  {
    id: "linen-throw-04",
    name: "Weft Throw",
    material: "Stone-washed Linen",
    category: "textiles",
    price: 195,
    badge: "new",
    description: "Woven on heritage looms in the Alentejo. Stone-washed for immediate softness; the linen will only improve with use and washing. A working object — made to be touched, used, left carelessly on a chair.",
    specs: { Dimensions: "130 × 180 cm", Weight: "620 g", Care: "Machine wash cold", Weave: "Plain twill", Origin: "Alentejo, PT" },
    svg: `<svg viewBox="0 0 160 120" width="160" height="120"><path d="M10 10 Q80 20 150 10 L145 110 Q80 100 15 110 Z" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="30" y1="12" x2="28" y2="108" stroke="currentColor" stroke-width="0.5" stroke-dasharray="4 4"/><line x1="80" y1="16" x2="80" y2="104" stroke="currentColor" stroke-width="0.5" stroke-dasharray="4 4"/><line x1="130" y1="12" x2="132" y2="108" stroke="currentColor" stroke-width="0.5" stroke-dasharray="4 4"/></svg>`
  },
  {
    id: "oxide-cup-05",
    name: "Oxide Cup",
    material: "Iron-glazed Ceramic",
    category: "ceramics",
    price: 58,
    description: "Small-batch fired with an iron-oxide glaze that produces a different surface on every piece. No two are identical. The weight is deliberate — it slows you down. Dishwasher safe after 24 hours seasoning.",
    specs: { Height: "9 cm", Diameter: "8.5 cm", Capacity: "280 ml", Glaze: "Iron oxide", Origin: "Kyoto, JP" },
    svg: `<svg viewBox="0 0 100 100" width="100" height="100"><path d="M20 92 L16 30 Q16 20 50 18 Q84 20 84 30 L80 92 Z" stroke="currentColor" stroke-width="1.5" fill="none"/><ellipse cx="50" cy="92" rx="30" ry="6" stroke="currentColor" stroke-width="1" fill="none"/><ellipse cx="50" cy="30" rx="34" ry="10" stroke="currentColor" stroke-width="1.2" fill="none"/><path d="M84 48 Q96 46 96 54 Q96 62 84 60" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>`
  },
  {
    id: "paper-lamp-06",
    name: "Kozo Pendant",
    material: "Handmade Washi",
    category: "lighting",
    price: 245,
    badge: "new",
    description: "Shade formed from a single sheet of kozo washi — a centuries-old Japanese paper made from mulberry bark. When lit, the inclusions in the fibres cast shifting shadows. Comes with a 2m braided cotton cord. Bulb not included.",
    specs: { Diameter: "45 cm", Height: "38 cm", Cord: "2 m cotton braid", Socket: "E27 / Edison screw", Origin: "Echizen, JP" },
    svg: `<svg viewBox="0 0 140 160" width="140" height="160"><line x1="70" y1="0" x2="70" y2="24" stroke="currentColor" stroke-width="2"/><ellipse cx="70" cy="28" rx="8" ry="4" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M62 32 Q30 60 20 120 Q20 140 70 140 Q120 140 120 120 Q110 60 78 32 Z" stroke="currentColor" stroke-width="1.5" fill="none"/><ellipse cx="70" cy="140" rx="48" ry="10" stroke="currentColor" stroke-width="1" fill="none"/></svg>`
  },
  {
    id: "oak-tray-07",
    name: "Serving Tray",
    material: "Solid White Oak",
    category: "wood",
    price: 168,
    description: "CNC-milled from a single board of air-dried white oak — no joints, no laminate. The grain direction is chosen individually for each piece. Finished with a food-safe walnut oil. Gets better with age and use.",
    specs: { Dimensions: "40 × 28 cm", Height: "3.5 cm", Wood: "White oak", Finish: "Walnut oil", Origin: "Vermont, US" },
    svg: `<svg viewBox="0 0 200 80" width="200" height="80"><rect x="8" y="16" width="184" height="52" rx="6" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="8" y="16" width="184" height="8" rx="3" stroke="currentColor" stroke-width="1" fill="none"/><line x1="20" y1="24" x2="20" y2="68" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><line x1="60" y1="24" x2="55" y2="68" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><line x1="100" y1="24" x2="100" y2="68" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><line x1="140" y1="24" x2="145" y2="68" stroke="currentColor" stroke-width="0.5" opacity="0.5"/><line x1="180" y1="24" x2="180" y2="68" stroke="currentColor" stroke-width="0.5" opacity="0.5"/></svg>`
  },
  {
    id: "iron-hook-08",
    name: "Wall Hook Set",
    material: "Forged Iron",
    category: "hardware",
    price: 76,
    description: "Set of three hooks, hand-forged by a blacksmith in the Black Forest. Each hook is slightly different — the irregularity is the point. Mounting hardware included. Powder-coated for indoor use.",
    specs: { Projection: "8 cm", Height: "6 cm", Set: "3 hooks", Finish: "Matte powder coat", Origin: "Baden, DE" },
    svg: `<svg viewBox="0 0 120 80" width="120" height="80"><rect x="8" y="30" width="104" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M30 40 L30 55 Q30 68 42 68 Q54 60 48 50" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M60 40 L60 55 Q60 68 72 68 Q84 60 78 50" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M90 40 L90 55 Q90 68 102 68 Q114 60 108 50" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`
  }
];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "ceramics", label: "Ceramics" },
  { id: "glass", label: "Glass" },
  { id: "textiles", label: "Textiles" },
  { id: "lighting", label: "Lighting" },
  { id: "wood", label: "Wood" },
  { id: "hardware", label: "Hardware" }
];
