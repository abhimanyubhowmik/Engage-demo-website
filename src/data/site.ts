export const site = {
  name: 'ENGAGE',
  tagline: 'Future Engineers',
  fullTitle:
    "Educating Europe's Future Engineers for the Next Generation of Mobile Working Machines: AI driven Sustainability, Productivity, and Safety",
  description:
    'ENGAGE is a Marie Skłodowska-Curie Doctoral Network training 13 doctoral candidates in AI, robotics and mechanics for the next generation of mobile working machines in mining, construction, harbours, forestry and farming.',
  grantNumber: '101226234',
  call: 'HORIZON-MSCA-2024-DN',
  start: '2025-10-01',
  end: '2029-09-30',
  fundingStatement:
    'This project has received funding from the European Union’s Horizon Europe (HE) Marie Skłodowska-Curie Actions Doctoral Networks (MSCA-DN-ID) HORIZON-MSCA-2024-DN call, under the Grant Agreement number 101226234.',
  disclaimer:
    'Views and opinions expressed are those of the author(s) only and do not necessarily reflect those of the European Union or the European Research Executive Agency (REA). Neither the European Union nor the granting authority can be held responsible for them.',
  contacts: [
    {
      role: 'Coordinator',
      name: 'Prof. Reza Ghabcheloo',
      email: 'reza.ghabcheloo@tuni.fi',
      org: 'Tampere University',
      supervisorId: 'ghabcheloo',
    },
    {
      role: 'Project Manager',
      name: 'Salla Kotakorva',
      email: 'salla.kotakorva@tuni.fi',
      org: 'Tampere University',
    },
  ],
};

export const nav = [
  { href: '/research/', label: 'Research' },
  { href: '/doctoral-candidates/', label: 'Doctoral Candidates' },
  { href: '/supervisors/', label: 'Supervisors' },
  { href: '/consortium/', label: 'Consortium' },
  { href: '/news/', label: 'News & Events' },
  { href: '/contact/', label: 'Contact' },
];

export type ThemeId = 'perception' | 'control' | 'safety' | 'simulation';
export type IndustryId = 'construction' | 'mining' | 'forestry' | 'agriculture' | 'logistics';

/** The four ENGAGE research objectives, used to group DC projects. */
export const themes: Record<
  ThemeId,
  { label: string; short: string; objective: number; blurb: string; image: string }
> = {
  perception: {
    label: 'Perception & 3D mapping',
    short: 'Perception',
    objective: 1,
    blurb:
      'Estimate and track the state of the machine and its dynamic surroundings in real time with multimodal sensing — for autonomous navigation and continuously updated as-built models.',
    image: '/images/generated/offroad-scan.webp',
  },
  control: {
    label: 'Learning-based control',
    short: 'Control',
    objective: 2,
    blurb:
      'Make machine-learning controllers for excavators and hydraulic booms more adaptable and precise, learning from large but imperfect offline datasets and transferring across tasks.',
    image: '/images/generated/simulation-twin.webp',
  },
  safety: {
    label: 'Safe autonomy',
    short: 'Safety',
    objective: 3,
    blurb:
      'Mitigate unsafe motions and certify the safety of AI-based autonomous functions so they can be brought into practice in construction and agriculture.',
    image: '/images/generated/agriculture-field.webp',
  },
  simulation: {
    label: 'Simulation intelligence',
    short: 'Simulation',
    objective: 4,
    blurb:
      'Simulation-based testing, training and optimisation of autonomous capabilities, capturing contact forces and soil deformation realistically.',
    image: '/images/generated/construction-site.webp',
  },
};

export const industries: Record<IndustryId, { label: string; blurb: string; image: string }> = {
  construction: {
    label: 'Construction',
    blurb: 'Excavators and earth-movers that perceive the worksite, dig with learned control and keep as-built models up to date.',
    image: '/images/generated/construction-site.webp',
  },
  mining: {
    label: 'Mining & quarries',
    blurb: 'Persistent 4D maps and safe navigation for haulage and loading in changing, unstructured mining environments.',
    image: '/images/generated/mining-pit.webp',
  },
  forestry: {
    label: 'Forestry',
    blurb: 'Positioning and traversability for forest machines working among trees, soft soil and changing seasons.',
    image: '/images/photos/forest-machine.webp',
  },
  agriculture: {
    label: 'Agriculture',
    blurb: 'Certified-safe geofencing and autonomy for tractors and field robots that maximise usable field coverage.',
    image: '/images/generated/agriculture-field.webp',
  },
  logistics: {
    label: 'Harbours & logistics',
    blurb: 'Terminal and hub automation where heavy machines share space with people and other vehicles.',
    image: '/images/generated/harbour-terminal.webp',
  },
};
