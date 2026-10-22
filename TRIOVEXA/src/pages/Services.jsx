import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const officialServices = [
    {
      id: 'website-dev',
      icon: 'ri-global-line',
      title: 'Website Development',
      desc: 'Modern, responsive and SEO-friendly websites built to establish a powerful online presence and drive client conversions.',
      tags: ['Modern & Responsive', 'SEO-Friendly', 'High Performance'],
    },
    {
      id: 'ecommerce',
      icon: 'ri-shopping-cart-2-line',
      title: 'E-Commerce Solutions',
      desc: 'Secure & feature-rich e-commerce platforms equipped with payment gateways, product catalogs, and order management.',
      tags: ['Secure Checkout', 'Feature-Rich', 'Payment Gateways'],
    },
    {
      id: 'web-apps',
      icon: 'ri-computer-line',
      title: 'Web Applications',
      desc: 'Dynamic and scalable web applications engineered with modern frontend frameworks and robust backend architecture.',
      tags: ['Dynamic & Scalable', 'High Throughput', 'Clean Code'],
    },
    {
      id: 'erp-hrms',
      icon: 'ri-user-shared-2-line',
      title: 'ERP & HRMS Solutions',
      desc: 'Complete ERP, HRMS for smart management. Streamline operations, employee payroll, attendance, and enterprise resources.',
      tags: ['Complete ERP', 'HRMS Automation', 'Smart Management'],
    },

    
    {
      id: 'dashboards-bi',
      icon: 'ri-bar-chart-grouped-line',
      title: 'Dashboards & BI',
      desc: 'Power BI dashboards & business intelligence. Transform raw business data into actionable visual analytics and insights.',
      tags: ['Power BI', 'Real-time KPIs', 'Business Intelligence'],
    },
    {
      id: 'ai-ml',
      icon: 'ri-brain-line',
      title: 'AI & Machine Learning',
      desc: 'Intelligent solutions powered by AI/ML to automate repetitive tasks, predictive analytics, and conversational intelligence.',
      tags: ['AI-Powered', 'Machine Learning', 'Smart Automation'],
    },
    {
      id: 'mobile-dev',
      icon: 'ri-smartphone-line',
      title: 'Mobile App Development',
      desc: 'Android & iOS apps that perform. Native and cross-platform mobile solutions with intuitive user experience and offline sync.',
      tags: ['Android & iOS', 'High Performance', 'Intuitive UX'],
    },
    {
      id: 'cloud-devops',
      icon: 'ri-cloud-line',
      title: 'Cloud Deployment',
      desc: 'Cloud hosting, deployment & DevOps services. Ensure continuous integration, automated server scaling, and 99.9% uptime.',
      tags: ['Cloud Hosting', 'DevOps & CI/CD', 'Automated Scaling'],
    },
    {
      id: 'api-dev',
      icon: 'ri-node-tree',
      title: 'API Development',
      desc: 'RESTful APIs & third-party integrations connecting your software seamlessly with payment gateways, SMS, and external systems.',
      tags: ['RESTful APIs', 'Third-Party Integration', 'Secure Tokens'],
    },
    {
      id: 'ui-ux',
      icon: 'ri-palette-line',
      title: 'UI/UX Design',
      desc: 'Beautiful, user-friendly design experience focused on aesthetic perfection, accessibility, and frictionless user flows.',
      tags: ['Figma Prototypes', 'Modern Aesthetics', 'User-Friendly'],
    },
    {
      id: 'maintenance',
      icon: 'ri-shield-check-line',
      title: 'Software Maintenance',
      desc: 'Bug fixes, updates & ongoing technical support to keep your software secure, up-to-date, and performing at peak efficiency.',
      tags: ['Bug Fixes & Updates', 'Ongoing Support', 'Security Patches'],
    },
  ];

  const whyChooseUs = [
    { title: 'Experienced Developers', icon: 'ri-user-star-line', desc: 'Skilled software engineers with proven domain expertise.' },
    { title: 'Industry-Level Standards', icon: 'ri-code-box-line', desc: 'Adhering to strict enterprise quality and architectural benchmarks.' },
    { title: 'Clean & Scalable Code', icon: 'ri-checkbox-circle-line', desc: 'Modular, maintainable codebases built for future business growth.' },
    { title: 'Affordable Pricing', icon: 'ri-price-tag-3-line', desc: 'Transparent, competitive investment packages without hidden costs.' },
    { title: 'On-Time Delivery', icon: 'ri-time-line', desc: 'Strict milestone velocity guaranteeing timely production launch.' },
    { title: 'Dedicated Support', icon: 'ri-customer-service-line', desc: 'Direct, responsive technical assistance whenever you need it.' },
    { title: 'Customized Solutions', icon: 'ri-settings-line', desc: 'Every solution tailored specifically to your exact workflow requirements.' },
  ];

  return (
    <div className="services-page-view" style={{ paddingTop: '8.5rem' }}>
      {/* Services Header */}
      <section style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <i className="ri-service-line"></i> Our Services
            </span>
            <h2>
              Software Solutions <span className="gradient-sky-text">& Digital Services</span>
            </h2>
            <p>
              "Whatever you build with TRIOVEXA, your business is built to grow beyond expectations."
            </p>
          </div>

          {/* Grid of 11 Services */}
          <div className="industry-grid">
            {officialServices.map((service) => (
              <div key={service.id} className="glass-card industry-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="industry-icon">
                  <i className={service.icon}></i>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem', color: '#fff' }}>
                  {service.title}
                </h3>

                <p style={{ color: 'var(--text-sky-light)', fontSize: '0.94rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  {service.desc}
                </p>

                <div style={{ marginTop: 'auto' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                    {service.tags.map((tag, idx) => (
                      <span key={idx} className="portfolio-tag" style={{ fontSize: '0.74rem', padding: '0.15rem 0.55rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="btn btn-outline-sky"
                    style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.88rem' }}
                  >
                    <span>Inquire Now</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (7 Pillars From Brochure) */}
      <section style={{ padding: '4rem 0 6rem 0', background: 'rgba(11, 23, 46, 0.4)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Competitive Advantage</span>
            <h2>Why Choose TRIOVEXA?</h2>
            <p>Our commitment to excellence ensures your business gains an enduring technological edge.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1.5px solid var(--accent-cyan)',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    margin: '0 auto 1.25rem auto',
                  }}
                >
                  <i className={item.icon}></i>
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-sky-light)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Contact Bar */}
          <div
            className="glass-card"
            style={{
              marginTop: '4rem',
              padding: '2.5rem',
              textAlign: 'center',
              border: '2px solid var(--border-glow)',
            }}
          >
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>
              Building Smarter Businesses for a Better Tomorrow
            </h3>
            <p style={{ color: 'var(--text-sky-light)', marginBottom: '1.5rem', fontSize: '1rem' }}>
              Speak with our developers: <strong>+91 95006 57733</strong> | <strong>triovexa@gmail.com</strong>
            </p>
            <Link to="/contact" className="btn btn-sky" style={{ padding: '0.85rem 2.2rem' }}>
              <span>Get Free Quote Today</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
