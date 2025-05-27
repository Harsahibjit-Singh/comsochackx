import mongoose from 'mongoose';

const ExecTeamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo_url: { type: String, required: true },
  linkedin_url: { type: String },
  pno: { type: String },
  mail: { type: String, required: true },
  rank: { type: String },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'ExecTeam', required: true }
});

export default mongoose.models.ExecTeamMember || mongoose.model('ExecTeamMember', ExecTeamMemberSchema);
