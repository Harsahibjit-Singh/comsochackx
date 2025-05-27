import connectToDatabase from '@/app/lib/mongoose';
import ExecTeam from '@/models/execTeam';

export async function GET(req) {
  await connectToDatabase();
  try {
    const teams = await ExecTeam.find({});
    return new Response(JSON.stringify({ success: true, data: teams }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function POST(req) {
  await connectToDatabase();
  try {
    const body = await req.json();
    
    if (!body.exec_team_name?.trim()) {
      return new Response(JSON.stringify({
        success: false,
        error: "exec_team_name is required"
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const team = await ExecTeam.create(body);
    return new Response(JSON.stringify({ success: true, data: team }), { 
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function DELETE(req) {
  await connectToDatabase();
  try {
    const teamId = new URL(req.url).searchParams.get("teamId");
    
    if (!teamId) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: "Missing teamId parameter" 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const team = await ExecTeam.findByIdAndDelete(teamId);
    
    if (!team) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Team not found' 
      }), { 
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response(JSON.stringify({ success: true, data: team }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
