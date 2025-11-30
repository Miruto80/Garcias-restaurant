import React, { useState } from "react";

const qaPairs = [
  {
    "keywords": ["hours", "schedule", "time", "working hours", "what time"],
    "answer": "Our working hours are Monday to Friday, 8am to 4pm."
  },
  {
    "keywords": ["services", "what do you do", "what you offer", "work you do", "jobs"],
    "answer": "At Canto Construction LLC, we offer interior remodeling, repairs, painting, water damage restoration, vinyl flooring installation, trim work, and more. Contact us for a free quote!"
  },
  {
    "keywords": ["quote", "estimate", "price", "how much", "cost"],
    "answer": "Every project is unique. Our estimates include materials and labor. For a free quote, please use the 'Contact' button or call us at 732-710-6539."
  },
  {
    "keywords": ["area", "location", "where are you", "work in", "city", "zone"],
    "answer": "We are based in New Jersey and work in surrounding areas. Message us to check if we cover your location."
  },
  {
    "keywords": ["materials", "who buys materials", "do you include materials"],
    "answer": "Yes, all materials are included in our estimates unless you prefer to supply your own. We’ll go over everything during the quote process."
  },
  {
    "keywords": ["warranty", "guarantee", "insured", "insurance", "coverage"],
    "answer": "Yes, we offer a warranty on our work and we are fully insured for your peace of mind."
  },
  {
    "keywords": ["how long", "duration", "time to finish", "how many days", "fast"],
    "answer": "The timeline depends on the type of work. We’ll give you a clear estimate after reviewing your project details."
  },
  {
    "keywords": ["payment", "how to pay", "card", "payment methods", "cash", "transfer", "check"],
    "answer": "We accept cash, bank transfers, and checks. Ask us for available payment options."
  },
  {
    "keywords": ["appointment", "schedule", "visit", "inspection", "home visit"],
    "answer": "We can schedule a free visit to assess your project with no obligation. Use the 'Contact' button or call 732-710-6539 to book an appointment."
  },
  {
    "keywords": ["contact", "talk to someone", "representative", "number", "call", "message"],
    "answer": "To speak with us directly, call 732-710-6539 or say 'Contact' and someone from our team will get back to you shortly."
  },
  {
    "keywords": ["experience", "how many years", "trust", "professional", "reliable"],
    "answer": "Canto Construction LLC has years of experience in the construction and remodeling industry. Our work is professional, reliable, and guaranteed."
  }
]

function getAnswer(userQuestion) {
  const lower = userQuestion.toLowerCase();
  // Encuentra todas las respuestas cuyas palabras clave estén presentes
  const matches = qaPairs.filter(qap => qap.keywords.some(kw => lower.includes(kw)));
  if (matches.length === 0) {
    return ["Sorry, I don't have an answer for that. Please try another question."];
  }
  // Devuelve cada respuesta como un mensaje separado
  return matches.map(m => m.answer);
}

const welcomeText = `Hi! How can I help you? Use 'Contact' if you want to talk to us directly.`;
const FORM_ENDPOINT = "https://formspree.io/f/xeozadjp";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: welcomeText }
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [awaitingContact, setAwaitingContact] = useState(false);
  const [contactStep, setContactStep] = useState(0); // 0: none, 1: name, 2: phone
  const [contactData, setContactData] = useState({ name: '', phone: '' });
  const [sending, setSending] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    let botMsgs = [];

    // Permitir cancelar el flujo de contacto
    if (awaitingContact && input.toLowerCase() === "cancel") {
      setAwaitingContact(false);
      setContactStep(0);
      setContactData({ name: '', phone: '' });
      setMessages([...messages, userMsg, { from: "bot", text: "Contact process cancelled." }]);
      setInput("");
      return;
    }

    // Contact flow
    if (awaitingContact) {
      if (contactStep === 1) {
        setContactData({ ...contactData, name: input });
        setContactStep(2);
        setMessages([...messages, userMsg, { from: "bot", text: "Please enter your phone number (or type 'cancel' to stop):" }]);
        setInput("");
        return;
      } else if (contactStep === 2) {
        setContactData({ ...contactData, phone: input });
        setSending(true);
        // Send to Formspree
        try {
          const res = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: contactData.name,
              phone: input,
              message: "Contact request from chatbot"
            })
          });
          if (res.ok) {
            botMsgs = [{ from: "bot", text: "Thank you! We will contact you soon." }];
          } else {
            botMsgs = [{ from: "bot", text: "There was an error sending your info. Please try again later." }];
          }
        } catch {
          botMsgs = [{ from: "bot", text: "There was an error sending your info. Please try again later." }];
        }
        setSending(false);
        setAwaitingContact(false);
        setContactStep(0);
        setContactData({ name: '', phone: '' });
        setMessages([...messages, userMsg, ...botMsgs]);
        setInput("");
        return;
      }
    }

    // Detect contact intent
    if (input.toLowerCase().includes("contact")) {
      setAwaitingContact(true);
      setContactStep(1);
      setMessages([...messages, userMsg, { from: "bot", text: "Please enter your name (or type 'cancel' to stop):" }]);
      setInput("");
      return;
    }

    // Obtener respuestas (pueden ser varias)
    const answers = getAnswer(input);
    if (Array.isArray(answers)) {
      botMsgs = answers.map(ans => ({ from: "bot", text: ans }));
    } else {
      botMsgs = [{ from: "bot", text: answers }];
    }
    setMessages([...messages, userMsg, ...botMsgs]);
    setInput("");
  };

  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      right: 20,
      zIndex: 99999,
      width: open ? 320 : 60,
      height: open ? 420 : 60,
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      transition: "all 0.3s",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end"
    }}>
      {open ? (
        <>
          <div style={{ background: "#531615", color: "#fff", padding: 12, width: "100%", cursor: "pointer" }} onClick={() => setOpen(false)}>
            ChatBot
            <span style={{ float: "right", fontWeight: "bold" }}>×</span>
          </div>
          <div style={{ flex: 1, padding: 12, overflowY: "auto", width: "100%" }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                textAlign: msg.from === "bot" ? "left" : "right",
                margin: "8px 0"
              }}>
                <span style={{
                  display: "inline-block",
                  background: msg.from === "bot" ? "#f1f1f1" : "#007bff",
                  color: msg.from === "bot" ? "#333" : "#fff",
                  borderRadius: 12,
                  padding: "8px 12px",
                  maxWidth: "80%"
                }}>{msg.text}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} style={{ display: "flex", width: "100%", borderTop: "1px solid #eee" }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question..."
              style={{ flex: 1, border: "none", padding: 10, outline: "none" }}
            />
            <button type="submit" style={{ background: "#531615", color: "#fff", border: "none", padding: "0 16px", cursor: "pointer" }}>Send</button>
          </form>
        </>
      ) : (
        <button onClick={() => setOpen(true)} style={{ width: 60, height: 60, background: "#000", color: "#fff", border: "none", fontSize: 28, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
         <i class="fa-solid fa-message"></i>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
