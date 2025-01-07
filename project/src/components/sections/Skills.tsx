import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Database, Globe, Terminal, Cpu, Figma, Github } from 'lucide-react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

const techLogos = [
  // Row 1 - Frontend
  [Code2, Figma, Github, Terminal, Database, Palette],
  // Row 2 - Design
  [Palette, Globe, Cpu, Terminal, Database, Code2],
  // Row 3 - Backend
  [Database, Terminal, Globe, Code2, Palette, Github],
  // Row 4 - Tools
  [Github, Figma, Terminal, Database, Globe, Palette],
  // Row 5 - Extra
  [Code2, Cpu, Database, Palette, Terminal, Globe],
];

const Skills = () => {
  return (
    <Section>
      <SectionHeading>Skills</SectionHeading>
      <div className="grid grid-cols-6 gap-4">
        {techLogos.map((row, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4">
            {row.map((Icon, iconIndex) => (
              <motion.div
                key={iconIndex}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="p-4 rounded-full bg-gray-100"
              >
                <Icon size={32} />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;