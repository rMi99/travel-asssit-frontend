"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Send, X } from "lucide-react"

export default function ChatBot() {
  const [input, setInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const chatBodyRef = useRef<HTMLDivElement>(null)

  const appendMessage = (sender: string, message: string, isBot = false) => {
    if (!chatBodyRef.current) return

    const msgDiv = document.createElement("div")
    msgDiv.className = `message ${isBot ? "bot-message" : "user-message"}`
    msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`
    chatBodyRef.current.appendChild(msgDiv)
    chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
  }

  const addFeedbackButtons = (botMsgText: string) => {
    if (!chatBodyRef.current) return

    const msgDiv = document.createElement("div")
    msgDiv.className = "message bot-message"
    msgDiv.innerHTML = `<strong>Bot:</strong> ${botMsgText}`

    const feedback = document.createElement("div")
    feedback.className = "feedback-buttons"

    const yesBtn = document.createElement("button")
    yesBtn.textContent = "👍 Helpful"
    yesBtn.className = "helpful"
    yesBtn.onclick = () => {
      sendFeedback(botMsgText, true)
      feedback.innerHTML = '<span class="feedback-thanks">Thanks for your feedback!</span>'
    }

    const noBtn = document.createElement("button")
    noBtn.textContent = "👎 Not Helpful"
    noBtn.className = "not-helpful"
    noBtn.onclick = () => {
      sendFeedback(botMsgText, false)
      feedback.innerHTML = '<span class="feedback-thanks">Thanks for your feedback!</span>'
    }

    feedback.appendChild(yesBtn)
    feedback.appendChild(noBtn)
    msgDiv.appendChild(feedback)
    chatBodyRef.current.appendChild(msgDiv)
    chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
  }

  const sendFeedback = (message: string, helpful: boolean) => {
    // Note: The backend doesn't have a /feedback endpoint yet
    console.log(`Feedback for message "${message}": ${helpful ? "Helpful" : "Not helpful"}`)

    // Uncomment this when the feedback endpoint is implemented on the backend
    // try {
    //   fetch(`http://192.168.8.105:5000/feedback?msg=${encodeURIComponent(message)}&helpful=${helpful}`)
    //     .then(() => console.log("Feedback sent successfully"))
    //     .catch((err) => console.error("Error sending feedback:", err))
    // } catch (error) {
    //   console.error("Error sending feedback:", error)
    // }
  }

  const sendMessage = async () => {
    if (!input.trim() || !chatBodyRef.current) return

    const userMessage = input.trim()
    appendMessage("You", userMessage)
    setInput("")
    appendMessage("Bot", "Typing...", true)

    try {
      const res = await fetch("http://api-travel.duckdns.org/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })

      if (!res.ok) {
        throw new Error(`Server responded with status: ${res.status}`)
      }

      const data = await res.json()

      // Remove the typing message
      if (chatBodyRef.current) {
        const lastMsg = chatBodyRef.current.lastChild
        if (lastMsg && lastMsg instanceof HTMLElement && lastMsg.innerHTML.includes("Typing...")) {
          lastMsg.remove()
        }
      }

      // The backend always returns {bot: "response"} format
      addFeedbackButtons(data.bot || "I don't understand...")
    } catch (err) {
      console.error("Error connecting to server:", err)

      // Remove the typing message
      if (chatBodyRef.current) {
        const lastMsg = chatBodyRef.current.lastChild
        if (lastMsg && lastMsg instanceof HTMLElement && lastMsg.innerHTML.includes("Typing...")) {
          lastMsg.remove()
        }
      }

      appendMessage("Bot", "Error connecting to server. Please try again later.", true)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  const handleOpenChat = () => {
    setIsOpen(true)

    // Add welcome message if chat is empty and chat body exists
    setTimeout(() => {
      if (chatBodyRef.current && !chatBodyRef.current.hasChildNodes()) {
        appendMessage(
          "Bot",
          "Hello! I'm Sirimal, your travel assistant. How can I help you plan your trip to  Sri Lanka?",
          true,
        )
      }
    }, 100)
  }

  return (
    <>
      {/* Chat Icon Button */}
      <motion.button
        onClick={handleOpenChat}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-[#1ca8cb] hover:bg-[#1795b5] transition-all duration-300 z-50 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-[350px] md:w-[400px] shadow-xl flex flex-col bg-white rounded-xl overflow-hidden z-50 max-h-[600px]"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b bg-[#1ca8cb] text-white">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <h3 className="font-medium">Travel Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-[#1795b5] rounded-full p-1 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div
              ref={chatBodyRef}
              className="flex-1 overflow-y-auto p-4 bg-gray-50"
              id="chat-body"
              style={{
                maxHeight: "400px",
                minHeight: "300px",
              }}
            />

            {/* Chat Input */}
            <div className="p-3 border-t bg-white">
              <div className="flex space-x-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1ca8cb] focus:border-[#1ca8cb]"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  className={`bg-[#1ca8cb] text-white rounded-full p-2 ${
                    !input.trim() ? "opacity-50 cursor-not-allowed" : "hover:bg-[#1795b5]"
                  }`}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
