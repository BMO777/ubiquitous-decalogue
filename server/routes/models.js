import OpenAI from "openai";

export default async function modelsHandler(req, res) {
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ error: "Missing API Key" });
  }

  const openai = new OpenAI({ apiKey });

  try {
    const list = await openai.models.list();
    
    // Filter for relevant chat models and sort them to put the latest/best first
    const relevantModels = list.data
      .filter(model => 
        model.id.startsWith('gpt-4o') || 
        model.id.startsWith('o1') ||
        model.id === 'gpt-4-turbo'
      )
      .map(model => ({
        id: model.id,
        name: model.id
          .replace('gpt-4o', 'GPT-4o')
          .replace('gpt-4-turbo', 'GPT-4 Turbo')
          .replace('o1', 'o1')
          .replace('-mini', ' Mini')
          .replace('-preview', ' Preview')
      }))
      .sort((a, b) => {
        // Prioritize gpt-4o as the default flagship
        if (a.id === 'gpt-4o') return -1;
        if (b.id === 'gpt-4o') return 1;
        return a.id.localeCompare(b.id);
      });

    res.status(200).json(relevantModels);
  } catch (error) {
    console.error("Error fetching models:", error);
    // Fallback to a sensible default list if the API call fails
    res.status(200).json([
      { id: "gpt-4o", name: "GPT-4o (Latest Flagship)" },
      { id: "gpt-4o-mini", name: "GPT-4o Mini (Fast & Efficient)" },
      { id: "o1", name: "o1 (Advanced Reasoning)" },
      { id: "o1-mini", name: "o1 Mini (Fast Reasoning)" }
    ]);
  }
}