/**
 * TRIOVEXA Software Solutions - Featured Engineering Insights & Case Studies
 * Authoritative, high-value technical whitepapers and client transformation studies
 */

export const insightsData = [
  {
    id: 'cloud-erp-hrms-optimization',
    category: 'ENTERPRISE ERP & HRMS',
    categoryColor: '#00f2fe',
    badgeClass: 'badge-erp',
    title: '5 Reasons Why Modern Businesses Must Adopt Integrated ERP & HRMS',
    subtitle: 'How automated payroll, biometric tracking, and multi-branch inventory slash operational overhead by 40%.',
    readTime: '4 min read',
    date: 'Oct 2026',
    author: 'TRIOVEXA Enterprise Architecture Team',
    image: '/assets/images/triovexa-enterprise-dashboard.jpg',
    metrics: [
      { label: 'Operational Cost', value: '-40%' },
      { label: 'Payroll Automation', value: '100%' },
      { label: 'Data Redundancy', value: '0%' },
    ],
    summary:
      'Operating with disjointed spreadsheets and standalone accounting software costs growing enterprises dozens of lost hours weekly in data reconciliations and payroll errors. TRIOVEXA engineers single-pane cloud ERP & HRMS architectures unifying manufacturing, procurement, biometric attendance, and automated GST billing.',
    challenges: [
      'Disjointed data silos between procurement floor, inventory warehouse, and accounts.',
      'Manual biometric reconciliation leading to payroll discrepancies and employee dissatisfaction.',
      'Lack of real-time multi-branch visibility for executive leadership and stakeholders.',
    ],
    solutions: [
      'Single ACID-compliant master database powering inventory, invoices, and employee master files.',
      'Automated biometric sync engine with custom overtime calculation and instant salary slip dispatch.',
      'Granular Role-Based Access Control (RBAC) ensuring enterprise audit readiness and data governance.',
    ],
    techStack: ['React.js', 'Node.js / Express', 'PostgreSQL', 'Redis Cache', 'Docker'],
  },
  {
    id: 'real-time-gps-telemetry-fleet-apps',
    category: 'MOBILE APPS & IOT',
    categoryColor: '#10b981',
    badgeClass: 'badge-telemetry',
    title: 'How Real-Time GPS Telemetry & Mobile Apps Accelerate Fleet Logistics',
    subtitle: 'Architecting sub-second vehicle tracking, automated trip billing, and high-concurrency driver apps.',
    readTime: '3 min read',
    date: 'Oct 2026',
    author: 'TRIOVEXA Mobile & Telemetry Labs',
    image: '/assets/images/transport-app.jpg',
    metrics: [
      { label: 'Telemetry Latency', value: '< 800ms' },
      { label: 'Fuel & Detour Savings', value: '32%' },
      { label: 'System Uptime SLA', value: '99.98%' },
    ],
    summary:
      'Logistics enterprises face immense financial drain through untracked detours, disputed trip mileages, and paper consignment manifests. TRIOVEXA developed an ultra-scalable IoT telemetry pipeline and native mobile application suite delivering sub-second live tracking and automated digital proof of delivery (e-POD).',
    challenges: [
      'High telemetry latency causing inaccurate map plotting and vehicle dispatch delays.',
      'Driver mobile apps failing in rural highway stretches due to lack of offline-first caching.',
      'Manual trip consignment billing leading to 30+ day payment reconciliation delays.',
    ],
    solutions: [
      'MQTT & WebSocket event streaming processing 10,000+ concurrent vehicle coordinates without lag.',
      'Offline-first SQLite local caching ensuring driver navigation and logs persist seamlessly offline.',
      'Automated geofence dispatch triggers with real-time WhatsApp & SMS notifications to consignees.',
    ],
    techStack: ['Flutter (iOS/Android)', 'FastAPI / Python', 'MQTT & WebSockets', 'PostGIS', 'AWS IoT Core'],
  },
  {
    id: 'high-conversion-ecommerce-performance',
    category: 'E-COMMERCE & WEB',
    categoryColor: '#818cf8',
    badgeClass: 'badge-commerce',
    title: 'Engineering High-Speed E-Commerce Engines: From Inventory Sync to Instant Checkout',
    subtitle: 'Sub-second page speeds, seamless multi-gateway payments, and automated GST billing that lift conversions by 65%.',
    readTime: '5 min read',
    date: 'Oct 2026',
    author: 'TRIOVEXA Full-Stack Engineering Group',
    image: '/assets/images/portfolio-1.jpg',
    metrics: [
      { label: 'LCP Page Load', value: '< 1.1s' },
      { label: 'Conversion Lift', value: '+65%' },
      { label: 'Payment Failover', value: 'Zero-Drop' },
    ],
    summary:
      'Sluggish e-commerce storefronts drop over 50% of prospective buyers at the cart stage. TRIOVEXA engineers modern, lightning-fast digital storefronts with edge-cached dynamic product catalogs, unified payment gateway failovers, and instant automated GST invoicing.',
    challenges: [
      'Slow mobile page loading (>4 seconds) leading to extreme cart abandonment rates.',
      'Out-of-sync inventory during flash sales creating double-booking and refund headaches.',
      'Complicated multi-step checkouts without local payment options like UPI and 1-click checkout.',
    ],
    solutions: [
      'Next-gen edge-rendered architecture delivering sub-1.1 second Largest Contentful Paint (LCP).',
      'Atomic inventory reservation lock preventing overselling during high-traffic surges.',
      '1-Click express checkout supporting Razorpay, Stripe, UPI, and instant WhatsApp order tracking.',
    ],
    techStack: ['Next.js / React', 'Node.js', 'PostgreSQL', 'Stripe / Razorpay', 'Tailwind CSS'],
  },
];
