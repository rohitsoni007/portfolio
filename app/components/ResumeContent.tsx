import React from "react";
import { RESUME_DATA, SKILL_CATEGORIES } from "@/lib/constants";
import "./resume-print.css";

export const ResumeContent = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="resume-content bg-white text-gray-900 p-8 max-w-4xl mx-auto print:p-0 print:max-w-none print:shadow-none"
      style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}
    >
      {/* Header */}
      <div className="text-center border-b-4 border-blue-600 pb-5 mb-8 print:border-b-2">
        <h1 className="text-4xl font-bold text-blue-800 mb-2 print:text-3xl">
          {RESUME_DATA.personalInfo.name}
        </h1>
        <h2 className="text-xl text-gray-600 mb-4 print:text-lg">
          {RESUME_DATA.personalInfo.title}
        </h2>
        <div className="flex justify-center gap-8 flex-wrap text-sm print:text-xs">
          {/* <span>📧 {RESUME_DATA.personalInfo.email}</span> */}
          <span>🌐 {RESUME_DATA.personalInfo.github}</span>
          <span>💼 {RESUME_DATA.personalInfo.linkedin}</span>
          <span>📍 {RESUME_DATA.personalInfo.location}</span>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-blue-800 border-b-2 border-gray-200 pb-1 mb-3 print:text-lg print:border-b print:pb-1">
          Professional Summary
        </h3>
        <p className="text-gray-700">{RESUME_DATA.professionalSummary}</p>
      </div>

      {/* Technical Skills */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-blue-800 border-b-2 border-gray-200 pb-1 mb-3 print:text-lg print:border-b print:pb-1">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 p-2 rounded border-l-2 border-blue-600 print:bg-white print:border-l"
            >
              <h4 className="font-bold text-blue-800 text-sm mb-1 print:text-xs">
                {category.title}
              </h4>
              <ul className="text-xs flex flex-wrap gap-1">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="bg-white px-2 py-1 rounded border print:border-gray-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-blue-800 border-b-2 border-gray-200 pb-1 mb-3 print:text-lg print:border-b print:pb-1">
          Professional Experience
        </h3>

        {RESUME_DATA.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-blue-800 text-lg print:text-base">
                  {exp.position}
                </h4>
                <p className="font-semibold text-gray-700 print:text-sm">
                  {exp.company}
                </p>
              </div>
              <span className="text-gray-500 italic print:text-xs">
                {exp.period}
              </span>
            </div>
            <ul className="text-sm space-y-1 ml-4 print:text-xs">
              {exp.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex}>• {responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Featured Projects */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-blue-800 border-b-2 border-gray-200 pb-1 mb-3 print:text-lg print:border-b print:pb-1">
          Featured Projects
        </h3>

        <div className="space-y-4">
          {RESUME_DATA.projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500 print:bg-white print:border-l-2"
            >
              <h4 className="font-bold text-green-700 mb-1 print:text-base">
                {project.name}
              </h4>
              <p className="text-sm text-gray-600 mb-2 print:text-xs">
                {project.technologies}
              </p>
              <p className="text-sm text-gray-700 print:text-xs">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-blue-800 border-b-2 border-gray-200 pb-1 mb-3 print:text-lg print:border-b print:pb-1">
          Education
        </h3>
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-bold text-blue-800 text-lg print:text-base">
              {RESUME_DATA.education.degree}
            </h4>
            <p className="font-semibold text-gray-700 print:text-sm">
              {RESUME_DATA.education.institution}
            </p>
          </div>
          <span className="text-gray-500 italic print:text-xs">
            {RESUME_DATA.education.period}
          </span>
        </div>
      </div>

      {/* Certifications */}
      {/* <div className="mb-6">
        <h3 className="text-xl font-bold text-blue-800 border-b-2 border-gray-200 pb-1 mb-3">
          Certifications
        </h3>
        <ul className="text-sm space-y-1 ml-4">
          <li>• AWS Certified Developer Associate (2023)</li>
          <li>• MongoDB Certified Developer (2022)</li>
          <li>• React Native Certification (2021)</li>
        </ul>
      </div> */}
    </div>
  );
});

ResumeContent.displayName = "ResumeContent";
