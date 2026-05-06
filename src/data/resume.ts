// ============================================================
// RESUME DATA — edit this file to update your portfolio content
// ============================================================

import projectAssistiveTech from "@/assets/project_assistive_tech.png";
import projectDrowsinessAI from "@/assets/project_drowsiness_ai.png";
import projectFoodApp from "@/assets/project_food_app.png";

export const resume = {
  name: "Hemanthsrisai Boddupalli",
  title: "Business Analyst & Technology Consultant",
  tagline:
    "Turning data, cloud, and Agile delivery into measurable business outcomes.",
  location: "Hyderabad, India",
  email: "hemanthsrisaiboddupalli@gmail.com",
  phone: "+91 89859 25737",
  socials: {
    linkedin: "https://linkedin.com/in/hemanthsrisai",
    twitter: "https://twitter.com/hemanthsrisai",
  },

  about: {
    headline: "Bridging business strategy with technical execution through data, cloud, and Agile delivery.",
  },

  skillTags: [
    "AWS", "Google Cloud", "Azure", "SQL", "Python", "Java", "C++",
    "HTML/CSS", "Power BI", "Athena", "Tosca", "Django", "Git",
    "Agile", "Generative AI", "Digital Transformation",
  ],

  experience: [
    {
      role: "Business Analyst",
      company: "Fiserv",
      dates: "Aug 2022 — Nov 2024",
      location: "Bengaluru, India",
      companyLogo: "F",
      color: "#FF6600",
      achievements: [
        { metric: "30%", label: "Cost Optimization" },
        { metric: "25%", label: "Better Availability" },
        { metric: "35%", label: "Faster Resolution" },
        { metric: "15%", label: "Efficiency Gain" },
      ],
      bullets: [
        "Led cross-functional execution of enterprise cloud migration to AWS (EC2, RDS, S3, VPC), aligning engineering, infrastructure, and finance stakeholders to deliver 30% cost optimization and 25% improvement in platform availability.",
        "Established KPI-driven performance governance by tracking transaction latency, API success rates, and regional traffic via executive Power BI dashboards, enabling proactive risk identification and 35% faster incident resolution.",
        "Drove data-informed decisions using AWS Athena (SQL) to analyze large-scale payment logs, identifying bottlenecks and prioritizing enhancements that improved backend efficiency by 15%.",
        "Partnered with project managers and functional teams to manage dependencies, document key decisions, and support structured reporting, ensuring on-time delivery of business-critical initiatives.",
      ],
    },
    {
      role: "Technical HR Intern",
      company: "CUREYA",
      dates: "Dec 2021 — Jan 2022",
      location: "Remote",
      companyLogo: "C",
      color: "#4CAF50",
      achievements: [
        { metric: "50+", label: "Candidates Screened" },
      ],
      bullets: [
        "Streamlined hiring processes by implementing structured evaluation criteria, enhancing the quality of candidate selection.",
      ],
    },
    {
      role: "Android Developer Intern",
      company: "ECIL",
      dates: "May 2019 — Jun 2019",
      location: "Hyderabad, India",
      companyLogo: "E",
      color: "#2196F3",
      achievements: [
        { metric: "50%", label: "Error Reduction" },
      ],
      bullets: [
        "Designed and implemented a student information system using Java and SQL, reducing manual data errors by 50%.",
      ],
    },
  ],

  projects: [
    {
      title: "Assistive Technologies for the Visually Impaired",
      description:
        "Published research paper analyzing current and emerging assistive technologies for blind individuals, covering both research and market-ready solutions.",
      tags: ["Research", "Springer"],
      stack: ["Research", "Accessibility"],
      image: projectAssistiveTech,
      live: "",
      repo: "",
    },
    {
      title: "Drowsiness Detection Using AI",
      description:
        "Published paper on an eye-state monitoring system using Viola-Jones and SVM algorithms to detect driver drowsiness via head and eye movement.",
      tags: ["Research", "AI"],
      stack: ["Python", "OpenCV", "SVM"],
      image: projectDrowsinessAI,
      live: "",
      repo: "",
    },
    {
      title: "Food Ordering Web Application",
      description:
        "Built a Django-based food ordering web app; converted a college-level APSSDC hackathon win into a 2-month internship at SRM University.",
      tags: ["Product", "Web"],
      stack: ["Django", "Python", "SQL"],
      image: projectFoodApp,
      live: "",
      repo: "",
    },
  ],

  certifications: [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2025 (Scheduled)" },
    { name: "Microsoft Certified Azure AZ-900", issuer: "Microsoft", year: "2021" },
    { name: "Tosca Automation Specialist", issuer: "Tricentis", year: "2023" },
    { name: "Google Cloud Essentials", issuer: "Google Cloud", year: "2020" },
  ],
} as const;

export type Resume = typeof resume;
