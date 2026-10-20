// constants
import {
  skillCategories,
  skillsToLearn,
  frontendSkillCategories,
  backendSkillCategories,
  dataSkillCategories,
  testingSkillCategories,
  languageSkillCategories,
  devopsAndDeploymentSkillCategories,
  cloudAndInfraSkillCategories,
} from "@/constants/skills.constants";
// components
import { BadgeList } from "@/components/organisms";

function SkillsPage() {
  return (
    <section>
      <h1>Skills</h1>

      <h3 className="border-b-8 border-b-purple-500">Fullstack Engineering</h3>
      <section>
        <p>Frontend</p>
        <div className="skills-container">
          {frontendSkillCategories.map((category) => (
            <div key={category.id} className="skill-card">
              <p>{category.name}</p>
              <BadgeList badgeList={category.skills} />
            </div>
          ))}
        </div>
        <p>Backend</p>
        <div className="skills-container">
          {backendSkillCategories.map((category) => (
            <div key={category.id} className="skill-card">
              <p>{category.name}</p>
              <BadgeList badgeList={category.skills} />
            </div>
          ))}
        </div>
        <p>Data</p>
        <div className="skills-container">
          {dataSkillCategories.map((category) => (
            <div key={category.id} className="skill-card">
              <p>{category.name}</p>
              <BadgeList badgeList={category.skills} />
            </div>
          ))}
        </div>
        <p>Across the Stack</p>
        <div className="skills-container">
          {languageSkillCategories.map((category) => (
            <div key={category.id} className="skill-card">
              <p>{category.name}</p>
              <BadgeList badgeList={category.skills} />
            </div>
          ))}
        </div>
      </section>
      <h3 className="border-b-8 border-b-blue-500">DevOps & Deployment</h3>
      <section>
        <div className="skills-container">
          {devopsAndDeploymentSkillCategories.map((category) => (
            <div key={category.id} className="skill-card">
              <p>{category.name}</p>
              <BadgeList badgeList={category.skills} />
            </div>
          ))}
        </div>
      </section>
      <h3 className="border-b-8 border-b-orange-500">Cloud & Infrastructure</h3>
      <section>
        <div className="skills-container">
          {cloudAndInfraSkillCategories.map((category) => (
            <div key={category.id} className="skill-card">
              <p>{category.name}</p>
              <BadgeList badgeList={category.skills} />
            </div>
          ))}
        </div>
      </section>

      <p className="mt-12 border border-customPrimary border-2 rounded-lg p-2">
        👍 Still want to learn these: {skillsToLearn.join(", ")}
      </p>
    </section>
  );
}

export default SkillsPage;
