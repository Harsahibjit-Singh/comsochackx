'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import { FiPlus, FiTrash2, FiPhone, FiMail, FiLinkedin, FiUsers, FiUser } from "react-icons/fi";
import { motion } from 'framer-motion';
import Modal from "@/app/component/Modal";
import TeamForm from "@/app/component/TeamForm";
import MemberForm from "@/app/component/MemberForm";
import HeadingComponent from "@/app/component/HeadingComponent";

export default function Home() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [lead, setLead] = useState(null);
  const [members, setMembers] = useState([]);
  const [showTeamForm, setShowTeamForm] = useState(false);
  const [showMemberForm, setShowMemberForm] = useState(false);
  const [isAddingLead, setIsAddingLead] = useState(false);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const res = await axios.get("/api/teams");
      setTeams(res.data.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  const fetchTeamDetails = async (teamId) => {
    try {
      const membersRes = await axios.get(`/api/members?teamId=${teamId}`);
      setMembers(membersRes.data.data);

      const leadRes = await axios.get(`/api/leads?teamId=${teamId}`);
      setLead(leadRes.data.data[0] || null);
    } catch (error) {
      setMembers([]);
      setLead(null);
    }
  };

  const handleDelete = async (type, id) => {
    if (window.confirm(`Are you sure you want to delete this ${type}?`)) {
      try {
        await axios.delete(`/api/${type}s?${type}Id=${id}`);
        if (type === "team") {
          setTeams(teams.filter((t) => t._id !== id));
          setSelectedTeam(null);
        } else if (type === "lead") {
          setLead(null);
        } else if (type === "member") {
          setMembers(members.filter((m) => m._id !== id));
        }
      } catch (error) {
        alert(`Error deleting ${type}`);
      }
    }
  };

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
    fetchTeamDetails(team._id);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-grid-with-lines-17345-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black opacity-90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <HeadingComponent />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Team Management Dashboard</h1>
              <p className="text-purple-200">Organize teams and members for IEEE ComSoc Hackathon 2025</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowTeamForm(true)}
              className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg transition-all duration-300"
            >
              <FiPlus className="text-lg" /> Create New Team
            </motion.button>
          </motion.div>

          {/* Teams Section */}
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-purple-300 mb-6 flex items-center gap-2">
              <FiUsers className="text-purple-400" /> Registered Teams
            </h2>
            
            {teams.length === 0 ? (
              <div className="bg-black bg-opacity-50 rounded-xl shadow-sm p-8 text-center border border-purple-500 border-dashed">
                <p className="text-purple-200 mb-4">No teams have been created yet</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowTeamForm(true)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg inline-flex items-center gap-2 shadow-lg transition-all duration-300"
                >
                  <FiPlus /> Create Your First Team
                </motion.button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teams.map((team) => (
                  <motion.div
                    key={team._id}
                    whileHover={{ y: -5 }}
                    className={`bg-black bg-opacity-50 rounded-xl shadow-sm overflow-hidden border-l-4 backdrop-blur-sm ${selectedTeam?._id === team._id ? 'border-purple-500' : 'border-transparent'} transition-all duration-200 hover:shadow-purple-500/20 cursor-pointer`}
                    onClick={() => handleTeamClick(team)}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{team.exec_team_name}</h3>
                          <p className="text-sm text-purple-200 mt-1">Click to view details</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete("team", team._id);
                          }}
                          className="text-purple-300 hover:text-red-500 transition-colors duration-200"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>

          {/* Team Detail Modal */}
          {selectedTeam && (
            <Modal onClose={() => setSelectedTeam(null)}>
              <div className="space-y-8 text-white">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 px-2 mt-3">
                      {selectedTeam.exec_team_name}
                    </h2>
                    <p className="text-purple-200 px-2">Team ID: {selectedTeam._id}</p>
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setIsAddingLead(false);
                        setShowMemberForm(true);
                      }}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm shadow-lg transition-all duration-300"
                    >
                      <FiPlus /> Add Member
                    </motion.button>
                    {!lead && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setIsAddingLead(true);
                          setShowMemberForm(true);
                        }}
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm shadow-lg transition-all duration-300"
                      >
                        <FiPlus /> Add Lead
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Lead Section */}
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl backdrop-blur-sm border border-purple-500/30">
                  <h3 className="text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2">
                    <FiUser className="text-purple-400" /> Team Lead
                  </h3>
                  {lead ? (
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="relative">
                        <img
                          src={lead.photo_url}
                          alt={lead.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-purple-900/50 shadow-lg"
                        />
                        <span className="absolute -bottom-2 -right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                          LEAD
                        </span>
                      </div>
                      <div className="text-center md:text-left">
                        <h4 className="text-xl font-medium text-white">{lead.name}</h4>
                        <div className="flex gap-4 mt-3 justify-center md:justify-start">
                          {lead.pno && (
                            <motion.a 
                              whileHover={{ y: -2 }}
                              href={`tel:${lead.pno}`} 
                              className="bg-purple-900/50 p-2 rounded-full shadow-sm hover:shadow-purple-500/30 transition-all duration-200"
                              title="Call"
                            >
                              <FiPhone className="text-purple-300" />
                            </motion.a>
                          )}
                          {lead.mail && (
                            <motion.a 
                              whileHover={{ y: -2 }}
                              href={`mailto:${lead.mail}`} 
                              className="bg-purple-900/50 p-2 rounded-full shadow-sm hover:shadow-purple-500/30 transition-all duration-200"
                              title="Email"
                            >
                              <FiMail className="text-purple-300" />
                            </motion.a>
                          )}
                          {lead.linkedin_url && (
                            <motion.a
                              whileHover={{ y: -2 }}
                              href={lead.linkedin_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-purple-900/50 p-2 rounded-full shadow-sm hover:shadow-purple-500/30 transition-all duration-200"
                              title="LinkedIn"
                            >
                              <FiLinkedin className="text-purple-300" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => handleDelete("lead", lead._id)}
                        className="ml-auto text-purple-300 hover:text-red-500 transition-colors duration-200"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  ) : (
                    <div className="bg-black bg-opacity-30 rounded-lg p-4 text-center border border-purple-500/30">
                      <p className="text-purple-200">No team lead assigned yet</p>
                    </div>
                  )}
                </div>

                {/* Members Section */}
                <div>
                  <h3 className="text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2">
                    <FiUsers className="text-purple-400" /> Team Members ({members.length})
                  </h3>
                  {members.length === 0 ? (
                    <div className="bg-black bg-opacity-30 rounded-lg p-6 text-center border border-purple-500/30">
                      <p className="text-purple-200">No members added yet</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {members.map((member) => (
                        <motion.div
                          key={member._id}
                          whileHover={{ y: -3 }}
                          className="bg-black bg-opacity-50 rounded-lg p-4 shadow-sm hover:shadow-purple-500/20 transition-all duration-200 flex items-center justify-between border border-purple-500/20"
                        >
                          <div className="flex items-center gap-4">
                            <img
                              src={member.photo_url}
                              alt={member.name}
                              className="w-14 h-14 rounded-full object-cover border-2 border-purple-900/50"
                            />
                            <div>
                              <h4 className="font-medium text-white">{member.name}</h4>
                              <p className="text-sm text-purple-200">{member.rank}</p>
                              <div className="flex gap-3 mt-2">
                                {member.mail && (
                                  <motion.a 
                                    whileHover={{ y: -2 }}
                                    href={`mailto:${member.mail}`} 
                                    className="text-purple-300 hover:text-white transition-colors duration-200"
                                    title="Email"
                                  >
                                    <FiMail />
                                  </motion.a>
                                )}
                                {member.linkedin_url && (
                                  <motion.a
                                    whileHover={{ y: -2 }}
                                    href={member.linkedin_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-300 hover:text-white transition-colors duration-200"
                                    title="LinkedIn"
                                  >
                                    <FiLinkedin />
                                  </motion.a>
                                )}
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => handleDelete("member", member._id)}
                            className="text-purple-300 hover:text-red-500 transition-colors duration-200"
                          >
                            <FiTrash2 />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Member Form Modal */}
              {showMemberForm && (
                <Modal onClose={() => setShowMemberForm(false)}>
                  <MemberForm
                    teamId={selectedTeam._id}
                    isLead={isAddingLead}
                    onSuccess={() => {
                      fetchTeamDetails(selectedTeam._id);
                      setShowMemberForm(false);
                    }}
                  />
                </Modal>
              )}
            </Modal>
          )}

          {/* Team Form Modal */}
          {showTeamForm && (
            <Modal onClose={() => setShowTeamForm(false)}>
              <TeamForm
                onSuccess={() => {
                  fetchTeams();
                  setShowTeamForm(false);
                }}
              />
            </Modal>
          )}
        </div>
      </div>

      {/* Floating Particles for effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: 0
          }}
          animate={{ 
            x: Math.random() * 100 - 50 + (Math.random() * 200 - 100),
            y: Math.random() * 100 - 50 + (Math.random() * 200 - 100),
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 5
          }}
          className="absolute rounded-full bg-purple-500"
          style={{
            width: Math.random() * 5 + 2 + 'px',
            height: Math.random() * 5 + 2 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ))}
    </div>
  );
}