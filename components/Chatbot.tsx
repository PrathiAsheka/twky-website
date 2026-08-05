"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import {
  findAnswer,
  FALLBACK_ANSWER,
  SUGGESTED_QUESTIONS,
} from "@/lib/chatbotKnowledge";

interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
  link?: { label: string; href: string };
}

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "bot",
  text: "Hi! I'm the TWKY assistant. Ask me about our services, process, pricing, or case studies.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const idCounterRef = useRef(0);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const nextId = (prefix: "u" | "b") => {
    idCounterRef.current += 1;
    return `${prefix}-${idCounterRef.current}`;
  };

  const handleAsk = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;

    const match = findAnswer(trimmed);
    const userMessage: ChatMessage = {
      id: nextId("u"),
      role: "user",
      text: trimmed,
    };
    const botMessage: ChatMessage = match
      ? {
          id: nextId("b"),
          role: "bot",
          text: match.answer,
          link: match.link,
        }
      : {
          id: nextId("b"),
          role: "bot",
          text: FALLBACK_ANSWER,
          link: { label: "Contact Us", href: "/contact" },
        };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAsk(input);
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-[0_10px_40px_rgba(255,255,255,0.2)] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-4 z-40 flex h-[520px] w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_20px_60px_rgba(0,0,0,0.6)] sm:bottom-24 sm:right-6 sm:max-w-[calc(100vw-3rem)]"
          >
            <div className="border-b border-line px-5 py-4">
              <p className="text-sm font-bold text-white">TWKY Assistant</p>
              <p className="mt-0.5 text-xs text-white/50">
                Ask about services, process, or case studies
              </p>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-white text-black"
                        : "border border-line bg-black text-white/80"
                    }`}
                  >
                    {message.text}
                    {message.link && (
                      <Link
                        href={message.link.href}
                        className="mt-2 block text-xs font-semibold uppercase tracking-wide text-white underline underline-offset-2"
                      >
                        {message.link.label} →
                      </Link>
                    )}
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {SUGGESTED_QUESTIONS.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => handleAsk(question)}
                      className="rounded-full border border-line px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-white hover:text-white"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-line p-3"
            >
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question..."
                aria-label="Ask a question"
                className="flex-1 bg-transparent px-2 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
