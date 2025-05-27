import mongoose from 'mongoose';

const ExecTeamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo_url: { type: String, required: true },
  linkedin_url: { type: String },
  pno: { type: String },
  rank: { type: Number, default: 0 },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'ExecTeam', required: true }
});

export default mongoose.models.ExecTeamMember || mongoose.model('ExecTeamMember', ExecTeamMemberSchema);
