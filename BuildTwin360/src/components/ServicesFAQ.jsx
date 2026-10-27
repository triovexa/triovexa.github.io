import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'How much does a software project cost?',
    answer:
      'The cost depends on your requirements, features, integrations, and project complexity. We first understand your business needs and then provide a clear quotation based on the agreed scope.',
  },
  {
    id: 2,
    question: 'How long does it take to develop a project?',
    answer:
      'The timeline depends on the project size and required features. After discussing your requirements, we provide an estimated delivery schedule and keep you updated throughout development.',
  },
  {
    id: 3,
    question: 'Will I receive the source code after project completion?',
    answer:
      'Yes. Source code handover and ownership terms will be clearly agreed upon before development begins. Once the agreed payments are completed, we hand over the deliverables specified in the agreement.',
  },
  {
    id: 4,
    question: 'Do you provide support after project delivery?',
    answer:
      'Yes. We provide deployment assistance and bug-fix support for an agreed period after delivery. Ongoing maintenance, additional features, and future enhancements can be discussed separately.',
  },
  {
    id: 5,
    question: 'Can you upgrade our existing software or Excel-based process?',
    answer:
      'Yes. We can assess your existing software, business workflow, or Excel-based process and recommend a suitable solution. The approach will depend on your current system, data, and requirements.',
  },
  {
    id: 6,
    question: 'Can you customize the software for our business?',
    answer:
      'Absolutely. We develop solutions based on your business workflow and requirements, rather than forcing your team to follow a one-size-fits-all system.',
  },
  {
    id: 7,
    question: 'Can you integrate the software with our existing systems?',
    answer:
      'Yes, where technically feasible. We review your existing systems, available APIs, and integration requirements before confirming the approach, timeline, and cost.',
  },
  {
    id: 8,
    question: 'How do we get started with TRIOVEXA?',
    answer:
      'Simply contact us and share your business requirements. We will discuss your goals, understand the challenges, and suggest a practical solution with the next steps.',
  },
];

export default function ServicesFAQ() {
  // At a time, only one question can be open. Starts with first question open or click to toggle.
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="services-faq-section" id="faq">
      <div className="container">
        {/* Section Header */}
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Transparent information about our pricing, timelines, custom development, and support.
          </p>
        </div>

        {/* FAQ Accordion List - Single open animated dropdown */}
        <div className="faq-accordion-container">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`faq-card ${isOpen ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon-wrapper">
                    <i className={`ri-arrow-down-s-line faq-icon ${isOpen ? 'rotate' : ''}`}></i>
                  </span>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={`faq-answer-collapse ${isOpen ? 'show' : ''}`}
                >
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
