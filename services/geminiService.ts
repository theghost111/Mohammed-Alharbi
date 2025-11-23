import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
أنت خبير قهوة مساعد (باريستا ذكي) لمحمصة "Void Roastery" (فويد).
دورك هو مساعدة العملاء في اختيار القهوة المناسبة لهم، شرح أدوات التحضير، وتقديم نصائح.
تحدث باللغة العربية بلهجة ودية واحترافية (أسلوب منصات التجارة السعودية مثل زد).
الأسعار لدينا بالريال السعودي (ر.س).
اجعل إجاباتك مختصرة ومفيدة (أقل من 100 كلمة).
إذا سألك العميل عن توصية، اسأله عن طريقة التحضير المفضلة لديه (اسبريسو، مقطرة، إلخ) أو نوع الطعم الذي يحبه (فاكهي، مكسرات، إلخ).
`;

export const getCoffeeAdvice = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
    
    return response.text || "عذراً، لم أتمكن من الرد في الوقت الحالي.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "حدث خطأ أثناء الاتصال بالخادم. يرجى المحاولة لاحقاً.";
  }
};
