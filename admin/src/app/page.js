"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FiPlus, FiTrash2, FiPhone, FiMail, FiLinkedin, FiUsers, FiUser } from "react-icons/fi";
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
    <div className="min-h-screen bg-gray-50">
      <HeadingComponent />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Team Management</h1>
            <p className="text-gray-600 mt-2">Organize your teams and members efficiently</p>
          </div>
          <button
            onClick={() => setShowTeamForm(true)}
            className="mt-4 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md transition-colors duration-200"
          >
            <FiPlus className="text-lg" /> Create New Team
          </button>
        </div>

        {/* Teams Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <FiUsers className="text-indigo-500" /> Your Teams
          </h2>
          
          {teams.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <p className="text-gray-500 mb-4">You haven&apos;t created any teams yet</p>
              <button
                onClick={() => setShowTeamForm(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg inline-flex items-center gap-2"
              >
                <FiPlus /> Create Your First Team
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map((team) => (
                <div
                  key={team._id}
                  className={`bg-white rounded-xl shadow-sm overflow-hidden border-l-4 ${selectedTeam?._id === team._id ? 'border-indigo-500' : 'border-transparent'} transition-all duration-200 hover:shadow-md cursor-pointer`}
                  onClick={() => handleTeamClick(team)}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{team.exec_team_name}</h3>
                        <p className="text-sm text-gray-500 mt-1">Click to view details</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete("team", team._id);
                        }}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Team Detail Modal */}
        {selectedTeam && (
          <Modal onClose={() => setSelectedTeam(null)}>
            <div className="space-y-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedTeam.exec_team_name}</h2>
                  <p className="text-gray-600">Team ID: {selectedTeam._id}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setIsAddingLead(false);
                      setShowMemberForm(true);
                    }}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                  >
                    <FiPlus /> Add Member
                  </button>
                  {!lead && (
                    <button
                      onClick={() => {
                        setIsAddingLead(true);
                        setShowMemberForm(true);
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                    >
                      <FiPlus /> Add Lead
                    </button>
                  )}
                </div>
              </div>

              {/* Lead Section */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FiUser className="text-indigo-500" /> Team Lead
                </h3>
                {lead ? (
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative">
                      <img
                        src={lead.photo_url}
                        alt={lead.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                      />
                      <span className="absolute -bottom-2 -right-2 bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        LEAD
                      </span>
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-xl font-medium text-gray-900">{lead.name}</h4>
                      <div className="flex gap-4 mt-3 justify-center md:justify-start">
                        {lead.pno && (
                          <a 
                            href={`tel:${lead.pno}`} 
                            className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                            title="Call"
                          >
                            <FiPhone className="text-indigo-600" />
                          </a>
                        )}
                        {lead.mail && (
                          <a 
                            href={`mailto:${lead.mail}`} 
                            className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                            title="Email"
                          >
                            <FiMail className="text-indigo-600" />
                          </a>
                        )}
                        {lead.linkedin_url && (
                          <a
                            href={lead.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                            title="LinkedIn"
                          >
                            <FiLinkedin className="text-indigo-600" />
                          </a>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete("lead", lead._id)}
                      className="ml-auto text-gray-400 hover:text-red-500 transition-colors duration-200"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-gray-500">No team lead assigned yet</p>
                  </div>
                )}
              </div>

              {/* Members Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FiUsers className="text-indigo-500" /> Team Members ({members.length})
                </h3>
                {members.length === 0 ? (
                  <div className="bg-white rounded-lg p-6 text-center">
                    <p className="text-gray-500">No members added yet</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {members.map((member) => (
                      <div
                        key={member._id}
                        className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={member.photo_url}
                            alt={member.name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
                          />
                          <div>
                            <h4 className="font-medium text-gray-900">{member.name}</h4>
                            <p className="text-sm text-gray-600">{member.rank}</p>
                            <div className="flex gap-3 mt-2">
                              {member.mail && (
                                <a 
                                  href={`mailto:${member.mail}`} 
                                  className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                                  title="Email"
                                >
                                  <FiMail />
                                </a>
                              )}
                              {member.linkedin_url && (
                                <a
                                  href={member.linkedin_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                                  title="LinkedIn"
                                >
                                  <FiLinkedin />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDelete("member", member._id)}
                          className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
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
  );
}
