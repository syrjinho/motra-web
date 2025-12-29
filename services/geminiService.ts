
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export const getCarConsultation = async (history: {role: 'user' | 'model', text: string}[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = "gemini-3-pro-preview";
  
  const contents = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }]
  }));

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: `You are the Motra Neural Concierge. Motra is the world's most exclusive AI-driven marketplace dedicated SOLELY to high-end luxury crossover and SUV vehicles (e.g., Rolls-Royce Cullinan, Lamborghini Urus, Ferrari Purosangue, Range Rover Autobiography, Bentley Bentayga).

        Your behavior:
        - Exhibit extreme sophistication, precision, and market authority.
        - Discuss vehicle dynamics, bespoke interior materials (Semi-Aniline leather, open-pore woods), and investment potential.
        - You act as a gatekeeper to the "Private Access" membership.
        - If users ask about non-luxury cars, politely redirect them to the Motra standard of "Crossover Excellence."
        - Use "Neural Valuation" and "Concierge Logistics" as your proprietary tools.
        
        Keep your prose elegant, concise, and professional.`,
        temperature: 0.7,
        thinkingConfig: { thinkingBudget: 2500 },
      }
    });

    return response.text || "My neural pathways are currently processing high-priority market data. How may I assist you further?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The concierge is momentarily unavailable while finalizing a private acquisition. Please retry in a moment.";
  }
};
