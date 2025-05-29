'use client';
import { motion } from 'framer-motion';
import { FaRegCalendarAlt, FaFilePdf, FaLaptopCode, FaUsers } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import NavbarPage from '../components/Navbar';
import Footer from '../components/footer';

const timelineItems = [
  {
    date: "15 Jun 25",
    title: "Round 1: Concept Submission (Online)",
    icon: <FaFilePdf className="text-violet-400" />,
    description: "Teams submit a 6-page proposal detailing their problem statement, solution approach, tech stack, and future scope. A 5-minute demo video showcasing the idea must be uploaded to a cloud platform with an accessible link.",
    time: "Start: 15 Jun 25, 01:23 AM IST\nEnd: 30 Jun 25, 05:24 PM IST",
    color: "bg-violet-500",
    borderColor: "border-violet-500"
  },
  {
    date: "02 Aug 25",
    title: "Round 2: Prototype Evaluation (Onsite)",
    icon: <FaLaptopCode className="text-amber-400" />,
    description: "The top 40% of teams from Round 1 will present their working prototypes to a panel of judges. The focus will be on feasibility, innovation, and technical execution.",
    time: "Start: 02 Aug 25, 09:00 AM IST\nEnd: 03 Aug 25, 10:30 AM IST",
    color: "bg-amber-500",
    borderColor: "border-amber-500"
  },
  {
    date: "20 Aug 25",
    title: "Round 3: Final Assessment (Onsite)",
    icon: <FaUsers className="text-emerald-400" />,
    description: "The top 30 teams will pitch their solutions to industry leaders for final evaluation. Live demonstrations and Q&A sessions with judges.",
    time: "Start: 20 Aug 25, 10:00 AM IST\nEnd: 20 Aug 25, 05:00 PM IST",
    color: "bg-emerald-500",
    borderColor: "border-emerald-500"
  }
];

// TimelineItem with alternating layout and enhanced visuals
const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative flex w-full"
    >
      {/* For large screens: alternate left/right */}
      <div className={`hidden md:flex w-1/2 ${isLeft ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
        {isLeft && (
          <TimelineCard item={item} align="right" index={index} />
        )}
      </div>

      {/* Timeline vertical line and dot */}
      <div className="flex flex-col items-center z-20">
        {/* Connecting line above */}
        {index !== 0 && (
          <div className={`w-1 h-10 md:h-20 ${item.color} opacity-30`} />
        )}
        {/* Glowing dot with icon */}
        <motion.div
          whileHover={{ scale: 1.18, boxShadow: '0 0 0 8px rgba(139,92,246,0.15)' }}
          className={`relative flex items-center justify-center w-10 h-10 rounded-full border-4 ${item.borderColor} ${item.color} shadow-lg`}
          style={{
            boxShadow: `0 0 24px 4px ${item.color.replace('bg-', '').replace('-500', '') + '66'}, 0 0 0 6px rgba(0,0,0,0.1)`
          }}
        >
          <span className="text-2xl">{item.icon}</span>
          {/* Glowing pulse */}
          <span className={`absolute animate-ping w-10 h-10 rounded-full ${item.color} opacity-20`}></span>
        </motion.div>
        {/* Connecting line below */}
        {index !== timelineItems.length - 1 && (
          <div className={`w-1 h-10 md:h-20 ${item.color} opacity-30`} />
        )}
      </div>

      {/* For large screens: alternate left/right */}
      <div className={`hidden md:flex w-1/2 ${!isLeft ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
        {!isLeft && (
          <TimelineCard item={item} align="left" index={index} />
        )}
      </div>

      {/* For mobile: always show card below dot */}
      <div className="md:hidden flex-1 pl-6">
        <TimelineCard item={item} align="left" index={index} />
      </div>
    </motion.div>
  );
};

// TimelineCard with enhanced visuals
function TimelineCard({ item, align, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -4, boxShadow: '0 8px 40px 0 rgba(139,92,246,0.18)' }}
      className={`relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 border ${item.borderColor} rounded-2xl p-6 shadow-xl max-w-md w-full mb-12`}
    >
      <div className="flex items-center mb-2">
        <span className="text-sm font-semibold text-gray-400 mr-3">{item.date}</span>
        <h3 className="text-xl font-bold text-white">{item.title}</h3>
      </div>
      <p className="text-gray-300 mb-4 whitespace-pre-line">{item.description}</p>
      <div className="flex items-center mb-2">
        <FaRegCalendarAlt className="text-gray-400 mr-2" />
        <span className="text-gray-400 text-sm whitespace-pre-line">{item.time}</span>
      </div>
      {/* Extra: requirements for first round */}
      {index === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-violet-900/20 border border-violet-700 rounded-xl p-4 mt-3"
        >
          <h4 className="text-sm font-semibold text-violet-300 mb-2 flex items-center">
            <GiProgression className="mr-2" /> Submission Requirements:
          </h4>
          <ul className="text-gray-300 text-sm space-y-2">
            <li className="flex items-start">
              <span className="text-violet-400 mr-2">•</span>
              6-page proposal (PDF) covering problem, solution, tech stack, and future scope
            </li>
            <li className="flex items-start">
              <span className="text-violet-400 mr-2">•</span>
              5-minute demo video uploaded to cloud platform with accessible link
            </li>
          </ul>
        </motion.div>
      )}
      {/* Decorative bottom line */}
      <div className={`absolute left-0 right-0 bottom-0 h-1 ${item.color} rounded-b-2xl opacity-30`}></div>
    </motion.div>
  );
}

export default function SchedulePage() {
  return (
    <>
      <NavbarPage />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-violet-900/30 py-12 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden overflow-y-auto">
        {/* Glowing decorations */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-600 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        {/* Timeline Progress Indicator */}
        <div className="flex items-center justify-center mb-12">
          <div className="relative w-full max-w-2xl h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, delay: 0.5 }}
              className="absolute left-0 top-0 h-2 bg-gradient-to-r from-violet-500 via-amber-400 to-emerald-400 rounded-full shadow-lg"
              style={{ zIndex: 2 }}
            />
          </div>
        </div>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Hackathon <span className="text-violet-300">Schedule</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-violet-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Important dates and stages for the hackathon competition
          </motion.p>
        </div>
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 via-amber-400 to-emerald-400 opacity-20 -z-10 hidden md:block"></div>
          <div className="space-y-0">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
        {/* Hackathon Format Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 bg-gray-800/30 border border-gray-700 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <GiProgression className="text-violet-400 mr-3" />
            Hackathon Format
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-violet-300 mb-3">Duration & Structure</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <span><strong>24 hours</strong> of continuous development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  Teams must articulate a real-world problem, its impact, and propose an innovative solution
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-violet-300 mb-3">Competition Phases</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <strong>Round 1:</strong> Online Submission
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <strong>Round 2:</strong> Evaluation by Judges
                </li>
                <li className="flex items-start">
                  <span className="text-violet-400 mr-2">•</span>
                  <strong>Round 3:</strong> Final Assessment by Industry Experts
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
