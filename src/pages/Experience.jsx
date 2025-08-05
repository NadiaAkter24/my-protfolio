import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Crew Member",
    company: "McDonald’s, Scarborough, ON",
    period: "November 2022 – Present",
    details: [
      "Delivered excellent customer service in a fast-paced, high-volume environment.",
      "Processed 200+ transactions daily with 100% accuracy, including cash handling and digital payments.",
      "Managed drive-thru and front desk during peak hours with strong multitasking.",
      "Enforced company policies and promoted brand standards.",
      "Improved order accuracy and reduced wait times by 20%.",
      "Trained new employees on operations and customer service.",
      "Monitored inventory and ensured supply availability.",
      "Maintained food safety and hygiene standards.",
      "Used internal systems to personalize customer service.",
      "Assisted shift leads with troubleshooting and workflow.",
      "Adapted quickly to changing priorities and customer needs.",
    ],
  },
  {
    role: "Private Tutor",
    company: "Bangladesh International School, Dammam, Saudi Arabia",
    period: "January 2019 – September 2022",
    details: [
      "Provided one-on-one tutoring in Physics, Chemistry, and Mathematics, helping students improve academic performance.",
      "Developed personalized study plans, fostering student confidence and aiding academic success.",
      "Conducted interactive sessions to enhance understanding of core scientific and mathematical principles.",
    ],
  },
  {
    role: "Office Assistant / Co-op (Part-Time)",
    company: "Abdullah Khaled Al Hamra General Contracting Establishment, Saudi Arabia",
    period: "January 2018 – December 2020",
    details: [
      "Provided administrative and clerical support to office staff and management.",
      "Prepared and organized documents, files, and records for internal use and audits.",
      "Managed phone calls, scheduled appointments, and handled email correspondence.",
      "Assisted in updating spreadsheets, tracking project-related data, and generating basic reports.",
      "Supported procurement processes by handling vendor communications and documentation.",
      "Helped maintain office inventory, supplies, and workplace organization.",
      "Collaborated with different departments to support day-to-day operations.",
      "Maintained confidentiality of company and client information while handling sensitive data.",
    ],
  },
  {
    role: "Sales Associate",
    company: "Abqaiq Mall, Abqaiq, Saudi Arabia",
    period: "January 2017 – December 2019",
    details: [
      "Assisted customers with product selection, providing excellent service and personalized recommendations.",
      "Handled daily cash transactions, credit card payments, and refunds with accuracy and accountability.",
      "Maintained store cleanliness, organized merchandise displays, and ensured shelves were fully stocked.",
      "Supported inventory management through stock counting, restocking, and loss prevention measures.",
      "Collaborated with team members to meet daily sales targets and promotional goals.",
      "Provided product knowledge and upselling techniques to increase average transaction value.",
      "Resolved customer inquiries and complaints efficiently, ensuring high customer satisfaction.",
      "Adhered to store policies, health & safety protocols, and visual merchandising standards.",
    ],
  },
  {
    role: "Co-op Student – LinkedIn & Web Management Assistant",
    company: "Career Advisory Canada — Remote",
    period: "July 16, 2025 – September 16, 2025 (2 months)",
    details: [
      "Managed and updated Career Advisory Canada’s LinkedIn page with relevant content, client success stories, and service updates.",
      "Created engaging social media posts aligned with company vision and values; responded promptly to LinkedIn inquiries and messages.",
      "Assisted in website content updates and collaborated on improving user experience and site functionality.",
      "Supported planning, organizing, and promoting webinars featuring industry experts and career coaches; handled guest communications and logistical support.",
      "Assisted with resume reviews, providing feedback and suggestions to align resumes with industry standards.",
      "Developed templates and resources to enhance candidates’ resume quality.",
      "Gained hands-on experience in digital marketing, social media management, client interaction, and career advisory services.",
      "Received mentorship and coaching from experienced professionals throughout the internship.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-container">
      <h1>Work Experience</h1>
      {experiences.map(({ role, company, period, details }, idx) => (
        <div key={idx} className="experience-block">
          <h2>{role}</h2>
          <p className="company">{company}</p>
          <p className="period">{period}</p>
          <ul>
            {details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
