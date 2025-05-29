'use client';
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function TeamForm({ onSuccess }) {
  const [teamName, setTeamName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!teamName.trim()) {
      setError('Team name is required');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('/api/teams', {
        exec_team_name: teamName
      });
      
      if (response.data.success) {
        onSuccess();
        setTeamName('');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create team');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 text-white">
      <div className="mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
        >
          Create New Team
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-purple-200 mt-2"
        >
          Organize your team members under a new group
        </motion.p>
      </div>
      
      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <label className="block text-sm font-medium text-purple-300 mb-2">Team Name *</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full px-4 py-3 bg-black bg-opacity-30 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 backdrop-blur-sm"
            placeholder="Marketing Team, Engineering, etc."
            required
          />
        </div>
        
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-900/50 text-red-300 p-4 rounded-lg border border-red-500/30 backdrop-blur-sm"
          >
            {error}
          </motion.div>
        )}
        
        <div className="flex justify-end gap-3 pt-4">
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
            disabled={loading}
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating...
              </>
            ) : 'Create Team'}
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}