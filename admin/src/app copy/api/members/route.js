import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongoose';
import ExecTeam from '@/models/execTeam';
import ExecTeamMember from '@/models/execTeamMember';

export async function GET(request) {
  await connectToDatabase();
  try {
    const { searchParams } = new URL(request.url);
    const teamId = searchParams.get('teamId');
    
    let query = {};
    if (teamId) {
      query = { team: teamId };
    }
    
    const members = await ExecTeamMember.find(query)
      .populate('team');
      
    return NextResponse.json(
      { success: true, data: members },
      { status: 200 }
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
    
    const member = await ExecTeamMember.create(body);
    return NextResponse.json(
      { success: true, data: member },
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
    const memberId = searchParams.get('memberId');

    if (!memberId) {
      return NextResponse.json(
        { success: false, error: "Missing member ID" },
        { status: 400 }
      );
    }

    const deletedMember = await ExecTeamMember.findByIdAndDelete(memberId);
    
    if (!deletedMember) {
      return NextResponse.json(
        { success: false, error: "Member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: deletedMember },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
