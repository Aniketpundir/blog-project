import React from "react";
import "./Skills.css";

const skillsName = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "Tailwind",
  },
  {
    id: 4,
    name: "Javascript",
  },
  {
    id: 5,
    name: "Bootstrap 5",
  },
  {
    id: 6,
    name: "Material UI",
  },
  {
    id: 7,
    name: "React",
  },
  {
    id: 8,
    name: "Node",
  },
  {
    id: 9,
    name: "C",
  },
  {
    id: 10,
    name: "C++",
  },
  {
    id: 11,
    name: "Postman",
  },
  {
    id: 12,
    name: "GitHub",
  },
  {
    id: 13,
    name: "Git",
  },
];

const education = [
  {
    id: 1,
    name: "12th",
    Batch: "To be Completed in 2026",
    college: "Delhi Public School, Ranipur , Haridwar",
  },
  {
    id: 2,
    name: "High School Diploma",
    Batch: "Completed in 2025",
    college: "Citizens High School, Florida ",
  },
  {
    id: 3,
    name: "10th",
    Batch: "Complete in 2024",
    college: "Delhi Public School, Ranipur , Haridwar",
  },
];
const Skills = () => {
  return (
    <>
      <div id="skills" className="skills">
        <div className="skill-list">
          <div className="education">
            <div className="education-content">
              <h2>Education</h2>
              {education.map((items, index) => {
                return (
                  <div className="education-list" key={index}>
                    <h3>{items.name}</h3>
                    <p>{items.Batch}</p>
                    <p>{items.college}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Skills;
