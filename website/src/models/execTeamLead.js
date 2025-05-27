import mongoose from 'mongoose';

const ExecTeamLeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo_url: { type: String, required: true },
  linkedin_url: { type: String },
  pno: { type: String },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'ExecTeam', required: true }
});

export default mongoose.models.ExecTeamLead || mongoose.model('ExecTeamLead', ExecTeamLeadSchema);
