
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export const getCarConsultation = async (history: {role: 'user' | 'model', text: string}[]) => {
  // Use a new instance with the API key directly from the environment to ensure it's up to date
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = "gemini-3-flash-preview";
  
  // Convert history to format expected by API (contents)
  const contents = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }]
  }));

  try {
    // Call generateContent using the correct SDK pattern
    const response: GenerateContentResponse = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: `You are Motra, a sophisticated AI Concierge for high-end luxury crossover and SUV trading. 
        Your tone is professional, exclusive, and highly knowledgeable about brands like Bentley, Lamborghini, Land Rover, Porsche, BMW, and Rolls Royce.
        You help clients find their perfect vehicle based on lifestyle, performance needs, and aesthetic preferences.
        Keep responses concise and elegant. Refer to the current luxury market trends frequently.`,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    // Access the text property directly from the response object
    return response.text || "I apologize, I am momentarily unable to assist. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The concierge is currently attending to another client. Please refresh.";
  }
};