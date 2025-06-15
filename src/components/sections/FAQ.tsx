
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [activeItems, setActiveItems] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqData: FAQItem[] = [
    {
      question: "What is Computer Vision and how can it benefit my business?",
      answer: "Computer Vision is an AI technology that enables machines to interpret and understand visual information from images and videos. It can automate quality control, enhance security, improve customer experiences, and streamline operations by automating visual inspection tasks that traditionally required human oversight.",
      category: "general"
    },
    {
      question: "How long does it typically take to implement a Vision AI solution?",
      answer: "Implementation timelines vary based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex custom systems may take 3-6 months. We provide detailed timeline estimates during our initial consultation based on your specific requirements.",
      category: "implementation"
    },
    {
      question: "What industries do you serve?",
      answer: "We work across multiple industries including manufacturing, healthcare, retail, automotive, agriculture, and logistics. Our solutions are customized to meet the specific needs and compliance requirements of each industry.",
      category: "general"
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes, we offer comprehensive support packages including system monitoring, regular updates, performance optimization, and technical support. Our team ensures your Vision AI solution continues to perform optimally as your business grows.",
      category: "support"
    },
    {
      question: "How accurate are your Vision AI solutions?",
      answer: "Our solutions typically achieve 95-99% accuracy rates, depending on the specific use case and data quality. We use advanced machine learning algorithms and continuous learning to improve accuracy over time.",
      category: "technical"
    },
    {
      question: "Can your solutions integrate with our existing systems?",
      answer: "Absolutely. Our Vision AI solutions are designed to integrate seamlessly with existing enterprise systems, databases, and workflows. We support various APIs, cloud platforms, and on-premise deployments.",
      category: "technical"
    },
    {
      question: "What kind of ROI can we expect?",
      answer: "Most clients see ROI within 6-12 months through reduced labor costs, improved quality control, decreased errors, and increased operational efficiency. We provide detailed ROI projections during our consultation process.",
      category: "business"
    },
    {
      question: "Is our data secure with your solutions?",
      answer: "Data security is our top priority. We implement enterprise-grade security measures, comply with industry standards (SOC 2, GDPR, HIPAA where applicable), and offer both cloud and on-premise deployment options to meet your security requirements.",
      category: "technical"
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes, we provide comprehensive training programs for your team, including system operation, basic troubleshooting, and best practices. We also offer ongoing educational resources and documentation.",
      category: "support"
    },
    {
      question: "What happens if the system needs updates or modifications?",
      answer: "We provide ongoing maintenance and can implement updates or modifications as your business needs evolve. Our flexible architecture allows for easy scaling and feature additions without disrupting existing operations.",
      category: "support"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'technical', label: 'Technical' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'business', label: 'Business' },
    { id: 'support', label: 'Support' }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleItem = (index: number) => {
    const newActiveItems = new Set(activeItems);
    if (newActiveItems.has(index)) {
      newActiveItems.delete(index);
    } else {
      newActiveItems.add(index);
    }
    setActiveItems(newActiveItems);
  };

  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our Vision AI solutions and services.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-pulse-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-pulse-50 hover:text-pulse-600 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((item, index) => {
              const isActive = activeItems.has(index);
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-elegant overflow-hidden transition-all duration-300 hover:shadow-elegant-hover"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-pulse-50/50 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isActive ? (
                        <ChevronUp className="w-5 h-5 text-pulse-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get in touch for personalized answers about your specific use case.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gradient"
            >
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
