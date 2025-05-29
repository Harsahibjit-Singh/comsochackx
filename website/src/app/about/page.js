'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import NavbarPage from '../components/Navbar';
import Footer from '../components/footer';

export default function AboutPage() {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white">
          <NavbarPage />

          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')]"></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-200"
              >
                About <span className="text-white">ComSoc HackX</span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-3xl"
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                  ComSoc HackX is an innovation-driven hackathon organized under the auspices of 
                  IEEE and its Communications Society, bringing together the brightest minds to 
                  solve real-world challenges through technology.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="px-6 py-3 bg-violet-900/50 backdrop-blur-sm rounded-full border border-violet-700/50">
                    <span className="flex items-center">
                      <span className="mr-2">⏳</span> 36 Hours
                    </span>
                  </div>
                  <div className="px-6 py-3 bg-violet-900/50 backdrop-blur-sm rounded-full border border-violet-700/50">
                    <span className="flex items-center">
                      <span className="mr-2">👥</span> Team-based
                    </span>
                  </div>
                  <div className="px-6 py-3 bg-violet-900/50 backdrop-blur-sm rounded-full border border-violet-700/50">
                    <span className="flex items-center">
                      <span className="mr-2">🏆</span> ₹50,000 Prizes
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* IEEE Overview Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-900/10 to-purple-900/10">
            <div className="max-w-7xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-200">IEEE CUSB</span>
              </motion.h2>
              
              <div className="flex flex-col lg:flex-row items-center gap-12">
             <div className="lg:w-1/2">
  <p className="text-gray-300 mb-6 leading-relaxed">
    <span className="text-purple-300 font-semibold">IEEE Chandigarh University Student Branch</span> has secured First Place at the IEEE India Council out of 1200+ student branches.
  </p>
  <div className="space-y-4 mb-8">
    <div className="flex items-start">
      <div className="text-purple-400 mr-3 mt-1">•</div>
      <p className="text-gray-300">One of the <span className="font-semibold">most active branches worldwide</span> under the Delhi Section</p>
    </div>
    <div className="flex items-start">
      <div className="text-purple-400 mr-3 mt-1">•</div>
      <p className="text-gray-300">Frequently organizes <span className="font-semibold">sessions and expert talks</span></p>
    </div>
    <div className="flex items-start">
      <div className="text-purple-400 mr-3 mt-1">•</div>
      <p className="text-gray-300">Hosts numerous <span className="font-semibold">events and workshops</span></p>
    </div>
    <div className="flex items-start">
      <div className="text-purple-400 mr-3 mt-1">•</div>
      <p className="text-gray-300">Dedicated to <span className="font-semibold">grooming students</span> for future challenges</p>
    </div>
  </div>
  <p className="text-gray-300 leading-relaxed">
    Our student branch is committed to preparing students for the future through technological innovation and professional development.
  </p>
</div>
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl border border-violet-700/30 p-8 backdrop-blur-sm">
                    <Image 
                      src="/ieeeImage.png" // Replace with IEEE logo path
                      alt="IEEE Logo"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* IEEE ComSoc Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
              >
                About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-200">IEEE Communications Society</span>
              </motion.h2>
              
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 order-2 lg:order-1">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    The <span className="text-purple-300 font-semibold">IEEE Communications Society (ComSoc)</span> is one of IEEE's premier technical societies focused on advancing communications technology. With over 30,000 members worldwide, ComSoc:
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="text-purple-400 mr-3 mt-1">•</div>
                      <p className="text-gray-300">Leads innovation in <span className="font-semibold">5G/6G, IoT, and network security</span></p>
                    </div>
                    <div className="flex items-start">
                      <div className="text-purple-400 mr-3 mt-1">•</div>
                      <p className="text-gray-300">Publishes <span className="font-semibold">top-tier journals</span> and conference proceedings</p>
                    </div>
                    <div className="flex items-start">
                      <div className="text-purple-400 mr-3 mt-1">•</div>
                      <p className="text-gray-300">Develops <span className="font-semibold">communications standards</span></p>
                    </div>
                    <div className="flex items-start">
                      <div className="text-purple-400 mr-3 mt-1">•</div>
                      <p className="text-gray-300">Supports <span className="font-semibold">student chapters</span> worldwide</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    ComSoc provides platforms for professionals and students to collaborate on advancing communications technologies that connect the world.
                  </p>
                </div>
                <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
                  <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl border border-violet-700/30 p-8 backdrop-blur-sm">
                    <Image 
                      src="/image1.png" // Replace with ComSoc logo path
                      alt="IEEE ComSoc Logo"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>


      {/* Mission/Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-200">Mission & Vision</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-violet-900/30 hover:border-violet-500/50 transition-all"
            >
              <div className="text-5xl mb-4 text-purple-400">🌌</div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To create a platform where innovative minds converge to transform ideas into 
                technological solutions that address pressing global challenges, fostering 
                a culture of creativity and technical excellence in alignment with IEEE's mission.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-violet-900/30 hover:border-violet-500/50 transition-all"
            >
              <div className="text-5xl mb-4 text-purple-400">🚀</div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Empower participants through intensive 36-hour collaboration, providing 
                mentorship, resources, and a competitive environment to develop 
                cutting-edge solutions while promoting IEEE's standards of technological 
                innovation and professional development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/10 to-violet-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Meet The <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-200">Organizers</span>
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizers.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-violet-900/30 hover:border-violet-500/50 transition-all"
              >
                <div className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-violet-500/30">
                    <Image 
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-1">{person.name}</h3>
                  <p className="text-purple-300 text-center mb-4">{person.role}</p>
                  <p className="text-gray-300 text-center text-sm">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IEEE ComSoc Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-200">IEEE ComSoc</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The IEEE Communications Society (ComSoc) is a global community of engineers, 
                practitioners, and academics working together to advance communications 
                and networking technologies. As one of IEEE's largest technical societies, 
                ComSoc focuses on:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-purple-400 mr-3 mt-1">•</div>
                  <p className="text-gray-300">Advancing communications technology through conferences, publications, and standards</p>
                </div>
                <div className="flex items-start">
                  <div className="text-purple-400 mr-3 mt-1">•</div>
                  <p className="text-gray-300">Fostering professional development and networking opportunities</p>
                </div>
                <div className="flex items-start">
                  <div className="text-purple-400 mr-3 mt-1">•</div>
                  <p className="text-gray-300">Supporting student activities and technical education</p>
                </div>
                <div className="flex items-start">
                  <div className="text-purple-400 mr-3 mt-1">•</div>
                  <p className="text-gray-300">Promoting innovation in 5G/6G, IoT, AI/ML for communications, and more</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl border border-violet-700/30 p-8 backdrop-blur-sm">
                <Image 
                  src="/image1.png" // Replace with ComSoc logo path
                  alt="IEEE ComSoc Logo"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}

const organizers = [
  {
    name: "Dr. Jane Smith",
    role: "Faculty Advisor",
    bio: "Professor of Computer Science with 15+ years of experience in organizing tech events.",
    image: "/organizer1.jpg"
  },
  {
    name: "John Doe",
    role: "Student Chair",
    bio: "Final year CS student passionate about creating impactful tech communities.",
    image: "/organizer2.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "Technical Lead",
    bio: "Software engineer specializing in hackathon mentorship and judging.",
    image: "/organizer3.jpg"
  },
  {
    name: "Michael Chen",
    role: "Logistics Head",
    bio: "Event management expert with focus on creating seamless participant experiences.",
    image: "/organizer4.jpg"
  },
  {
    name: "Emily Wilson",
    role: "Marketing Lead",
    bio: "Digital marketing specialist driving engagement for tech events.",
    image: "/organizer5.jpg"
  },
  {
    name: "David Kim",
    role: "Sponsorship Coordinator",
    bio: "Connecting industry partners with student innovation initiatives.",
    image: "/organizer6.jpg"
  }
];