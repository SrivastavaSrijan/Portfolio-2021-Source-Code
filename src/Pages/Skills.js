import React from "react";
import ColoredCard from "../Components/ColoredCard.js";
import { Code, Cpu, Users } from "react-feather";
import Headings from "../Components/Headings.js";
const Skills = () => {
  return (
    <section className="section" id="skills">
      <Headings number="03." title="Skills" emoji="🥞" />
      <div className="columns is-hcentered mt-3">
        <ColoredCard
          title="Software"
          subtitle="🥞 Technology Stack"
          bgColor="light"
          skills={[
            { Name: "React", Level: 95, Color: "light" },
            { Name: "Java", Level: 85, Color: "danger" },
            { Name: "JavaScript", Level: 75, Color: "primary" },
            { Name: "Express", Level: 65, Color: "success" },
            { Name: "Python", Level: 65, Color: "warning" },
          ]}
          otherSkills={[
            { Name: "HTML/CSS", Color: "black" },
            { Name: "Android Dev", Color: "black" },
            { Name: "JavaFX", Color: "black" },
            { Name: "SQL", Color: "black" },
            { Name: "Data Analytics", Color: "black" },
          ]}
        >
          <Code size={32} className="mr-2" />
        </ColoredCard>
        <ColoredCard
          title="Electronics"
          subtitle="⚙️ Tools & Theory"
          bgColor="primary"
          skills={[
            { Name: "COMSOL", Level: 95, Color: "light" },
            { Name: "μControllers", Level: 85, Color: "danger" },
            { Name: "MATLAB", Level: 75, Color: "primary" },
            { Name: "Communications", Level: 75, Color: "success" },
            { Name: "Virtuso", Level: 65, Color: "warning" },
          ]}
          otherSkills={[
            { Name: "VLSI", Color: "black" },
            { Name: "Embedded Systems", Color: "black" },
            { Name: "DSP", Color: "black" },
            { Name: "Arduino", Color: "black" },
          ]}
        >
          <Cpu size={32} className="mr-2" />
        </ColoredCard>
        <ColoredCard
          title="Misc. Skills"
          subtitle="🤠 Other Stuff"
          bgColor="danger"
          skills={[
            { Name: "Technical Doc.", Level: 100, Color: "light" },
            { Name: "Project Direction", Level: 95, Color: "danger" },
            { Name: "Team Management", Level: 85, Color: "primary" },
            { Name: "Digital Marketing", Level: 75, Color: "success " },
            { Name: "Public Speaking", Level: 65, Color: "warning" },
          ]}
          otherSkills={[
            { Name: "Project Direction", Color: "black" },
            { Name: "Team Management", Color: "black" },
            { Name: "Digital Marketing", Color: "black" },
            { Name: "Public Speaking", Color: "black" },
          ]}
          info
        >
          <Users size={32} className="mr-2" />
        </ColoredCard>
      </div>
    </section>
  );
};
export default Skills;
