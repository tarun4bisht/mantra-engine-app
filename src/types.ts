export type RoutingStrategy =
  | "auto"
  | "gemini"
  | "openai"
  | "gemini-first"
  | "openai-first";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
}

export interface StreamCallbacks {
  onChunk: (text: string) => void;
  onDone: (modelUsed: string) => void;
  onError: (err: unknown) => void;
}

export interface ChatRequest {
  messages: ChatMessage[];
  systemPrompt: string;
  strategy: RoutingStrategy;
  geminiModel: string;
  openaiModel: string;
}

export interface ImageGenerationRequest {
  prompt: string;
}

export interface ImageGenerationResponse {
  imageUrl: string;
  model: "gemini";
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ModelDetectionResult {
  model: "gemini" | "openai";
  confidence: number;
  signals: string[];
}
