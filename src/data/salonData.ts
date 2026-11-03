export interface ServiceItem {
  id: string;
  name: string;
  category: 'Hair Styling' | 'Hair Treatments' | 'Skin Care' | 'Facial Treatments' | 'Makeup' | 'Manicure & Pedicure' | 'Spa & Relaxation';
  duration: string;
  shortDesc: string;
  fullDesc: string;
  ritualSteps: string[];
  pricing: string;
  image: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Interiors' | 'Hair Artistry' | 'Skin & Radiance' | 'Spa Sanctuary';
  image: string;
  caption: string;
  aspect: 'landscape' | 'portrait' | 'square';
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  roleOrPersona: string;
  serviceExperienced: string;
  quote: string;
  sessionDate: string;
  radianceScore: number;
}

export const IMAGES = {
  heroSalon: '/src/assets/images/hero_luxury_salon_1793701727054.jpg',
  hairCouture: '/src/assets/images/service_hair_couture_1793701729553.jpg',
  facialRadiance: '/src/assets/images/service_facial_radiance_1793701742556.jpg',
  spaSanctuary: '/src/assets/images/salon_spa_ambiance_1793701728310.jpg',
};

export const SERVICES_LIST: ServiceItem[] = [
  // Hair Styling
  {
    id: 'bespoke-couture-cut',
    name: 'Bespoke Couture Cut & Silhouette',
    category: 'Hair Styling',
    duration: '75 min',
    shortDesc: 'A sculptural tailored haircut crafted to accentuate your facial architecture and natural hair movement.',
    fullDesc: 'Following an in-depth cranial assessment and lifestyle consultation, our master artisans hand-sculpt each section using precision Japanese shears. Completed with a tailored conditioning wash and blowout.',
    ritualSteps: ['Architecture & bone structure consultation', 'Botanical cleansing & scalp prep', 'Customized shear sculpting', 'Velina signature silk blowout'],
    pricing: 'Contact for Pricing',
    image: IMAGES.hairCouture,
    featured: true,
  },
  {
    id: 'editorial-silk-blowout',
    name: 'Editorial Silk Blowout & Gloss',
    category: 'Hair Styling',
    duration: '60 min',
    shortDesc: 'Weightless voluminous styling finished with luminous diamond shine and botanical protection.',
    fullDesc: 'Imbues hair with touchable softness, mirror-like gloss, and lasting humidity resistance utilizing heat-activated amino complexes.',
    ritualSteps: ['Purifying wash', 'Thermal shield infusion', 'Hand-crafted round brush sculpting', 'Glaze finish spray'],
    pricing: 'Contact for Pricing',
    image: IMAGES.hairCouture,
  },
  {
    id: 'bridal-hautecouture-hair',
    name: 'Haute Couture Bridal Artistry',
    category: 'Hair Styling',
    duration: '120 min',
    shortDesc: 'Timeless architectural upstyling or romantic cascading waves tailored for special ceremonies.',
    fullDesc: 'A bespoke ritual for wedding ceremonies and high-profile galas. Includes trial preparation, hair padding integration if desired, and veil or jewelry placement.',
    ritualSteps: ['Concept & moodboard session', 'Texturizing foundation', 'Architectural hair sculpture', 'All-day humidity veil lock'],
    pricing: 'Contact for Pricing',
    image: IMAGES.hairCouture,
  },

  // Hair Treatments
  {
    id: 'caviar-restorative-infusion',
    name: 'Caviar Restorative Keratin Ceremony',
    category: 'Hair Treatments',
    duration: '90 min',
    shortDesc: 'Ultra-concentrated marine caviar peptide infusion that repairs cuticles and restores virgin elasticity.',
    fullDesc: 'Intense reconstructive treatment for stressed, chemically processed, or heat-fatigued strands. High-potency caviar lipids penetrate the hair cortex under micro-steam.',
    ritualSteps: ['Detoxifying pre-cleanser', 'Micro-steam peptide mist', 'Cold-pressed caviar masque massage', 'Cryo-rinse cuticle seal'],
    pricing: 'Contact for Pricing',
    image: IMAGES.hairCouture,
    featured: true,
  },
  {
    id: 'botanical-scalp-rejuvenation',
    name: 'Organic Botanical Scalp Elixir & Detox',
    category: 'Hair Treatments',
    duration: '60 min',
    shortDesc: 'Microbiome-balancing scalp therapy with rosemary, Japanese camellia oil, and jade comb gua sha.',
    fullDesc: 'Deep cellular stimulation to detoxify hair follicles, improve micro-circulation, and induce deep cranial relaxation.',
    ritualSteps: ['Trichological digital assessment', 'Exfoliating enzyme scrub', 'Warm camellia oil shiatsu massage', 'Jade gua sha stimulation'],
    pricing: 'Contact for Pricing',
    image: IMAGES.hairCouture,
  },

  // Skin Care
  {
    id: 'hydra-infusion-therapy',
    name: 'Cellular Hydra-Infusion Therapy',
    category: 'Skin Care',
    duration: '75 min',
    shortDesc: 'Multilevel hyaluronic molecular infusion delivering dewy radiance and deep cellular plumping.',
    fullDesc: 'Harnessing pure oxygen and low-molecular hyaluronic compounds, this non-invasive infusion floods parched epidermis with moisture while soothing redness.',
    ritualSteps: ['Gentle enzymatic cleanse', 'Hyperbaric oxygen nutrient spray', 'Deep ultrasound peptide push', 'Algae hydrating occlusive mask'],
    pricing: 'Contact for Pricing',
    image: IMAGES.facialRadiance,
  },
  {
    id: 'antioxidant-barrier-ceremony',
    name: 'Antioxidant Golden Barrier Ceremony',
    category: 'Skin Care',
    duration: '60 min',
    shortDesc: 'Lipid barrier reconstruction utilizing cold-pressed plant oils and sea buckthorn antioxidants.',
    fullDesc: 'Restores the delicate acid mantle against urban stressors, screen light, and climate transitions, leaving skin visibly cushioned and serene.',
    ritualSteps: ['Prebiotic milk cleansing', 'Warm botanical compress', 'Nutrient lipid facial massage', 'Ceramide protective veil'],
    pricing: 'Contact for Pricing',
    image: IMAGES.facialRadiance,
  },

  // Facial Treatments
  {
    id: 'velina-signature-lifting',
    name: 'The Velina Signature Lifting Ritual',
    category: 'Facial Treatments',
    duration: '90 min',
    shortDesc: 'Sculptural facial massage combined with targeted microcurrents for immediate contour and youthful luminosity.',
    fullDesc: 'Our crowning facial treatment. Combines intra-oral buccal lifting massage, lymphatic drainage, and clinical peptides to sharpen jawline contour and awaken facial tone.',
    ritualSteps: ['Double aromatic oil cleansing', 'Lymphatic neck & clavicle release', 'Sculptural buccal muscle lifting', 'Collagen biosimilar sheet infusion'],
    pricing: 'Contact for Pricing',
    image: IMAGES.facialRadiance,
    featured: true,
  },
  {
    id: '24k-gold-radiance-facial',
    name: '24K Gold Cellular Radiance Facial',
    category: 'Facial Treatments',
    duration: '90 min',
    shortDesc: 'Pure 24k gold leaf application to accelerate collagen renewal and impart an ethereal glass-skin glow.',
    fullDesc: 'An opulent ritual favored before gala evenings. Pure 24-karat gold sheets are infused deep into the skin with warm rose quartz rollers and potent vitamin C serums.',
    ritualSteps: ['Triple cleansing ritual', 'Rose water micro-exfoliation', '24-karat gold leaf adherence', 'Rose quartz thermodynamic massage'],
    pricing: 'Contact for Pricing',
    image: IMAGES.facialRadiance,
  },

  // Makeup
  {
    id: 'red-carpet-bespoke-makeup',
    name: 'Red Carpet Editorial Glamour',
    category: 'Makeup',
    duration: '75 min',
    shortDesc: 'Airbrushed complexion refinement, custom lash design, and velvety lip formulation tailored for camera and natural light.',
    fullDesc: 'Crafted by our celebrity makeup directors. Focuses on seamless complexion harmony, understated eye contouring, and luminous skin highlights.',
    ritualSteps: ['Skin prep & thermal hydration priming', 'Airbrush foundation veil', 'Bespoke hand-crafted lash clusters', 'Velvet lip lock'],
    pricing: 'Contact for Pricing',
    image: IMAGES.hairCouture,
  },
  {
    id: 'couture-bridal-makeup',
    name: 'Haute Bridal Glow & Veil Finish',
    category: 'Makeup',
    duration: '90 min',
    shortDesc: 'Emotion-proof, luminous bridal makeup tailored for all-day ceremony wear and timeless photography.',
    fullDesc: 'An intimate, calming bridal beauty ritual including customized skin balancing, tear-proof eye artistry, and touch-up luxury kit.',
    ritualSteps: ['Cryo-depuffing eye treatment', 'Illuminating base contouring', 'Soft-focus eyelid sculpting', 'Bespoke custom blended lip shade'],
    pricing: 'Contact for Pricing',
    image: IMAGES.hairCouture,
  },

  // Manicure & Pedicure
  {
    id: 'cashmere-rose-manicure',
    name: 'Cashmere Rose Petal Manicure',
    category: 'Manicure & Pedicure',
    duration: '60 min',
    shortDesc: 'Warm rose milk soak, gentle cuticle refinement, organic shea butter exfoliation, and high-shine non-toxic finish.',
    fullDesc: 'A delicate hand spa ritual with damascena rose water, nourishing cuticle oils, and meticulous nail edge contouring.',
    ritualSteps: ['Fresh rose petal milk hand bath', 'Aesthetic cuticle precision care', 'Warm paraffin lipid mask', 'Diamond buffer or couture gel polish'],
    pricing: 'Contact for Pricing',
    image: IMAGES.heroSalon,
  },
  {
    id: 'diamond-spa-pedicure',
    name: 'Sanctuary Travertine Spa Pedicure',
    category: 'Manicure & Pedicure',
    duration: '75 min',
    shortDesc: 'Volcanic mineral foot bath, heated travertine stone massage, and botanical callus smoothing in private suite.',
    fullDesc: 'Sink into linen lounge seating while feet soak in mineral salts and lavender buds. Completed with acupressure foot reflexology and flawless polish.',
    ritualSteps: ['Dead Sea mineral bath', 'Pumice botanical exfoliation', 'Heated basalt stone leg massage', 'Signature breathable polish'],
    pricing: 'Contact for Pricing',
    image: IMAGES.spaSanctuary,
  },

  // Spa & Relaxation
  {
    id: 'warm-stone-aromatherapy',
    name: 'Travertine Warm Stone Aromatherapy',
    category: 'Spa & Relaxation',
    duration: '90 min',
    shortDesc: 'Smooth volcanic stones bathed in rare wild orange and frankincense oils melt muscle tension and quiet the mind.',
    fullDesc: 'Performed in our candlelit stone suites. Rhythmic heated stone glides release fascia tension, improve circulation, and rebalance inner equilibrium.',
    ritualSteps: ['Aromatic inhalation ritual', 'Full-body muscle warming', 'Basalt stone therapeutic gliding', 'Warm sandalwood mist close'],
    pricing: 'Contact for Pricing',
    image: IMAGES.spaSanctuary,
    featured: true,
  },
  {
    id: 'cranial-tension-release',
    name: 'Serenity Cranial & Cervical Release',
    category: 'Spa & Relaxation',
    duration: '60 min',
    shortDesc: 'Targeted acupressure across temple, neck, and scalp points to alleviate digital fatigue and tension.',
    fullDesc: 'A transcendent midday restorative session designed for deep tranquility, mental clarity, and posture rejuvenation.',
    ritualSteps: ['Warm herbal neck wrap', 'Sub-occipital fascia release', 'Temple and ear acupressure', 'Cooling peppermint forehead compress'],
    pricing: 'Contact for Pricing',
    image: IMAGES.spaSanctuary,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Central Styling Promenade',
    category: 'Interiors',
    image: IMAGES.heroSalon,
    caption: 'Fluted limestone pillars, curved illuminated vanity mirrors, and custom brass styling pedestals.',
    aspect: 'landscape',
  },
  {
    id: 'gal-2',
    title: 'The Radiance Skincare Suite',
    category: 'Skin & Radiance',
    image: IMAGES.facialRadiance,
    caption: 'Intimate private treatment room featuring botanical golden elixirs and clinical lifting therapies.',
    aspect: 'portrait',
  },
  {
    id: 'gal-3',
    title: 'Editorial Silk Hair Sculpture',
    category: 'Hair Artistry',
    image: IMAGES.hairCouture,
    caption: 'Effortless glossy silk waves, custom color glossing, and bespoke cut architecture.',
    aspect: 'portrait',
  },
  {
    id: 'gal-4',
    title: 'The Thermal Bath & Relaxation Sanctuary',
    category: 'Spa Sanctuary',
    image: IMAGES.spaSanctuary,
    caption: 'Quiet travertine thermal mineral pool, warm linen loungers, and ambient amber cove lighting.',
    aspect: 'landscape',
  },
  {
    id: 'gal-5',
    title: 'The Private VIP Consultation Suite',
    category: 'Interiors',
    image: IMAGES.heroSalon,
    caption: 'Curved boucle seating, marble refreshment tables, and personalized beauty diagnostic atelier.',
    aspect: 'landscape',
  },
  {
    id: 'gal-6',
    title: 'Botanical Facial Infusion',
    category: 'Skin & Radiance',
    image: IMAGES.facialRadiance,
    caption: 'Custom-blended plant peptides applied with precision aesthetic massage.',
    aspect: 'portrait',
  },
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Elena Rostova',
    roleOrPersona: 'Art Collector & Patron',
    serviceExperienced: 'The Velina Signature Lifting Ritual',
    quote: 'Stepping into VELINA feels like entering a calm architectural sanctuary. The signature lifting massage sculpted my features without any downtime. Pure luxury from start to finish.',
    sessionDate: 'Demonstration Client Profile · Milan Experience',
    radianceScore: 5,
  },
  {
    id: 'test-2',
    clientName: 'Camille Delacroix',
    roleOrPersona: 'Creative Director',
    serviceExperienced: 'Bespoke Couture Cut & Silhouette',
    quote: 'The level of craftsmanship and attention to bone structure is unmatched. My hair has never moved with such fluid grace. It is not just a haircut—it is haute horlogerie for hair.',
    sessionDate: 'Demonstration Client Profile · Paris Residency',
    radianceScore: 5,
  },
  {
    id: 'test-3',
    clientName: 'Sophia Vane-Tempest',
    roleOrPersona: 'Editorial Stylist',
    serviceExperienced: 'Travertine Warm Stone Aromatherapy',
    quote: 'The spa sanctuary pool and heated stone therapy dissolved weeks of travel exhaustion in ninety minutes. The atmosphere of quiet elegance is absolute perfection.',
    sessionDate: 'Demonstration Client Profile · Private Session',
    radianceScore: 5,
  },
  {
    id: 'test-4',
    clientName: 'Margaux Bennett',
    roleOrPersona: 'Architectural Designer',
    serviceExperienced: '24K Gold Cellular Radiance Facial',
    quote: 'As an architect, I am captivated by VELINA’s fluted stone walls, warm lighting, and calm acoustics. The facial gave my skin an undeniable porcelain glow.',
    sessionDate: 'Demonstration Client Profile · Concept Showcase',
    radianceScore: 5,
  },
  {
    id: 'test-5',
    clientName: 'Vivienne Laurent',
    roleOrPersona: 'Gala & Bridal Guest',
    serviceExperienced: 'Red Carpet Editorial Glamour',
    quote: 'Understated elegance that highlighted my natural features rather than masking them. The makeup lasted flawlessly through an entire evening gala.',
    sessionDate: 'Demonstration Client Profile · Special Event',
    radianceScore: 5,
  },
];

