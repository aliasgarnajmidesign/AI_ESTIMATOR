"use client";

import { useChat } from "ai/react";
import { Send, Bot, User, Paperclip, Home } from "lucide-react";
import { useRef, useEffect } from "react";
import Link from "next/link";

export default function EstimatorChat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  });
  const formRef = useRef<HTMLFormElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-[#F5F5F7]">
      {/* Header */}
      <header className="p-6 bg-white border-b border-gray-200 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Fiesta Machine 🏗️</h1>
          <p className="text-sm text-gray-500 mt-1">UAE Construction Estimator</p>
        </div>
        <Link href="/" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Home size={24} className="text-gray-600" />
        </Link>
      </header>

      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center bg-white border border-gray-200 shadow-sm rounded-2xl p-8">
              <Bot size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-lg font-semibold text-gray-900 mb-2">Welcome to AI Fiesta Estimator</p>
              <p className="text-sm text-gray-600 mb-4">
                Describe your construction project and I'll help you estimate costs, materials, and timeline for UAE market standards.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left text-sm text-gray-700">
                <p className="font-semibold text-gray-900 mb-2">Try asking:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>"3BR villa in Dubai, G+1, plot 40x60 ft, medium finish"</li>
                  <li>"2BR apartment in Sharjah, high-end finishes, 1200 sqft"</li>
                  <li>"Commercial office space, 5000 sqft, Dubai"</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {messages.map((m) => (
          <div key={m.id} className={`flex $${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[75%] p-4 rounded-2xl $${
                m.role === "user"
                  ? "bg-black text-white rounded-br-none"
                  : "bg-white text-gray-900 shadow-sm border border-gray-200 rounded-bl-none"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {m.role === "user" ? (
                  <User size={16} className="flex-shrink-0" />
                ) : (
                  <Bot size={16} className="flex-shrink-0" />
                )}
                <span className="text-[11px] uppercase tracking-widest opacity-70 font-bold">
                  {m.role === "user" ? "You" : "AI Estimator"}
                </span>
              </div>
              <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-900 shadow-sm border border-gray-200 p-4 rounded-2xl rounded-bl-none">
              <div className="flex items-center gap-2">
                <Bot size={16} />
                <span className="text-[11px] uppercase tracking-widest opacity-70 font-bold">AI Estimator</span>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-gray-200">
        <form
          ref={formRef}
          onSubmit={(e) => {
            handleSubmit(e);
            formRef.current?.reset();
          }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative flex gap-3">
            <button
              type="button"
              className="p-3 text-gray-400 hover:text-gray-600 transition-colors"
              title="File upload coming soon"
            >
              <Paperclip size={20} />
            </button>
            <input
              className="w-full p-4 pr-14 rounded-xl bg-[#F5F5F7] border border-gray-300 focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-10 outline-none text-sm placeholder-gray-500"
              value={input}
              onChange={handleInputChange}
              placeholder="Describe your project (e.g., '3BR villa, Dubai, G+1, 2500 sqft, medium finish')..."
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-black text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
        <p className="text-center text-[11px] text-gray-400 mt-4 uppercase tracking-tight font-medium">
          🚀 AI-Powered Construction Estimator for UAE Market | Free Development Version
        </p>
      </div>
    </div>
  );
}
