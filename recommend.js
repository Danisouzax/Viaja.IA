
import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { climate, interests } = req.body;

  try {
    const prompt = `Recomende um destino de viagem para alguém que gosta de clima ${climate} e tem interesse em ${interests}. Seja objetivo, mencione o local e o porquê.`;

    const response = await cohere.generate({
      model: "command",
      prompt,
      max_tokens: 100
    });

    const recommendation = response.generations[0]?.text?.trim();

    res.status(200).json({ recommendation });
  } catch (error) {
    console.error("Erro ao gerar recomendação:", error);
    res.status(500).json({ error: "Erro ao gerar recomendação" });
  }
}
