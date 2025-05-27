"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FiUpload, FiX } from "react-icons/fi";

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
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {isLead ? "Add Team Lead" : "Add Team Member"}
        </h2>
        <p className="text-gray-600 mt-1">
          {isLead 
            ? "The team lead will manage this group" 
            : "Add a new member to this team"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Photo *</label>
          {formData.photo_url ? (
            <div className="flex items-center gap-4">
              <img
                src={formData.photo_url}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              />
              <button
                type="button"
                onClick={() => setFormData({...formData, photo_url: ""})}
                className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm"
              >
                <FiX /> Change Photo
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FiUpload className="text-gray-400 text-xl mb-2" />
                  <p className="text-sm text-gray-500">
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
            </div>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="member@company.com"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            name="pno"
            value={formData.pno}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* LinkedIn URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
          <input
            type="url"
            name="linkedin_url"
            value={formData.linkedin_url}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="https://linkedin.com/in/username"
          />
        </div>

        {/* Rank (Only for members) */}
        {!isLead && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Position/Rank</label>
            <input
              type="text"
              name="rank"
              value={formData.rank}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="E.g. Senior Developer, Marketing Manager"
            />
          </div>
        )}

        {/* Status Messages */}
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm">
            {success}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => onSuccess()}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isUploading}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors duration-200 flex items-center gap-2"
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
          </button>
        </div>
      </form>
    </div>
  );
}