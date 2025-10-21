import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/keremesen",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/keremesen",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:kerem.esen.01@hotmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="container-max py-10 md:py-12 px-4">
        <div className="grid gap-8 items-center sm:grid-cols-2 md:grid-cols-3">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Kerem <span className="gradient-text">Esen</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Frontend Engineer passionate about creating exceptional digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Skills
              </a>
              <a
                href="#experience"
                className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                Experience
              </a>
              <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Contact
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-primary-400 transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Kerem Esen. All rights reserved. Made with{" "}
            <Heart className="inline w-4 h-4 text-red-500" /> in Türkiye.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
