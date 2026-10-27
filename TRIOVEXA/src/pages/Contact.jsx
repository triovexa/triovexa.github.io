import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    instituteName: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
  });

  const [toasts, setToasts] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.instituteName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.enquiryType
    ) {
      showToast('Please fill out all required fields (*).', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(
        `Thank you ${formData.name}! Your enquiry for ${formData.instituteName} has been submitted successfully. Our team will contact you at ${formData.email} / ${formData.phone} shortly.`,
        'success'
      );

      setFormData({
        name: '',
        instituteName: '',
        email: '',
        phone: '',
        enquiryType: '',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="contact-page-view">
      <section className="contact-section">
        <div className="container">
          {/* Page Section Header */}
          <div className="section-header">
            <span className="section-tag">
              <i className="ri-mail-send-line"></i> Contact & Official Enquiry
            </span>
            <h2>
              Let's Build Smarter Software <span className="gradient-sky-text">Together</span>
            </h2>
            <p>
              "Whatever you build with TRIOVEXA, your business is built to grow beyond expectations."
            </p>
          </div>

          {/* Main 2-Column Contact Layout */}
          <div className="contact-grid-pro">
            {/* Left Column: Contact Cards Stack (Exact Match with Image 2) */}
            <div className="contact-cards-stack">
              <div style={{ marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 800 }}>
                  Get In Touch
                </h3>
                <p style={{ color: 'var(--text-sky-light)', fontSize: '0.96rem', lineHeight: '1.7', margin: 0 }}>
                  Connect with our technical consulting desk directly through official phone and email channels.
                </p>
              </div>

              {/* Card 1: Phone Number (TRIOVEXA Official) */}
              <a href="tel:+919500657733" className="contact-card-pro" title="Call TRIOVEXA">
                <div className="contact-circle-icon">
                  <i className="ri-phone-fill"></i>
                </div>
                <div className="contact-card-content">
                  <h4 className="contact-card-title">Phone Number</h4>
                  <div className="contact-card-detail">+91 95006 57733</div>
                  <div className="contact-card-sub">Direct Technical Consulting & Support (24/7)</div>
                </div>
              </a>

              {/* Card 2: Email (TRIOVEXA Official) */}
              <a href="mailto:triovexa@gmail.com" className="contact-card-pro" title="Email TRIOVEXA">
                <div className="contact-circle-icon">
                  <i className="ri-mail-fill"></i>
                </div>
                <div className="contact-card-content">
                  <h4 className="contact-card-title">Email</h4>
                  <div className="contact-card-detail">triovexa@gmail.com</div>
                  <div className="contact-card-sub">Official Inquiries & Project Proposals</div>
                </div>
              </a>

              {/* Card 3: Location */}
              <a
                href="https://maps.google.com/?q=Puravankara+IT+building+Okkiyampettai+Thoraipakkam+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-pro"
                title="View Office Location on Google Maps"
              >
                <div
                  className="contact-circle-icon"
                  style={{
                    background: 'linear-gradient(135deg, #0284c7 0%, #00f2fe 100%)',
                    boxShadow: '0 6px 18px rgba(0, 242, 254, 0.4)',
                  }}
                >
                  <i className="ri-map-pin-2-fill"></i>
                </div>
                <div className="contact-card-content">
                  <h4 className="contact-card-title">Office Location</h4>
                  <div className="contact-card-detail" style={{ color: '#38bdf8' }}>
                    Puravankara IT Building
                  </div>
                  <div className="contact-card-sub">
                    Madha Kovil Street, Okkiyampettai, Thoraipakkam, Chennai
                  </div>
                </div>
              </a>

              {/* Card 4: WhatsApp Support */}
              <a
                href="https://wa.me/919500657733"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-pro"
                title="Chat on WhatsApp (+91 95006 57733)"
              >
                <div
                  className="contact-circle-icon"
                  style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    boxShadow: '0 6px 18px rgba(37, 211, 102, 0.45)',
                  }}
                >
                  <i className="ri-whatsapp-fill"></i>
                </div>
                <div className="contact-card-content">
                  <h4 className="contact-card-title">WhatsApp Support</h4>
                  <div className="contact-card-detail" style={{ color: '#25D366' }}>
                    +91 95006 57733
                  </div>
                  <div className="contact-card-sub">Instant Chat & Technical Consulting</div>
                </div>
              </a>
            </div>

            {/* Right Column: Contact Form (Exact Match with Image 1) */}
            <div className="contact-form-card-pro">
              <div className="form-header-pro">
                <h3 className="form-title-pro">Enquiry Form</h3>
                <p className="form-sub-pro">
                  Please fill out the form below. Our development and advisory team will get in touch promptly.
                </p>
              </div>

              <form id="triovexa-contact-form" onSubmit={handleFormSubmit} className="contact-form-grid-layout">
                {/* Row 1: Your Name & Institute Name (Exact from Image 1) */}
                <div className="form-row-2col">
                  <div className="form-field-group">
                    <label htmlFor="form-name">
                      Your Name <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      className="contact-input-pro"
                      placeholder=""
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="form-institute">
                      Institute Name <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="form-institute"
                      className="contact-input-pro"
                      placeholder=""
                      value={formData.instituteName}
                      onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone No (Exact from Image 1) */}
                <div className="form-row-2col">
                  <div className="form-field-group">
                    <label htmlFor="form-email">
                      Email <span className="req-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      className="contact-input-pro"
                      placeholder=""
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="form-phone">
                      Phone No <span className="req-star">*</span>
                    </label>
                    <input
                      type="tel"
                      id="form-phone"
                      className="contact-input-pro"
                      placeholder=""
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Row 3: Enquiry Type Dropdown (Exact from Image 1) */}
                <div className="form-field-group">
                  <label htmlFor="form-enquiry-type">
                    Enquiry Type <span className="req-star">*</span>
                  </label>
                  <div className="select-wrapper-pro">
                    <select
                      id="form-enquiry-type"
                      className="contact-select-pro"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      required
                    >
                      <option value="">Select</option>
                      <option value="software-dev">Custom Software Development</option>
                      <option value="web-apps">Web Applications & Web Portals</option>
                      <option value="mobile-apps">Mobile App Development (Android & iOS)</option>
                      <option value="erp-hrms">ERP & HRMS Solutions</option>
                      <option value="institute-system">Institutional & Campus Management</option>
                      <option value="bi-dashboards">Power BI Dashboards & Business Intelligence</option>
                      <option value="cloud-devops">Cloud Deployment & DevOps Services</option>
                      <option value="other">General Consultation & Proposal</option>
                    </select>
                    <i className="ri-arrow-down-s-line select-arrow-icon"></i>
                  </div>
                </div>

                {/* Row 4: Message (Exact from Image 1) */}
                <div className="form-field-group">
                  <label htmlFor="form-message">Message</label>
                  <textarea
                    id="form-message"
                    className="contact-textarea-pro"
                    rows={5}
                    placeholder=""
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="contact-submit-btn-pro"
                  disabled={isSubmitting}
                >
                  <i className="ri-send-plane-fill"></i>
                  <span>{isSubmitting ? 'Submitting Details...' : 'Submit Enquiry'}</span>
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
              <div className="toast-content">
                <i
                  className={
                    toast.type === 'success'
                      ? 'ri-checkbox-circle-fill'
                      : toast.type === 'error'
                      ? 'ri-error-warning-fill'
                      : 'ri-information-fill'
                  }
                ></i>
                <span>{toast.message}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
