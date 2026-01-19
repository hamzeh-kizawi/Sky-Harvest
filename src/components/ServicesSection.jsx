import React, { useState, useRef } from 'react';
import './ServicesSection.css';

// DATA: Updated with the specific text provided
const initialData = [
  {
    image: '/images/farmer-Photoroom.png',
    title: 'For Farmers',
    topic: 'Fair Finance',
    desc: 'Automated Protection. A Path to Prosperity. Fair, traceable financing designed to protect your livelihood.',
    specifications: [
      { label: 'Map Land', value: 'Walk or draw boundaries' },
      { label: 'Verify', value: 'Instant Satellite & AI' },
      { label: 'Collateral', value: 'None required' },
      { label: 'Insurance', value: 'Automated & Crop-tied' },
    ]
  },
  {
    image: '/images/bank-Photoroom.png',
    title: 'Banks & Insurers',
    topic: 'Risk OS',
    desc: 'A New Operating System for Agricultural Credit. Reduce risk, automate compliance, and finance confidently.',
    specifications: [
      { label: 'Loans', value: 'Linked to verified parcels' },
      { label: 'Compliance', value: 'Automated Geo-traceability' },
      { label: 'Risk', value: 'Dynamic Satellite Assessment' },
      { label: 'Payouts', value: 'Automated via AI' },
    ]
  },
  {
    image: '/images/Technology Partners-Photoroom.png',
    title: 'Tech Partners',
    topic: 'Integration',
    desc: 'Build the Future of Agriculture. Integrate IoT and AI to scale real-world impact across global regions.',
    specifications: [
      { label: 'Integration', value: 'Seamless API-based' },
      { label: 'Reach', value: 'Extend solution scope' },
      { label: 'Regions', value: 'S. Asia, Africa, LATAM' },
      { label: 'Focus', value: 'Smart Farming Systems' },
    ]
  },
  {
    image: '/images/governments-flags-Photoroom.png',
    title: 'Governments',
    topic: 'Food Security',
    desc: 'Launch national-level agri-finance platforms. Monitor crop coverage and fund flow in real-time.',
    specifications: [
      { label: 'Control', value: 'Central Agriculture Dashboard' },
      { label: 'Mapping', value: 'AI-led High Potential Zones' },
      { label: 'Resource', value: 'Optimized Allocation' },
      { label: 'Resilience', value: 'Climate-vulnerable support' },
    ]
  },
  {
    image: '/images/uni-research-Photoroom.png',
    title: 'Researchers',
    topic: 'Agri-Science',
    desc: 'Collaborate to Push Boundaries. Access anonymized field data for case studies and pilot new tools.',
    specifications: [
      { label: 'Data', value: 'Access Anonymized Fields' },
      { label: 'Study', value: 'Socioeconomic & Rural' },
      { label: 'Models', value: 'Agri-finance & Risk' },
      { label: 'Analytics', value: 'Climate Risk Analysis' },
    ]
  },
];

const ServicesSection = () => {
  const [items, setItems] = useState(initialData);
  const [animationClass, setAnimationClass] = useState('');
  const [showDetail, setShowDetail] = useState(false);
  
  const isAnimating = useRef(false);

  // Logic: Move first item to the end
  const handleNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setAnimationClass('next');

    setTimeout(() => {
      setItems((prev) => {
        const copy = [...prev];
        const first = copy.shift();
        copy.push(first);
        return copy;
      });
      setAnimationClass('');
      isAnimating.current = false;
    }, 500); 
  };

  // Logic: Move last item to the start
  const handlePrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setAnimationClass('prev');

    setTimeout(() => {
      setItems((prev) => {
        const copy = [...prev];
        const last = copy.pop();
        copy.unshift(last);
        return copy;
      });
      setAnimationClass('');
      isAnimating.current = false;
    }, 500);
  };

  return (
    <div className="services-section carousel-root">
      {/* Title */}
      <h1 className="section-header">Our Services</h1>
      
      <div className={`carousel ${animationClass} ${showDetail ? 'showDetail' : ''}`}>
        
        <div className="list">
          {items.map((item, index) => (
            <div className="item" key={index}>
              {/* Image */}
              <img src={item.image} alt={item.title} />
              
              {/* Intro Content (Default View) */}
              <div className="introduce">
                <div className="topic">{item.topic}</div>
                <div className="title">{item.title}</div>
                <div className="des">{item.desc}</div>
                <button className="seeMore" onClick={() => setShowDetail(true)}>
                  SEE MORE &#8599;
                </button>
              </div>

              {/* Detail Content (Clicked View) */}
              <div className="detail">
                <div className="title">{item.title}</div>
                <div className="des">{item.desc}</div>
                
                <div className="specifications">
                  {item.specifications.map((spec, i) => (
                    <div key={i} className="spec-item">
                      <p className="spec-label">{spec.label}</p>
                      <p className="spec-value">{spec.value}</p>
                    </div>
                  ))}
                </div>
                
                <div className="checkout">
                  <button>GET STARTED</button>
                  <button>CONTACT US</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="arrows">
          <button id="prev" onClick={handlePrev}>&lt;</button>
          <button id="next" onClick={handleNext}>&gt;</button>
          <button id="back" onClick={() => setShowDetail(false)}>See All &#8599;</button>
        </div>

      </div>
    </div>
  );
};

export default ServicesSection;