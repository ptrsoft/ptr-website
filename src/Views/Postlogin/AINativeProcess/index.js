import React from 'react';
import { Link } from 'react-router-dom';
import AIJourney from "../../../Assets/Images/AIJourney.svg"
import tempImage from "../../../Assets/Images/emailAutomation.png"
const ProcessPage = () => {
  const processSteps = [
    {
      title: "Problem Definition and Opportunity Identification",
      points: [
        "Clearly define the problem that AI can solve",
        "Identify opportunities where AI can create significant value",
        "Focus on problems where AI's unique capabilities are essential",
        "Strong user research and market analysis"
      ],
      image: tempImage
    },
    {
      title: "Data Acquisition and Preparation",
      points: [
        "Identify and acquire relevant data",
        "Clean, preprocess, and transform data",
        "Ensure data quality and proper governance",
        "Maintain ethical data practices"
      ],
      image:tempImage
    },
    {
        title: "Model Development and Training:",
        points: [
          "Identify and acquire relevant dataSelect and design appropriate AI models (e.g., machine learning, deep learning).",
          "Train models using prepared data.",
          "Evaluate model performance and iterate on model design.",
          "This is where the Ai models are built, and tested."
        ],
        image:tempImage
      },
      {
        title: "Integration and Application Development:",
        points: [
            "Integrate trained AI models into the product or application.",
          "Develop user interfaces and experiences that leverage AI capabilities.",
          "Focus on seamless and intuitive integration."
        ],
        image:tempImage
      },
    
      {
        title: "Deployment and Monitoring:",
        points: [
           "Deploy the AI-powered product or application.",
           "Continuously monitor model performance and data drift.",
           "Establish feedback loops to collect user data and improve the model.",
           "This is where the product goes live."
        ],
        image: tempImage
      },
      {
        title: "Iteration and Optimization:",
        points: [
          "Iteratively improve the model and product based on user feedback and performance data.",
          "Continuously retrain models with new data.",
          "Adapt to evolving user needs and market conditions.",
          "This is where the product is improved, and refined."
        ],
        image: tempImage
      },
    // Add other steps similarly...
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 to-purple-900 text-white">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl font-bold mb-8 animate-fade-in-up">
            Ready to build your AI-native product?
          </h1>
          <p className="text-xl mb-12 text-blue-100">
            Contact our team to start your development journey with our proven process. 🚀
          </p>
          <Link 
            to="/contact-us" 
            className="inline-block bg-white text-blue-800 px-12 py-4 rounded-full 
                      text-lg font-semibold hover:scale-105 transition-transform"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Full-screen Image */}
      <div className="max-h-screen flex   flex-col items-center justify-center bg-white pt-[30px] space-container ">
         <img 
          src={AIJourney}
          className="w-[700px] object-cover" 
          alt="AI Development" 
        />
      </div>

      {/* Process Overview */}
      <section className="space-container min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Our process emphasizes iterative cycles, data-centricity, and continuous learning
          </h2>
            
        </div>
      </section>

      {/* Process Steps */}
      {processSteps.map((step, index) => (
        <section key={index} className="min-h-screen space-container flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Text Content */}
              <div className="lg:w-1/2">
                <div className="text-blue-600 text-6xl font-bold mb-6">0{index + 1}</div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">{step.title}</h3>
                <ul className="space-y-4">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" 
                           fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <img 
                  src={step.image} 
                  className="rounded-xl shadow-2xl hover:shadow-xl transition-shadow"
                  alt={`Step ${index + 1}`}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProcessPage;