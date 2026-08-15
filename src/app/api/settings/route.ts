import connectDb from "@/lib/db";
import { settingsSchema } from "@/lib/validations/settings";
import Settings from "@/model/settings.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = settingsSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          message: "Validation failed",
          errors: result.error.flatten().fieldErrors,
        },
        {
          status: 400,
        },
      );
    }
    const { ownerId, businessName, supportEmail, knowledge } = result.data;
    await connectDb();

    const settings = await Settings.findOneAndUpdate(
      { ownerId },
      {
        businessName,
        supportEmail,
        knowledge,
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      },
    );
    return NextResponse.json(settings);
  } catch (error) {
    console.error("Setting error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
