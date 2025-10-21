import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { Section, SectionHeader } from './ui/Section'
import { Card } from './ui/Card'
import { Tag } from './ui/Tag'

const Experience = () => {
  const experiences = [
    {
      company: "Bestnet Greensoft Technology",
      position: "Frontend Developer",
      duration: "10/2023 – 09/2025",
      location: "Antalya",
      description: "Architected and led the end-to-end development of a scalable, responsive agricultural platform frontend, driving high-performance UI from concept to production.",
      achievements: [
        "Developed and optimized a robust frontend ecosystem using React, TypeScript, Redux Toolkit Query, TailwindCSS, React Hook Form, Yup and React Router",
        "Integrated advanced features, including Socket.IO for real-time functionality and i18next for seamless multi-language support",
        "Directed a team of frontend developers, guiding architectural decisions, conducting rigorous code reviews",
        "Mentored junior developers, fostering skill development through pair programming and constructive feedback",
        "Championed Agile/Scrum practices, collaborating closely with backend, QA, and product teams",
        "Drove UI excellence by prioritizing reusability, accessibility, and performance optimization"
      ],
      technologies: ["React", "TypeScript", "Redux Toolkit", "TailwindCSS", "Socket.IO", "i18next", "React Hook Form", "Yup", "React Router"]
    },
    {
      company: "Ovinot",
      position: "Frontend Developer Intern",
      duration: "06/2023 – 08/2023",
      location: "İstanbul",
      description: "Developed the admin panel using Next.js and actively performed CRUD operations and authentication processes.",
      achievements: [
        "Developed the admin panel using Next.js",
        "Actively performed CRUD operations and authentication processes",
        "Utilized various technologies such as Auth.js, PostgreSQL, Prisma, and Tailwind CSS"
      ],
      technologies: ["Next.js", "Auth.js", "PostgreSQL", "Prisma", "Tailwind CSS"]
    }
  ]

  return (
    <Section id="experience" className="bg-dark-900">
      <SectionHeader
        title={(<>Work <span className="gradient-text">Experience</span></>)}
        subtitle={"My professional journey in frontend development, showcasing growth and achievements over the years."}
      />

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex items-start ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10 ${index % 2 === 0 ? 'lg:translate-x-[-8px]' : 'lg:translate-x-[-8px]'}`}></div>

              {/* Content Card */}
              <div className={`ml-12 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <Card className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{exp.position}</h3>
                      <div className="flex items-center text-primary-400 font-medium mb-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-xs text-gray-400 flex items-start">
                          <span className="text-primary-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Tag key={techIndex}>{tech}</Tag>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Experience 