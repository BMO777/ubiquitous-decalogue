import OpenAI from "openai";

export default async function analyzeHandler(req, res) {
  const { action, commandments } = req.body;

  // Input Validation
  if (!action || typeof action !== 'string' || action.trim().length === 0) {
    return res.status(400).json({ error: "A valid action description is required" });
  }

  if (!Array.isArray(commandments) || commandments.length === 0) {
    return res.status(400).json({ error: "Commandments list is required for analysis" });
  }

  // Validate each commandment object
  const isValidCommandments = commandments.every(c => 
    c.id && c.text && c.keyPoints
  );

  if (!isValidCommandments) {
    return res.status(400).json({ error: "Invalid commandment data format" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    console.error("Missing OPENAI_API_KEY environment variable");
    return res.status(500).json({ error: "AI configuration error: Missing API Key" });
  }

  const openai = new OpenAI({
    apiKey: apiKey,
    timeout: 30000,
  });

  const prompt = `
You are a biblical ethics advisor. Analyze the following situation against each of the Ten Commandments, focusing on the "upstream" heart posture and thought processes rather than just the "downstream" external action.

Situation: "${action}"

Commandments:
${commandments.map(c => `${c.id}. ${c.text} — ${c.keyPoints}`).join('\n')}

For each commandment:
1. Determine if the internal orientation or heart posture violates it.
2. Explain why, focusing on the root intention and thought process.
3. Provide relevant biblical reasoning.
4. Offer practical guidance for renewing the mind.

Return a JSON object with the following structure:
{
  "anyViolated": boolean,
  "principleOfLove": "string (A summary of how this relates to the two great commandments of love, emphasizing upstream transformation)",
  "results": [
    {
      "id": number,
      "text": string,
      "violated": boolean,
      "explanation": string (Start with 'The heart posture...' or 'The underlying thought process...'),
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
        { role: "system", content: "You are a wise Christian theologian and ethicist who understands that all sin begins in the heart and mind." },
        { role: "user", content: prompt }
      ],
      temperature: 0.3,
      max_tokens: 2000,
      response_format: { type: "json_object" }
    });

    const result = JSON.parse(completion.choices[0].message.content);
    res.status(200).json(result);

  } catch (error) {
    console.error("AI Error:", error);
    if (error.name === 'OpenAIConnectionError') {
      return res.status(504).json({ error: "The AI service took too long to respond. Please try again." });
    }
    res.status(500).json({ error: "Failed to analyze action" });
  }
}