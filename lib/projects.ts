export type Section = {
  heading: string
  body?: string
  bullets?: string[]
}

export type Project = {
  slug: string
  title: string
  category: string
  type: string
  year: string
  summary: string
  users: string
  nda: boolean
  features: string[]
  tags: string[]
  accent: string
  // case study content
  overview: string
  sections: Section[]
  outcomes: { label: string; value: string }[]
  flow?: string[]
}

export const projects: Project[] = [
  {
    slug: 'network-monitoring-system',
    title: 'Network Monitoring System',
    category: 'Enterprise Dashboard',
    type: 'Web · Enterprise SaaS',
    
    summary:
      'A real-time monitoring dashboard that gives network engineers complete visibility over device health, alerts, and performance analytics.',
    users: 'Network Engineers & Administrators',
    nda: true,
    features: [
      'Monitoring Dashboard',
      'Device Management',
      'Alerts & Notifications',
      'Analytics',
      'Reports',
    ],
    tags: ['Enterprise', 'Dashboard', 'Data Viz', 'Design System'],
    accent: 'blue',
    overview:
      'An enterprise-grade platform that helps network teams monitor thousands of connected devices in real time. The product surfaces critical signals — uptime, latency, throughput, and incidents — in a single operational view so teams can detect and resolve issues before they impact the business.',
    sections: [
      {
        heading: 'Problem Statement',
        body: 'Engineers were monitoring infrastructure across fragmented tools and spreadsheets. Critical alerts were buried in noise, device states were hard to interpret at a glance, and reporting was manual. The team needed a unified, scannable interface that reduced time-to-detection and made complex telemetry approachable.',
      },
      {
        heading: 'My Contributions',
        bullets: [
          'Designed the end-to-end monitoring dashboard, device management, and alerting flows.',
          'Created an information architecture that prioritized critical signals and reduced cognitive load.',
          'Built reusable data-visualization patterns (status, trends, thresholds) as part of the design system.',
          'Partnered with engineers on developer handoff, edge cases, and empty/error/loading states.',
        ],
      },
      {
        heading: 'Challenges',
        bullets: [
          'Balancing dense, data-heavy views with clarity and visual calm.',
          'Designing alert hierarchies so urgent issues never get lost in noise.',
          'Supporting power users with shortcuts while keeping the product approachable.',
          'Ensuring accessible color usage for status states (not relying on color alone).',
        ],
      },
      {
        heading: 'Design Process',
        body: 'I started with stakeholder interviews and a workflow audit to understand how engineers triage incidents. I mapped task flows, defined an information hierarchy, then moved from low-fidelity wireframes to a high-fidelity system. Tokenized components and status patterns kept the experience consistent across modules and easy for developers to implement.',
      },
    ],
    outcomes: [
      { label: 'Faster incident triage', value: 'Streamlined' },
      { label: 'Unified operational view', value: '1 dashboard' },
      { label: 'Reusable data-viz patterns', value: 'Design system' },
      { label: 'Accessible status states', value: 'WCAG-minded' },
    ],
  },
  {
    slug: 'test-automation-platform',
    title: 'Test Automation Platform',
    category: 'Enterprise SaaS Platform',
    type: 'Web · Enterprise SaaS',
   
    summary:
      'A SaaS platform that lets QA teams execute, schedule, and analyze automated test suites — turning complex pipelines into a guided, confident workflow.',
    users: 'QA Engineers & Test Engineers',
    nda: true,
    features: [
      'Test Execution Dashboard',
      'Test Reports',
      'Scheduling',
      'Automation Workflows',
      'Analytics',
    ],
    tags: ['Enterprise', 'SaaS', 'Workflows', 'Analytics'],
    accent: 'blue',
    overview:
      'A platform that gives quality engineers a single place to run automated tests, schedule recurring runs, and understand results through clear analytics. The goal was to make automation feel approachable — guiding users through configuration while keeping advanced control available.',
    sections: [
      {
        heading: 'Problem Statement',
        body: 'Test engineers juggled scripts, CI logs, and scattered dashboards to understand whether a build was healthy. Results were hard to parse, scheduling was manual, and failures lacked context. The product needed to centralize execution and make pass/fail trends instantly understandable.',
      },
      {
        heading: 'My Contributions',
        bullets: [
          'Designed the test execution dashboard, reporting views, and scheduling experience.',
          'Created automation workflow builders that simplified complex multi-step configuration.',
          'Designed analytics that communicated test stability and trends over time.',
          'Maintained shared components and documented states for smooth developer handoff.',
        ],
      },
      {
        heading: 'Challenges',
        bullets: [
          'Representing complex, nested test results without overwhelming the user.',
          'Designing flexible scheduling that stayed simple for common cases.',
          'Communicating failures with enough context to act on them quickly.',
          'Keeping a consistent system across many feature-dense screens.',
        ],
      },
      {
        heading: 'Design Process',
        body: 'I ran discovery sessions with QA engineers to map their daily workflow and pain points. From journey maps I defined a clear IA, prototyped key flows, and validated them through informal usability checks. The final designs leaned on progressive disclosure — simple by default, powerful on demand.',
      },
    ],
    outcomes: [
      { label: 'Centralized test execution', value: 'Unified' },
      { label: 'Clearer pass/fail trends', value: 'Analytics' },
      { label: 'Guided automation setup', value: 'Workflows' },
      { label: 'Consistent component system', value: 'Scalable' },
    ],
  },
  {
    slug: 'smart-vehicle-parking',
    title: 'Smart Vehicle Parking',
    category: 'Mobile Application',
    type: 'Mobile · Consumer',
    
    summary:
      'A mobile app that helps drivers discover nearby parking, reserve a slot in advance, and pay securely — removing the daily stress of finding a spot.',
    users: 'Urban drivers & commuters',
    nda: false,
    features: [
      'Search Parking',
      'Real-time Availability',
      'Slot Reservation',
      'Secure Payments',
      'Booking Confirmation',
    ],
    tags: ['Mobile', 'Consumer', 'Payments', 'Maps'],
    accent: 'blue',
    overview:
      'Smart Vehicle Parking is a consumer mobile app designed to take the friction out of parking. Drivers can find available spaces near their destination, reserve a slot ahead of time, and complete a secure payment — arriving with confidence that a spot is waiting.',
    flow: [
      'Open App',
      'Search Location',
      'View Availability',
      'Select Slot',
      'Reserve',
      'Pay Securely',
      'Confirmation',
    ],
    sections: [
      {
        heading: 'Problem',
        body: 'Finding parking in busy areas is stressful, time-consuming, and unpredictable. Drivers circle blocks, waste fuel, and risk being late. There was no simple way to know — in advance — whether a space would be available and to lock it in.',
      },
      {
        heading: 'Research',
        bullets: [
          'Interviewed commuters and occasional drivers about parking frustrations.',
          'Found that uncertainty and time pressure were the biggest pain points.',
          'Users wanted guaranteed availability and a fast, trustworthy payment flow.',
          'Benchmarked ride-hailing and booking apps for familiar interaction patterns.',
        ],
      },
      {
        heading: 'User Persona',
        body: 'Meet Rohan, 29 — a daily commuter in a busy metro. He values time over money, wants predictability, and expects a smooth, mobile-first experience. His goal: arrive at work without wasting 15 minutes hunting for a spot.',
      },
      {
        heading: 'User Flow',
        body: 'The core journey was designed to be completable in under a minute: search a destination, see real-time availability on a map, pick a slot, reserve, pay, and receive a clear booking confirmation with directions.',
      },
      {
        heading: 'Wireframes',
        body: 'I sketched low-fidelity wireframes for each step, focusing on a map-first search, a glanceable availability state, and a payment flow that built trust through clarity. Iterations reduced the number of taps to complete a booking.',
      },
      {
        heading: 'Design Decisions',
        bullets: [
          'Map-first home screen so availability is the first thing users see.',
          'Clear availability states with labels and icons, not color alone.',
          'A single, focused payment screen to reduce drop-off and build trust.',
          'A confirmation screen with directions, time, and an easy way to extend.',
        ],
      },
      {
        heading: 'Final Solution',
        body: 'A clean, map-centric app with real-time availability, frictionless reservation, and a secure, transparent payment flow. The visual language is calm and confident — appropriate for a utility people rely on every day.',
      },
    ],
    outcomes: [
      { label: 'Booking completed in', value: '< 1 min' },
      { label: 'Taps to reserve', value: 'Reduced' },
      { label: 'Trust-first payments', value: 'Secure' },
      { label: 'Map-first discovery', value: 'Real-time' },
    ],
  },
  {
    slug: 'virtual-event-management',
    title: 'Virtual Event Management',
    category: 'Mobile / Web Application',
    type: 'Mobile · Web · Consumer',
   
    summary:
      'A platform that lets users discover, filter, and book virtual events — making it effortless to find the right session and reserve a spot.',
    users: 'Event attendees & professionals',
    nda: false,
    features: [
      'Event Discovery',
      'Search',
      'Filters',
      'Sorting',
      'Event Details',
      'Booking',
    ],
    tags: ['Consumer', 'Discovery', 'Booking', 'Responsive'],
    accent: 'blue',
    overview:
      'A platform for discovering and booking virtual events. The experience helps users move quickly from browsing to booking through powerful search, filtering, and sorting — surfacing the most relevant events without overwhelming the user.',
    flow: [
      'Home',
      'Search Events',
      'Filter Events',
      'Sort Events',
      'View Details',
      'Book Event',
    ],
    sections: [
      {
        heading: 'Problem',
        body: 'With an overwhelming number of online events, users struggled to find sessions relevant to their interests and schedule. Discovery was noisy, filtering was limited, and booking often felt disconnected from browsing.',
      },
      {
        heading: 'Research',
        bullets: [
          'Surveyed users about how they discover and decide on events to attend.',
          'Learned that relevance and quick filtering mattered more than volume.',
          'Users abandoned flows when details or booking required too many steps.',
          'Studied content-discovery patterns from streaming and marketplace apps.',
        ],
      },
      {
        heading: 'User Persona',
        body: 'Meet Aisha, 26 — a curious professional who attends webinars to grow her skills. She has limited time and wants to quickly filter events by topic, date, and format, then book in a couple of taps.',
      },
      {
        heading: 'User Flow',
        body: 'Home → Search Events → Filter Events → Sort Events → View Event Details → Book Event. The flow was designed so users could refine results progressively and reach a confident booking decision.',
      },
      {
        heading: 'Wireframes',
        body: 'I wireframed a discovery-first home, a robust filter and sort layer, and a detail page built to drive booking. The structure scaled cleanly from mobile to web with a responsive grid.',
      },
      {
        heading: 'Design Decisions',
        bullets: [
          'Persistent, lightweight filters and sorting to refine without losing context.',
          'Scannable event cards with the signals that drive decisions (topic, time, price).',
          'A focused detail page that leads clearly to a single booking action.',
          'A responsive layout system shared across mobile and web.',
        ],
      },
      {
        heading: 'Final Solution',
        body: 'A responsive discovery platform where finding and booking the right event feels fast and intentional. Filtering and sorting put the user in control, and a streamlined detail-to-booking path reduces friction.',
      },
    ],
    outcomes: [
      { label: 'Faster relevant discovery', value: 'Filtered' },
      { label: 'Browse-to-book path', value: 'Streamlined' },
      { label: 'Responsive across', value: 'Web + Mobile' },
      { label: 'Decision-first cards', value: 'Scannable' },
    ],
  },
  {
    slug: 'landing-page-collection',
    title: 'Landing Page Collection',
    category: 'Responsive Web Design',
    type: 'Web · Practice & Craft',
    
    summary:
      'A collection of responsive landing pages — education, marketing, and business — focused on visual hierarchy, CTA optimization, and reusable components.',
    users: 'Various target audiences',
    nda: false,
    features: [
      'Education Website',
      'Marketing Landing Page',
      'Business Website',
      'Responsive Layouts',
      'CTA Optimization',
    ],
    tags: ['Web', 'Visual Design', 'Responsive', 'Components'],
    accent: 'blue',
    overview:
      'A set of responsive landing pages designed during focused learning and practice. Each page explores a different goal — converting students, marketing a product, and establishing business credibility — while sharpening fundamentals like hierarchy, rhythm, and reusable components.',
    sections: [
      {
        heading: 'Design Goals',
        bullets: [
          'Communicate a clear value proposition above the fold.',
          'Guide the eye through strong visual hierarchy and spacing.',
          'Optimize calls-to-action for clarity and conversion.',
          'Build reusable, consistent components across pages.',
        ],
      },
      {
        heading: 'Education Website',
        body: 'A welcoming, trustworthy landing page for an education brand — clear program highlights, social proof, and a prominent enrollment CTA designed to convert prospective students.',
      },
      {
        heading: 'Marketing Landing Page',
        body: 'A conversion-focused product page with a punchy hero, benefit-driven sections, and a single dominant CTA. Layout and contrast guide users straight to the action.',
      },
      {
        heading: 'Business Website',
        body: 'A credible, professional presence for a service business — clean structure, clear services, and trust signals that move visitors toward an inquiry.',
      },
      {
        heading: 'Responsive Design & Components',
        bullets: [
          'Mobile-first layouts that scale gracefully to desktop.',
          'A shared system of buttons, cards, and sections for consistency.',
          'Deliberate visual hierarchy using type scale and spacing.',
          'CTA placement and contrast tuned for conversion.',
        ],
      },
    ],
    outcomes: [
      { label: 'Landing pages crafted', value: '3+' },
      { label: 'Component reusability', value: 'Systemized' },
      { label: 'Conversion-focused CTAs', value: 'Optimized' },
      { label: 'Fully responsive', value: 'Mobile-first' },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
