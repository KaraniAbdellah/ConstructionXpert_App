import React, { useState } from 'react';
import Header from '../Home_Com/Header';

const FAQ = () => {
  const faqs = [
    {
      question: "What is ConstructionXpert Services Solution?",
      answer: "ConstructionXpert Services Solution is a web application designed to help construction teams create and manage construction projects, assign tasks to team members, manage necessary resources, and track project and task details."
    },
    {
      question: "What are the main features of this application?",
      answer: "The application offers three main feature categories: Project Management (create, view, update, delete projects), Task Management (create, view, update, delete tasks), and Resource Management (add, view, update, delete resources)."
    },
    {
      question: "What technologies are used in this project?",
      answer: "The project uses JavaScript (Node.js) as the programming language, Express.js as the web framework, MongoDB for the database, and HTML/CSS/JavaScript for the frontend with optional React.js. Development tools include VS Code, WebStorm, Figma/Adobe XD for mockups, and Git for version control."
    },
    {
      question: "Are there any bonus features in the application?",
      answer: "Yes, the bonus features include administrator login/logout functionality, page protection requiring administrator authentication, and supplier management capabilities for administrators."
    },
    {
      question: "What UML diagrams are required for this project?",
      answer: "Three UML diagrams are required: Class Diagram, Use Case Diagram, and Sequence Diagram."
    },
    {
      question: "What is the project timeline?",
      answer: "The project has a 5-day timeline, launched on March 17, 2025 at 9:00 AM with a submission deadline of March 21, 2025 before 4:00 PM."
    },
    {
      question: "What are the deliverables for this project?",
      answer: "Deliverables include a task planning link (Trello or similar), presentation support, and a GitHub repository containing a README, the three UML diagrams in image format, and the application source code with all necessary files."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <>
        <Header></Header>
        <div className="w-full pt-40 max-w-3xl mx-auto p-6  rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-zinc-800">ConstructionXpert Services - Frequently Asked Questions</h2>
        
        <div className="space-y-4">
            {faqs.map((faq, index) => (
            <div key={index} className="border border-zinc-200 rounded-lg overflow-hidden">
                <button
                className="w-full flex justify-between items-center p-4 text-left bg-zinc-100 hover:bg-zinc-200 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                >
                <span className="font-medium text-zinc-800">{faq.question}</span>
                <svg
                    className={`w-5 h-5 text-zinc-600 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </button>
                
                {openIndex === index && (
                <div className="p-4 bg-white border-t border-zinc-200">
                    <p className="text-zinc-700">{faq.answer}</p>
                </div>
                )}
            </div>
            ))}
        </div>
        
        <div className="mt-8 p-4 bg-zinc-200 rounded-lg text-zinc-700">
            <p className="text-sm">
            For more information about the ConstructionXpert Services Solution, please contact your project manager or visit our documentation portal.
            </p>
        </div>
        </div>
    </>
  );
};

export default FAQ;