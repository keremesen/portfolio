import { motion } from "framer-motion";
import { Code, Database, TestTube, Settings } from "lucide-react";
import { Section, SectionHeader } from "./ui/Section";
import { Card } from "./ui/Card";
import { Tag } from "./ui/Tag";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend",
      skills: [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Chakra UI",
        "i18next",
        "Redux Toolkit",
        "Zustand",
        "RTK Query",
        "Tanstack Query",
        "SWR",
        "GraphQL",
        "Socket.IO",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & Database",
      skills: ["Node.js", "Socket.io", "MongoDB", "Prisma", "Firebase"],
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Testing & Tools",
      skills: ["Jest", "Git", "CI/CD pipelines", "Webpack", "Vite"],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Methodologies & Practices",
      skills: ["Agile", "Scrum", "Code Review", "Performance Optimization"],
    },
  ];

  return (
    <Section id="skills" className="bg-dark-900">
      <SectionHeader
        title={
          <>
            Technical <span className="gradient-text">Skills</span>
          </>
        }
        subtitle={"A comprehensive overview of my technical expertise and the technologies I work with."}
      />

      <div className="grid mb-16">
        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center mb-4">
                <div className="text-primary-400 mr-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 + skillIndex * 0.03 }}
                  >
                    <Tag className="text-sm px-3 py-2">{skill}</Tag>
                  </motion.div>
                ))}
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
