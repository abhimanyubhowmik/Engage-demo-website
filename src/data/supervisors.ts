// Supervisors as listed on dn-engage.eu/supervisors and on the doctoral-candidate profiles.
// `photo` is optional: drop a square image into public/images/people/ and set the path to replace
// the monogram. Each `about` is a short placeholder bio; send supervisors their entry to rewrite.
// The DCs each person supervises are derived automatically from the DC profiles.

export interface Supervisor {
  id: string;
  name: string;
  title?: string;
  partner?: string; // id from partners.ts
  org?: string; // organisation name when not a consortium partner
  unit?: string;
  kind: 'academic' | 'industry';
  about: string;
  photo?: string;
  links?: { website?: string; scholar?: string };
}

export const supervisors: Supervisor[] = [
  {
    id: 'ghabcheloo',
    name: 'Reza Ghabcheloo',
    title: 'Prof.',
    partner: 'tau',
    unit: 'Autonomous Mobile Machines',
    kind: 'academic',
    about:
      'Coordinator of ENGAGE. Professor at Tampere University leading research on autonomous mobile machines — perception, motion control and navigation of heavy-duty machines.',
    links: {
      website: 'https://www.tuni.fi/en/people/reza-ghabcheloo',
      scholar: 'https://scholar.google.com/citations?user=NvfJq6kAAAAJ&hl=en',
    },
  },
  {
    id: 'rahtu',
    name: 'Esa Rahtu',
    title: 'Prof.',
    partner: 'tau',
    unit: 'Computer Vision',
    kind: 'academic',
    about: 'Professor at Tampere University working on computer vision and machine learning for perception and 3D scene understanding.',
    links: { website: 'https://esa.rahtu.fi/', scholar: 'https://scholar.google.com/citations?user=SmGZwHYAAAAJ&hl=en' },
  },
  {
    id: 'kamarainen',
    name: 'Joni-Kristian Kämäräinen',
    title: 'Prof.',
    partner: 'tau',
    unit: 'Computer Vision Group',
    kind: 'academic',
    about: 'Professor in the Computer Vision Group at Tampere University, working on visual perception and robot learning for machines in the real world.',
    links: { website: 'https://research.tuni.fi/vision/' },
  },
  {
    id: 'alcan',
    name: 'Gökhan Alcan',
    title: 'Prof.',
    partner: 'tau',
    kind: 'academic',
    about: 'Supervises research on predictive force and loss models for the contact-aware control of hydraulic machines.',
    links: { website: 'https://www.gokhanalcan.com/', scholar: 'https://scholar.google.com/citations?user=XSVNKtwAAAAJ&hl=en' },
  },
  {
    id: 'lilienthal',
    name: 'Achim J. Lilienthal',
    title: 'Prof.',
    partner: 'tum',
    unit: 'Chair of Perception for Intelligent Systems',
    kind: 'academic',
    about: 'Head of the Chair of Perception for Intelligent Systems at TUM, working on robot perception, 3D mapping and scene understanding.',
    links: {
      website: 'https://www.ce.cit.tum.de/pins/team/achim-j-lilienthal/',
      scholar: 'https://scholar.google.com/citations?user=_CdZ5cgAAAAJ&hl=en',
    },
  },
  {
    id: 'geimer',
    name: 'Marcus Geimer',
    title: 'Prof. Dr.-Ing.',
    partner: 'kit',
    unit: 'Institute of Vehicle System Technology — Mobile Machines',
    kind: 'academic',
    about: 'Heads the Chair of Mobile Machines at KIT’s Institute of Vehicle System Technology, covering safety, automation and drivetrains of off-road machines.',
    links: {
      website: 'https://www.fast.kit.edu/english/mobima/287_332.php',
      scholar: 'https://scholar.google.de/citations?user=LzJ850MAAAAJ&hl=en',
    },
  },
  {
    id: 'neumann',
    name: 'Gerhard Neumann',
    title: 'Prof.',
    partner: 'fzi',
    kind: 'academic',
    about: 'Professor working on machine learning for robotics — reinforcement learning, imitation learning and expressive policies for complex manipulation.',
    links: {
      website: 'https://www.fzi.de/en/team/prof-dr-gerhard-neumann/',
      scholar: 'https://scholar.google.com/citations?user=GL360kMAAAAJ&hl=en',
    },
  },
  {
    id: 'daaboul',
    name: 'Karam Daaboul',
    title: 'Dr.',
    partner: 'fzi',
    kind: 'academic',
    about: 'Co-supervises learning-based control and sim-to-real transfer for heavy mobile machinery.',
  },
  {
    id: 'pajarinen',
    name: 'Joni Pajarinen',
    title: 'Prof.',
    partner: 'aalto',
    unit: 'Robot Learning',
    kind: 'academic',
    about: 'Professor at Aalto University leading research on robot learning, including reinforcement and offline learning for control.',
    links: {
      website: 'https://www.aalto.fi/en/people/joni-pajarinen',
      scholar: 'https://scholar.google.com/citations?user=-2fJStwAAAAJ&hl=en',
    },
  },
  {
    id: 'servin',
    name: 'Martin Servin',
    title: 'Prof.',
    partner: 'umu',
    unit: 'Department of Physics — Digital Physics',
    kind: 'academic',
    about: 'Works on physics-based simulation of mobile machines, multibody dynamics and granular media.',
    links: { website: 'https://www.umu.se/en/staff/martin-servin/', scholar: 'https://scholar.google.com/citations?user=IqOUkOwAAAAJ&hl=en' },
  },
  {
    id: 'singh',
    name: 'Arun Singh',
    title: 'Prof.',
    org: 'University of Tartu',
    kind: 'academic',
    about: 'Co-supervises safe motion planning and control on rough and dynamic terrain (the University of Tartu is not a host institution).',
  },
  {
    id: 'brach',
    name: 'Christine Brach',
    title: 'Dr.',
    partner: 'bosch-rexroth',
    kind: 'industry',
    about: 'Industrial supervisor at Bosch Rexroth for multimodal perception and data-driven boom control.',
  },
  {
    id: 'loni',
    name: 'Mohammad Loni',
    title: 'Dr.',
    partner: 'volvo-as',
    kind: 'industry',
    about: 'Industrial supervisor at Volvo Autonomous Solutions for 4D mapping of mining sites and safe off-road navigation.',
  },
  {
    id: 'kolu',
    name: 'Antti Kolu',
    title: 'Dr.',
    partner: 'novatron',
    kind: 'industry',
    about: 'Industrial supervisor at Novatron for as-built model updating and excavation control.',
  },
  {
    id: 'einola',
    name: 'Kalle Einola',
    title: 'M.Sc.',
    partner: 'ponsse',
    kind: 'industry',
    about: 'Industrial supervisor at Ponsse for sensor-based positioning of forest machines.',
  },
  {
    id: 'peralta',
    name: 'Jose Luis Peralta',
    title: 'Dr.',
    partner: 'gim',
    kind: 'industry',
    about: 'Industrial supervisor at GIM Robotics for AI-driven 3D perception in dynamic environments.',
  },
  {
    id: 'demir',
    name: 'Ozan Demir',
    title: 'Dr.',
    partner: 'bosch',
    kind: 'industry',
    about: 'Industrial supervisor at Bosch for sim-to-real transfer of learned control policies.',
  },
  {
    id: 'schuler',
    name: 'Fridolin Schuler',
    title: 'M.Sc.',
    partner: 'agco',
    kind: 'industry',
    about: 'Industrial supervisor at AGCO / Fendt for safety-rated geofencing of autonomous agricultural vehicles.',
  },
  {
    id: 'wiberg',
    name: 'Viktor Wiberg',
    title: 'Dr.',
    partner: 'algoryx',
    kind: 'industry',
    about: 'Industrial supervisor at Algoryx Simulation for simulation intelligence of mobile working machines.',
  },
  {
    id: 'bos',
    name: 'Manuel Bös',
    title: 'Dr.-Ing.',
    partner: 'liebherr',
    kind: 'industry',
    about: 'Industrial supervisor at Liebherr-Werk Bischofshofen for off-highway road quality maintenance.',
  },
];

export const supervisorById = Object.fromEntries(supervisors.map((s) => [s.id, s])) as Record<string, Supervisor>;
