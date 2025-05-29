'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import { FiUpload, FiX, FiUser, FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import { motion } from 'framer-motion';

export default function MemberForm({ teamId, isLead = false, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    photo_url: "",
    linkedin_url: "",
    pno: "",
    mail: "",
    rank: "",
    team: teamId || "",
  });
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setFormData((prev) => ({ ...prev, team: teamId || "" }));
  }, [teamId]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setIsUploading(true);
    setError("");
    try {
      const uploadData = new FormData();
      uploadData.append("file", file);

      const res = await axios.post("/api/image-upload", uploadData);
      setFormData((prev) => ({ ...prev, photo_url: res.data.url }));
    } catch (err) {
      setError("Image upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name || !formData.photo_url || !formData.team || !formData.mail) {
      setError("Please fill all required fields (Name, Photo, Email)");
      return;
    }

    try {
      const apiUrl = isLead ? "/api/leads" : "/api/members";
      const payload = { ...formData };
      
      if (isLead) delete payload.rank;

      await axios.post(apiUrl, payload);
      setSuccess(`${isLead ? "Lead" : "Member"} added successfully!`);
      setFormData({
        name: "",
        photo_url: "",
        linkedin_url: "",
        pno: "",
        mail: "",
        rank: "",
        team: teamId || "",
      });
      setTimeout(() => onSuccess?.(), 1500);
    } catch (err) {
      setError(
        err.response?.data?.error ||
        `Failed to add ${isLead ? "lead" : "member"}. Please try again.`
      );
    }
  };

  return (
    <div className="p-6 text-white overflow-y-hidden bg-gradient-to-br from-purple-900 to-black rounded-lg shadow-lg backdrop-blur-sm">
      <div className=" ">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
        >
          {isLead ? "Add Team Lead" : "Add Team Member"}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-purple-200 mt-2"
        >
          {isLead 
            ? "The team lead will manage this group" 
            : "Add a new member to this team"}
        </motion.p>
      </div>

      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-purple-300 mb-2">Full Name *</label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-black bg-opacity-30 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 backdrop-blur-sm"
              placeholder="John Doe"
              required
            />
          </div>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-purple-300 mb-2">Photo *</label>
          {formData.photo_url ? (
            <div className="flex items-center gap-4">
              <img
                src={formData.photo_url}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/50 shadow-md"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setFormData({...formData, photo_url: ""})}
                className="text-pink-400 hover:text-pink-300 flex items-center gap-1 text-sm transition-colors duration-200"
              >
                <FiX /> Change Photo
              </motion.button>
            </div>
          ) : (
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center w-full"
            >
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-purple-500/30 border-dashed rounded-lg cursor-pointer bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-200 backdrop-blur-sm">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FiUpload className="text-purple-400 text-xl mb-2" />
                  <p className="text-sm text-purple-200">
                    {isUploading ? "Uploading..." : "Click to upload a photo"}
                  </p>
                </div>
                <input 
                  type="file" 
                  onChange={handleFileUpload} 
                  disabled={isUploading}
                  accept="image/*"
                  className="hidden" 
                  required
                />
              </label>
            </motion.div>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-purple-300 mb-2">Email *</label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
            <input
              type="email"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-black bg-opacity-30 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 backdrop-blur-sm"
              placeholder="member@company.com"
              required
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-purple-300 mb-2">Phone Number</label>
          <div className="relative">
            <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
            <input
              type="tel"
              name="pno"
              value={formData.pno}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-black bg-opacity-30 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 backdrop-blur-sm"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* LinkedIn URL */}
        <div>
          <label className="block text-sm font-medium text-purple-300 mb-2">LinkedIn Profile</label>
          <div className="relative">
            <FiLinkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
            <input
              type="url"
              name="linkedin_url"
              value={formData.linkedin_url}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-black bg-opacity-30 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 backdrop-blur-sm"
              placeholder="https://linkedin.com/in/username"
            />
          </div>
        </div>

        {/* Rank (Only for members) */}
        {!isLead && (
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-2">Position/Rank</label>
            <input
              type="text"
              name="rank"
              value={formData.rank}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black bg-opacity-30 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 backdrop-blur-sm"
              placeholder="E.g. Senior Developer, Marketing Manager"
            />
          </div>
        )}

        {/* Status Messages */}
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-900/50 text-red-300 p-4 rounded-lg border border-red-500/30 backdrop-blur-sm"
          >
            {error}
          </motion.div>
        )}
        {success && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-900/50 text-green-300 p-4 rounded-lg border border-green-500/30 backdrop-blur-sm"
          >
            {success}
          </motion.div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end gap-3 pt-0.1 ">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => onSuccess()}
            className="px-5 py-2.5 border border-purple-500/50 rounded-lg text-purple-300 hover:bg-purple-900/30 transition-all duration-300 backdrop-blur-sm"
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isUploading}
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 transition-all duration-300 shadow-lg flex items-center gap-2 "
          >
            {isUploading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : `Add ${isLead ? 'Lead' : 'Member'}`}
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}