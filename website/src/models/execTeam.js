import mongoose from 'mongoose';

const ExecTeamSchema = new mongoose.Schema({
  exec_team_name: { type: String, required: true, unique: true },
  exec_team_id: { type: String, required: true, unique: true }
});

export default mongoose.models.ExecTeam || mongoose.model('ExecTeam', ExecTeamSchema);
