import React from 'react';
import './WhySection.css';

const WhySection = () => {
  const sections = [
    {
      id: 'farmers',
      title: "Farmers Face Uncertainty",
      subtitle: "Agriculture isn’t just a job—it’s a way of life. Yet farmers are often the most vulnerable.",
      image: "/images/why-farmers.webp", // REPLACE THIS IMAGE
      reverse: false, // Image Left
      points: [
        {
          head: "Access to Finance",
          text: "Farmers struggle to secure loans due to complex processes and inadequate financial histories. Without digital profiles, many are blacklisted after defaults."
        },
        {
          head: "The Debt Trap",
          text: "Fixed-interest loans push farmers into debt regardless of harvest success. Combined with volatile markets, this leaves farmers at constant risk."
        },
        {
          head: "Lack of Data",
          text: "Without real-time data on crop health or markets, farmers make decisions without sufficient info, leading to lower yields and avoidable losses."
        }
      ]
    },
    {
      id: 'bankers',
      title: "Bankers Struggle with Risk",
      subtitle: "Financial institutions want to support agriculture, but the high risks make it difficult.",
      image: "/images/why-bankers.avif", // REPLACE THIS IMAGE
      reverse: true, // Image Right
      points: [
        {
          head: "Untraceable Loans",
          text: "Banks lose nearly $50 billion annually due to untraceable loans, increasing default rates and reducing confidence in the sector."
        },
        {
          head: "Monitoring Challenges",
          text: "Without real-time data, banks can’t intervene when issues arise, making agricultural lending costly and inefficient."
        }
      ]
    },
    {
      id: 'insurers',
      title: "Insurers Face Gaps in Coverage",
      subtitle: "The unpredictable nature of farming makes it one of the hardest industries to insure.",
      image: "/images/why-insurers.jpg", // REPLACE THIS IMAGE
      reverse: false, // Image Left
      points: [
        {
          head: "Incomplete Risk Profiling",
          text: "Lack of reliable data forces insurers to overprice premiums, leaving $3 trillion in farm assets unprotected."
        },
        {
          head: "Slow Payouts",
          text: "Manual claims processes cause delays, leading to 60% of farm bankruptcies within the first year after a disaster."
        },
        {
          head: "Narrow Coverage",
          text: "Most policies cover only select crops, leaving livestock and specialized farming vulnerable."
        }
      ]
    },
    {
      id: 'governments',
      title: "Governments Face Economic Strain",
      subtitle: "Without modern data systems, governments lack the tools to make proactive decisions.",
      image: "/images/why-governments.jpg", // REPLACE THIS IMAGE
      reverse: true, // Image Right
      points: [
        {
          head: "Lack of Centralized Monitoring",
          text: "Governments lose $30 billion annually due to inefficient monitoring, affecting food security and pricing stability."
        },
        {
          head: "Price Instability",
          text: "Food shortages lead to market exploitation and inflation. A proactive system is needed to predict shortages and stabilize prices."
        }
      ]
    },
    {
      id: 'development',
      title: "Development Orgs Struggle to Measure",
      subtitle: "International organizations aim to transform agriculture but lack tools to measure effectiveness.",
      image: "/images/why-development.jpg", // REPLACE THIS IMAGE
      reverse: false, // Image Left
      points: [
        {
          head: "Lack of Real-Time Monitoring",
          text: "Over 70% of programs lack impact measurement. Without tracking loans and yields, organizations can't assess true results."
        },
        {
          head: "Incomplete Data",
          text: "Reliance on outdated info makes it difficult to fine-tune programs, reducing overall impact and efficiency."
        }
      ]
    }
  ];

  return (
    <div className="why-section">
      {/* Header */}
      <h1 className="why-header">Why Sky Harvest?</h1>
      
      <div className="why-container">
        {sections.map((section, index) => (
          <div key={index} className={`why-row ${section.reverse ? 'reverse' : ''}`}>
            
            {/* Image Side */}
            <div className="why-image-col">
              <div className="image-wrapper">
                <img src={section.image} alt={section.title} />
              </div>
            </div>

            {/* Text Side */}
            <div className="why-text-col">
              <h2 className="why-title">{section.title}</h2>
              <p className="why-subtitle">{section.subtitle}</p>
              
              <div className="why-points">
                {section.points.map((point, i) => (
                  <div key={i} className="point-item">
                    <h3 className="point-head">{point.head}</h3>
                    <p className="point-text">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}

        {/* --- The Solution Conclusion --- */}
        <div className="why-solution-card">
          <div className="solution-content">
            <h2>SkyHarvest: Building a Fair System</h2>
            <p>
              SkyHarvest was founded to address these deep-rooted challenges. 
              By making agricultural finance <span>fair</span>, <span>transparent</span>, and <span>sustainable</span>, 
              we’re creating solutions that work for farmers, bankers, insurers, governments, 
              and development organizations alike.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhySection;