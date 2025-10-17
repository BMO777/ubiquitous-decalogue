import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function analyzeHandler(req, res) {
  const { action, commandments } = req.body;

  if (!action) {
    return res.status(400).json({ error: "Action is required" });
  }

  const prompt = `
You are a biblical ethics advisor. Analyze the following action against each of the Ten Commandments.
For each commandment, determine if the action violates it, explain why, provide relevant biblical reasoning, and offer practical guidance.

Action: "${action}"

Commandments:
${commandments.map(c => `${c.id}. ${c.text} — ${c.keyPoints}`).join('\n')}

Return a JSON array with these fields for each commandment:
{
  "id": number,
  "text": string,
  "violated": boolean,
  "explanation": string,
  "biblicalReasoning": string,
  "guidance": string
}

Also include a top-level field "anyViolated": boolean, and "principleOfLove": string.
`;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a wise Christian theologian and ethicist." },
        { role: "user", content: prompt }
      ],
      temperature: 0.3,
      max_tokens: 1500,
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(completion.data.choices[0].message.content);
    res.status(200).json(result);

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: "Failed to analyze action" });
  }
}