import connectDb from "@/lib/db";
import Settings from "@/model/settings.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { ownerId } = await req.json();
    if (!ownerId) {
      return NextResponse.json(
        { message: "OwnerId is required" },
        { status: 400 },
      );
    }
    await connectDb();
    const setting = await Settings.findOne({
      ownerId,
    });
    return NextResponse.json(setting);
  } catch (error) {
    console.error("Setting error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