export const BRAND_VALUES = [
  {
    number: '01',
    title: 'Personalized Beauty Architecture',
    desc: 'We reject one-size-fits-all treatments. Every cut, color formula, and skincare protocol is tailored to your unique anatomical bone structure, skin microbiome, and lifestyle.',
  },
  {
    number: '02',
    title: 'Architectural Serenity',
    desc: 'Crafted with tactile travertine, fluted limestone, and warm ambient illumination, our space was conceived to quiet the nervous system the moment you step across the threshold.',
  },
  {
    number: '03',
    title: 'Botanical & Clinical Harmony',
    desc: 'We combine cold-pressed organic botanicals with advanced peptide biotechnology and clinical microcurrents to achieve radiant results without compromise.',
  },
  {
    number: '04',
    title: 'Discreet, Attentive Care',
    desc: 'From private VIP styling suites to tailored beverage menus and acoustic privacy, your experience is safeguarded with supreme discretion and warmth.',
  },
];

export const PORTFOLIO_DISCLAIMER = {
  headerBadge: 'PORTFOLIO DEMONSTRATION CONCEPT',
  creator: 'MLM STUDIOS',
  bodyText: 'VELINA is a fictional luxury beauty salon brand concept designed and developed by MLM STUDIOS for portfolio demonstration purposes. All services, client personas, and atelier depictions represent creative design concepts rather than real business operations.',
};
