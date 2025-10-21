import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[80vh] md:min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-60 h-60 md:w-80 md:h-80 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-72 h-72 md:w-96 md:h-96 bg-primary-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-max text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-primary-400 font-mono text-xs sm:text-sm mb-4"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6"
          >
            Kerem <span className="gradient-text">Esen</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-4xl text-gray-300 mb-6 md:mb-8"
          >
            Frontend Engineer
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed px-0 sm:px-4"
        >
          Frontend Engineer with a strong focus on building scalable, accessible, and high-performance web
          applications. Experienced in leading frontend efforts within product teams, applying industry best
          practices, and delivering clean, maintainable code. Passionate about crafting intuitive,
          user-centric interfaces that balance usability with technical excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 md:mb-16"
        >
          <motion.a
            href="/Kerem-Esen-Resume.pdf"
            download="Kerem-Esen-Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-primary-500/25"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToNext}
            className="border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
          >
            Learn More
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center justify-center gap-5 sm:gap-6 mb-12 md:mb-16"
        >
          <motion.a
            href="https://github.com/keremesen"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/keremesen"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>

          <motion.a
            href="mailto:kerem.esen.01@hotmail.com"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 cursor-pointer"
            onClick={scrollToNext}
          >
            <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
