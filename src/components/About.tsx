import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Zap, Target, Laptop } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency, ensuring the best user experience.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "User Experience",
      description: "Creating intuitive and engaging interfaces that users love to interact with.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-dark-800">
      <div className="container-max px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating exceptional digital experiences and pushing the boundaries of web
            development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>

              <p className="text-gray-300 leading-relaxed">
                I'm a Frontend Engineer with a strong focus on building scalable, accessible, and
                high-performance web applications. My journey in web development started with a curiosity
                about how things work on the internet, and it has evolved into a passion for creating
                seamless, performant, and beautiful user experiences.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I specialize in modern JavaScript frameworks, particularly React, React Native, and
                TypeScript, and I'm always exploring new technologies to stay at the forefront of web
                development. My approach combines technical expertise with creative problem-solving to deliver
                solutions that exceed expectations.
              </p>

              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, sharing knowledge
                with the developer community, or exploring new ways to make the web a better place for
                everyone.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Placeholder for profile image */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-full flex items-center justify-center">
                <Laptop className="w-32 h-32 text-primary-400" />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-500 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -left-8 w-4 h-4 bg-primary-300 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 glass-effect rounded-xl card-hover"
            >
              <div className="text-primary-400 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
