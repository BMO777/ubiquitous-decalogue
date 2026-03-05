import OpenAI from "openai";

export default async function analyzeHandler(req, res) {
  const { action, commandments } = req.body;

  if (!action || typeof action !== 'string' || action.trim().length === 0) {
    return res.status(400).json({ error: "A valid action description is required" });
  }

  if (!Array.isArray(commandments) || commandments.length === 0) {
    return res.status(400).json({ error: "Commandments list is required for analysis" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ error: "AI configuration error: Missing API Key" });
  }

  const openai = new OpenAI({ apiKey });

  const prompt = `
Analyze the following situation against each of the Ten Commandments. You must be rigorous and uncompromising in identifying violations of the heart and mind. Remember that all sin begins "upstream" in the thoughts and intentions.

Situation: "${action}"

Commandments:
${commandments.map(c => `${c.id}. ${c.text} — ${c.keyPoints}`).join('\n')}

For each commandment:
1. Determine if the internal orientation, heart posture, or thought process violates the spirit of the commandment.
2. Be specific about the root intention (e.g., pride, greed, selfishness, lack of trust in God).
3. Provide relevant biblical reasoning.
4. Offer practical guidance for renewing the mind.

CRITICAL: If the action involves lying, deception, or misrepresentation, it MUST be flagged as a violation of the 9th commandment. If it involves work or worldly focus during Sabbath hours (Friday sundown to Saturday sundown), it MUST be flagged as a violation of the 4th commandment unless it is clearly an act of mercy or necessity.

Return a JSON object:
{
  "anyViolated": boolean,
  "principleOfLove": "string (Summary of how this relates to the two great commandments, emphasizing upstream transformation)",
  "results": [
    {
      "id": number,
      "text": string,
      "violated": boolean,
      "explanation": string,
      "biblicalReasoning": string,
      "guidance": string
    }
  ]
}
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a rigorous biblical ethicist. You understand that God's law is broad and reaches the thoughts and intents of the heart. You do not overlook subtle violations of the spirit of the law." },
        { role: "user", content: prompt }
      ],
      temperature: 0.2,
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(completion.choices[0].message.content);
    res.status(200).json(result);
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: "Failed to analyze action" });
  }
}