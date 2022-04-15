import React from "react";
import "./skill.css";

export default function Skill() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <p>Javascript</p>
          <p>TypeScript</p>
          <p>C++</p>
        </div>
        <div>
          <strong>Libraries:</strong>
          <p>React.js</p>
          <p>Bootstrap</p>
          <p>Next.js</p>
        </div>
        <div>
          <strong>Tools:</strong>
          <p>Eslint</p>
          <p>Git e GitHub</p>
          <p>Unix</p>
        </div>
        <div>
          <strong>Unit Test:</strong>
          <p>Jest</p>
          <p>React-test</p>
        </div>
        <div>
          <strong>Agile methodologies:</strong>
          <p>Kanban</p>
          <p>Scrum</p>
        </div>
      </div>
    </div>
  )
}