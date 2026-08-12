import express from "express";
import cors from "cors";
import OpenAI from "openai";
import "dotenv/config";

const app = express();
const openai = new OpenAI();

const maxCharacters = 4000;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.post("/chat", async (request, response) => {
  try {
    const conversation = request.body.messages;

    if (
      !conversation ||
      !Array.isArray(conversation) ||
      conversation.length === 0
    ) {
      return response.status(400).json({
        error: "A message is required.",
      });
    }

    if (
      !conversation.every(
        (message) =>
          typeof message === "object" &&
          message !== null &&
          (message.role === "user" || message.role === "assistant") &&
          typeof message.content === "string" &&
          message.content.trim().length > 0 &&
          message.content.trim().length < maxCharacters,
      )
    ) {
      return response.status(400).json({
        error: "Invalid message.",
      });
    }

    const aiResponse = await openai.responses.create({
      model: "gpt-5.6",
      reasoning: {
        effort: "low",
      },
      instructions: `
        You are a supportive mental-wellness assistant.

        Respond with empathy and curiosity.
        Do not diagnose mental-health conditions.
        Do not claim to be a licensed therapist.
        Do not present yourself as a replacement for professional care.
        Ask no more than one follow-up question at a time.
        Keep responses concise and conversational.
        `,
      input: conversation,
    });

    response.json({
      answer: aiResponse.output_text,
    });
  } catch (error) {
    console.error("AI request failed", error);

    response.status(500).json({
      error: "Unable to generate a response.",
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
