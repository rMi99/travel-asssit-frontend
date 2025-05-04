"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { MessageSquare, Send, X, ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  sender: "user" | "bot"
  text: string
  timestamp: Date
  feedbackGiven?: boolean
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [ws, setWs] = useState<WebSocket | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Connect to WebSocket
  useEffect(() => {
    const connectWebSocket = () => {
      const socket = new WebSocket("ws://localhost:5000")

      socket.onopen = () => {
        console.log("Connected to chatbot server")
        setIsConnected(true)

        // Add welcome message when connection is established
        setMessages([
          {
            id: Date.now().toString(),
            sender: "bot",
            text: "Hello! How can I assist you today?",
            timestamp: new Date(),
          },
        ])
      }

      socket.onmessage = (event) => {
        const response = event.data
        addMessage("bot", response)
      }

      socket.onclose = () => {
        console.log("WebSocket closed. Reconnecting...")
        setIsConnected(false)
        setTimeout(connectWebSocket, 3000) // Auto-reconnect
      }

      setWs(socket)
    }

    if (!ws) {
      connectWebSocket()
    }

    return () => {
      if (ws) {
        ws.close()
      }
    }
  }, [])

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const addMessage = (sender: "user" | "bot", text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender,
        text,
        timestamp: new Date(),
      },
    ])
  }

  const handleSendMessage = () => {
    if (!input.trim() || !ws || ws.readyState !== WebSocket.OPEN) return

    // Add user message to chat
    addMessage("user", input)

    // Send message to server
    ws.send(input)

    // Clear input
    setInput("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const provideFeedback = (messageId: string, helpful: boolean) => {
    // Find the message and mark feedback as given
    setMessages((prev) => prev.map((msg) => (msg.id === messageId ? { ...msg, feedbackGiven: true } : msg)))

    // Send feedback to server
    const message = messages.find((m) => m.id === messageId)
    if (message) {
      fetch(`http://localhost:5000/feedback?msg=${encodeURIComponent(message.text)}&helpful=${helpful}`)
        .then(() => console.log("Feedback sent successfully"))
        .catch((err) => console.error("Error sending feedback:", err))
    }
  }

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 md:p-6">
      {/* Chat Icon Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full shadow-lg flex items-center justify-center",
          "bg-teal-500 hover:bg-teal-600 transition-all duration-300",
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100",
        )}
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6 text-white" />
      </Button>

      {/* Chat Window */}
      <Card
        className={cn(
          "fixed bottom-6 right-6 w-[350px] md:w-[400px] shadow-xl flex flex-col",
          "transition-all duration-300 transform origin-bottom-right",
          "max-h-[600px] h-[500px]",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none",
        )}
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b bg-teal-500 text-white rounded-t-lg">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5" />
            <h3 className="font-medium">Chat with Sam</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-teal-600 h-8 w-8"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50" id="chat-body">
          {messages.map((message) => (
            <div key={message.id} className={cn("mb-4 max-w-[80%]", message.sender === "user" ? "ml-auto" : "mr-auto")}>
              <div
                className={cn(
                  "p-3 rounded-lg",
                  message.sender === "user"
                    ? "bg-teal-500 text-white rounded-br-none"
                    : "bg-white border border-gray-200 rounded-bl-none",
                )}
              >
                {message.text}
              </div>

              {/* Feedback buttons for bot messages */}
              {message.sender === "bot" && !message.feedbackGiven && (
                <div className="flex space-x-2 mt-1 justify-start">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 text-xs text-gray-500 hover:text-green-500 hover:bg-green-50"
                    onClick={() => provideFeedback(message.id, true)}
                  >
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    Helpful
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 px-2 text-xs text-gray-500 hover:text-red-500 hover:bg-red-50"
                    onClick={() => provideFeedback(message.id, false)}
                  >
                    <ThumbsDown className="h-3 w-3 mr-1" />
                    Not Helpful
                  </Button>
                </div>
              )}

              {/* Feedback confirmation message */}
              {message.sender === "bot" && message.feedbackGiven && (
                <div className="text-xs text-gray-400 mt-1 ml-1">Thank you for your feedback!</div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-3 border-t bg-white rounded-b-lg">
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1"
              disabled={!isConnected}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!isConnected || !input.trim()}
              className="bg-teal-500 hover:bg-teal-600"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          {!isConnected && <p className="text-xs text-red-500 mt-1">Connecting to server... Please wait.</p>}
        </div>
      </Card>
    </div>
  )
}
