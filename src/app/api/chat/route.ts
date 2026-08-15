import { buildSupportPrompt } from "@/lib/ai/supportPrompt";
import connectDb from "@/lib/db";
import Settings from "@/model/settings.model";
import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(req: NextRequest) {
  try {
    await connectDb();

    const { message, ownerId } = await req.json();

    if (!message || !ownerId) {
      return NextResponse.json(
        {
          message: "message and ownerId is required",
        },
        {
          status: 400,
          headers: corsHeaders,
        },
      );
    }

    const setting = await Settings.findOne({ ownerId });

    if (!setting) {
      return NextResponse.json(
        {
          message: "Chat bot is not configured yet.",
        },
        {
          status: 400,
          headers: corsHeaders,
        },
      );
    }

    const prompt = buildSupportPrompt({
      businessName: setting.businessName || "this business",
      supportEmail: setting.supportEmail || "",
      knowledge: setting.knowledge || "",
      message,
    });

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          message: "GEMINI_API_KEY is missing.",
        },
        {
          status: 500,
          headers: corsHeaders,
        },
      );
    }

    const ai = new GoogleGenAI({
      apiKey,
    });

    console.log("PROMPT LENGTH:", prompt.length);
    console.log("PROMPT:", prompt);
    
    const res = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    return NextResponse.json(
      {
        response: res.text,
      },
      {
        status: 200,
        headers: corsHeaders,
      },
    );
  } catch (error) {
    console.error("CHAT ERROR:", error);

    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Internal server error",
      },
      {
        status: 500,
        headers: corsHeaders,
      },
    );
  }
}
