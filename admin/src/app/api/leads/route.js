import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongoose';
import ExecTeam from '@/models/execTeam';
import ExecTeamLead from '@/models/execTeamLead';

export async function GET(request) {
  await connectToDatabase();
  try {
    const { searchParams } = new URL(request.url);
    const teamId = searchParams.get('teamId');

    let query = {};
    if (teamId) {
      query = { team: teamId };
    }

    const leads = await ExecTeamLead.find(query).populate('team');
    return NextResponse.json(
      { success: true, data: leads },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function POST(request) {
  await connectToDatabase();
  try {
    const body = await request.json();
    
    const team = await ExecTeam.findById(body.team);
    if (!team) {
      return NextResponse.json(
        { success: false, error: "Team not found" },
        { status: 400 }
      );
    }

    const lead = await ExecTeamLead.create(body);
    return NextResponse.json(
      { success: true, data: lead },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
export async function DELETE(request) {
  await connectToDatabase();
  try {
    const { searchParams } = new URL(request.url);
    const leadId = searchParams.get('leadId');

    if (!leadId) {
      return NextResponse.json(
        { success: false, error: "Missing lead ID" },
        { status: 400 }
      );
    }

    const deletedLead = await ExecTeamLead.findByIdAndDelete(leadId);

    if (!deletedLead) {
      return NextResponse.json(
        { success: false, error: "Lead not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: deletedLead },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
