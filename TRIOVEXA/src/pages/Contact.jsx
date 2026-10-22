import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    service: 'web-apps',
    message: '',
  });

  const [toasts, setToasts] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.emailOrPhone.trim()) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(
        `Thank you ${formData.name}! Your request has been sent to TRIOVEXA. Our team will contact you promptly at ${formData.emailOrPhone}.`,
        'success'
      );

      setFormData({
        name: '',
        emailOrPhone: '',
        service: 'web-apps',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="contact-page-view" style={{ paddingTop: '8.5rem' }}>
      <section className="contact-section" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <i className="ri-mail-send-line"></i> Official Enquiry
            </span>
            <h2>
              Let's Build Smarter Software <span className="gradient-sky-text">Together</span>
            </h2>
            <p>
              "Whatever you build with TRIOVEXA, your business is built to grow beyond expectations."
            </p>
          </div>

          <div className="contact-grid">
            {/* Direct Official Contact Channels */}
            <div>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.75rem' }}>
                TRIOVEXA SOFTWARE SOLUTIONS
              </h3>
              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.96rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Innovate. Integrate. Elevate. Reach out to our engineering team directly via phone, WhatsApp, or email.
              </p>

              <div className="contact-info-list">
                {/* Phone & WhatsApp */}
                <a
                  href="https://wa.me/919500657733"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-item glass-card"
                  style={{ textDecoration: 'none', padding: '1.25rem' }}
                >
                  <div
                    className="contact-icon"
                    style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      borderColor: 'var(--accent-emerald)',
                      color: 'var(--accent-emerald)',
                    }}
                  >
                    <i className="ri-whatsapp-line"></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>Phone / WhatsApp</div>
                    <div style={{ color: 'var(--accent-emerald)', fontWeight: 700, fontSize: '1.05rem' }}>
                      +91 95006 57733
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                      Direct Developer & Support Line
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:triovexa@gmail.com"
                  className="contact-info-item glass-card"
                  style={{ textDecoration: 'none', padding: '1.25rem' }}
                >
                  <div className="contact-icon">
                    <i className="ri-mail-send-line"></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>Official Email</div>
                    <div style={{ color: 'var(--text-sky-bright)', fontWeight: 700, fontSize: '1.05rem' }}>
                      triovexa@gmail.com
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                      Project inquiries & RFP submissions
                    </div>
                  </div>
                </a>

                {/* Website */}
                <a
                  href="https://triovexa.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-item glass-card"
                  style={{ textDecoration: 'none', padding: '1.25rem' }}
                >
                  <div className="contact-icon">
                    <i className="ri-global-line"></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>Official Website</div>
                    <div style={{ color: 'var(--text-sky-bright)', fontWeight: 700, fontSize: '1.05rem' }}>
                      triovexa.netlify.app
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                      Live Production Portal
                    </div>
                  </div>
                </a>

                {/* Guarantees */}
                <div className="contact-info-item glass-card" style={{ padding: '1.25rem' }}>
                  <div className="contact-icon">
                    <i className="ri-shield-check-line"></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>Enterprise Standards</div>
                    <div style={{ color: 'var(--text-sky-light)', fontSize: '0.88rem' }}>
                      Clean & Scalable Code • On-Time Delivery • Dedicated Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Request Form */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>
                Request A Quote & Consultation
              </h3>
              <p style={{ color: 'var(--text-sky-light)', fontSize: '0.92rem', marginBottom: '1.75rem' }}>
                Fill out the details below. Our technical team will get back to you with an exact proposal.
              </p>

              <form id="triovexa-contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="form-name">Full Name / Company Name *</label>
                  <input
                    type="text"
                    id="form-name"
                    className="form-control"
                    placeholder="e.g. Ramesh Kumar / Business Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-email">Mobile Number / Email Address *</label>
                  <input
                    type="text"
                    id="form-email"
                    className="form-control"
                    placeholder="e.g. +91 95006 57733 or yourname@gmail.com"
                    value={formData.emailOrPhone}
                    onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-service">Select Service Required</label>
                  <select
                    id="form-service"
                    className="form-control"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="web-dev">Website Development</option>
                    <option value="ecommerce">E-Commerce Solutions</option>
                    <option value="web-apps">Web Applications</option>
                    <option value="erp-hrms">ERP & HRMS Solutions</option>
                    <option value="dashboards-bi">Dashboards & BI (Power BI)</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="mobile-dev">Mobile App Development (Android & iOS)</option>
                    <option value="cloud-devops">Cloud Deployment & DevOps</option>
                    <option value="api-dev">API Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="maintenance">Software Maintenance & Support</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="form-message">Project Requirements Details</label>
                  <textarea
                    id="form-message"
                    className="form-control"
                    rows={4}
                    placeholder="Tell us about your project goals, features needed, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-sky"
                  style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}
                  disabled={isSubmitting}
                >
                  <i className="ri-send-plane-fill"></i>
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification Container */}
      {toasts.length > 0 && (
        <div className="toast-container">
          {toasts.map((toast) => (
            <div key={toast.id} className={`toast toast-${toast.type}`}>
              <i
                className={
                  toast.type === 'error'
                    ? 'ri-error-warning-fill'
                    : toast.type === 'info'
                    ? 'ri-information-fill'
                    : 'ri-checkbox-circle-fill'
                }
                style={{
                  fontSize: '1.3rem',
                  color: toast.type === 'error' ? '#ef4444' : 'var(--text-sky-bright)',
                }}
              ></i>
              <span>{toast.message}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
