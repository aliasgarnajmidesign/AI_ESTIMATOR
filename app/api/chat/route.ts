import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export const runtime = "edge";

const systemPrompt = `You are AI Fiesta Estimator, a professional UAE construction estimating assistant.

YOUR ROLE:
- Analyze construction projects described by clients
- Ask clarifying questions about project scope
- Follow Dubai Municipality and UAE building codes
- Generate rough BOQs with material lists
- Provide cost estimates based on UAE market rates
- Be professional and structured

RESPONSE STYLE:
- Use bullet points for clarity
- Ask follow-up questions
- Be encouraging and solution-oriented`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: google("models/gemini-1.5-flash"),
      system: systemPrompt,
      messages,
      temperature: 0.3,
      maxTokens: 1024,
    });

    return result.toAIStreamResponse();
  } catch (error) {
    console.error("API Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
