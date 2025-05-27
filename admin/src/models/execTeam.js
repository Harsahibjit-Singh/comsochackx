import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';

const ExecTeamSchema = new mongoose.Schema({
  exec_team_id: { 
    type: String, 
    default: () => uuidv4(), // Auto-generate UUID
    unique: true 
  },
  exec_team_name: { type: String, required: true, unique: true }
});

export default mongoose.models.ExecTeam || mongoose.model('ExecTeam', ExecTeamSchema);
