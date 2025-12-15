import React, { useState } from "react";

const contactKeywords = [
  "contacto",
  "reservar",
  "reserva",
  "pedido",
  "pedidos",
  "orden",
  "ordenar",
  "comprar",
  "delivery",
  "domicilio",
  "llevar",
  "take out",
  "pickup",
  "whatsapp",
  "telefono",
  "teléfono",
  "llamar"
];


const qaPairs = [
 {
    keywords: ["horario", "horarios", "hora", "abren", "cierran", "tiempo"],
    answer: "Nuestro horario es de **6:00 am a 12:00 pm** todos los días."
  },
  {
    keywords: ["ubicacion", "direccion", "donde estan", "local", "lugar"],
    answer: "Estamos ubicados en: **2650 Midway Rd, Unit 146, Carrollton, TX 75006, Estados Unidos.**"
  },
  {
    keywords: ["menu", "carta", "comida", "venden", "que hay"],
    answer: "Puedes ver nuestro menú completo haciendo clic en *Menú* en la parte superior. Tenemos frituras, almuerzos, parrillas, sopas, contornos, arepas, panes, hamburguesas, patacones, cachapas y más."
  },
  {
    keywords: ["frituras", "empanadas", "tequenos", "pasteles"],
    answer:
      "Frituras:\n" +
      "- Empanadas: carne mechada, molida, pollo, camarones, jamón y queso, queso y papa: **2.00$**\n" +
      "- Empanada de pabellón: **3.00$**\n" +
      "- Tequeños: **2.50$** | Tequeyoyo: **3.00$**\n" +
      "- Pasteles: molida, pizza, parrillero, pollo, jamón y queso, papa y queso: **2.00$**"
  },
  {
    keywords: ["almuerzo", "almuerzos", "platos", "comidas"],
    answer:
      "Almuerzos:\n" +
      "Pasticho 16$, Costilla en coco 17$, Borrego en coco 17$, Arroz chino 16$, Pescado frito 17$, Pollo o carne a la plancha 15.99$, Pollo guisado 15.99$, Pabellón 16$, Lomo negro 16$, Chicharrones 14.99$, Bistec encebollado 15.99$, Chuleta ahumada 15.99$."
  },
  {
    keywords: ["parrilla", "parrillas", "churrasco"],
    answer:
      "Parrillas:\n" +
      "- Parrilla Personal 22.99$\n" +
      "- Parrilla Familiar 40.00$\n" +
      "- Churrasco personal 22.88$\n" +
      "- Churrasco grande 33.28$"
  },
  {
    keywords: ["sopa", "sopas", "caldo"],
    answer:
      "Sopas:\n" +
      "- Costilla completa 15$\n" +
      "- Gallina completa 15$\n" +
      "- Media costilla 10$\n" +
      "- Media gallina 10$"
  },
  {
    keywords: ["contornos", "acompanantes", "extras"],
    answer:
      "Contornos:\n" +
      "Tostones, arroz, yuca, papas fritas, arepas, caraotas, maíz: **3.00$**\n" +
      "Carne, pollo o pernil: **5.99$**\n" +
      "Queso: **2.00$** | Queso de mano: **3.00$**"
  },
  {
    keywords: ["arepa", "arepas"],
    answer:
      "Arepas (sin reina pepiada ni perico):\n" +
      "- Carne asada, mechada, pollo o pernil: **16.99$**\n" +
      "- Jamón y queso: **11.99$**\n" +
      "- Mixta: **17.68$**"
  },
  {
    keywords: ["combo", "combos"],
    answer:
      "Combos:\n" +
      "- Combo de arepa asada o frita: **14.99$**\n" +
      "- Combo de tumbarranchos (carne o pollo mechado): **14.99$**"
  },
  {
    keywords: ["moderna", "modernas"],
    answer:
      "Modernas:\n" +
      "- Moderna de arepa o plátano: **17.50$**\n" +
      "- Moderna Mixta: **18.50$**\n" +
      "- Moderna pequeña: **14.50$**\n" +
      "- Moderna mixta pequeña: **15.50$**"
  },
  {
    keywords: ["pan", "panes", "salchiqueso", "salchipapa"],
    answer:
      "Panes:\n" +
      "Salchiqueso 10.99$, Salchipapa 16.99$, Pan con huevo 10.99$, Pan con jamón y queso 10.99$, Pan de carne asada/pollo/mechada 12.99$."
  },
  {
    keywords: ["hamburguesa", "hamburguesas"],
    answer:
      "Hamburguesas:\n" +
      "Carne asada 16.99$, Pollo asado 15.99$, Carne mechada 16.99$, Triple X 22.00$, Mixta 18.99$, Carne de hamburguesa 15.99$, Chuleta 16.99$."
  },
  {
    keywords: ["patacon", "patacones"],
    answer:
      "Patacones:\n" +
      "- Carne asada/mechada/pollo/pernil: **18.99$**\n" +
      "- Mixto: **19.99$**"
  },
  {
    keywords: ["cachapa", "cachapas"],
    answer:
      "Cachapas (sin llanera ni a la parrilla):\n" +
      "- Jamón y queso: 14.00$\n" +
      "- Con chicharrón: 17.50$\n" +
      "- Carne asada/pollo/mechada: 17.50$\n" +
      "- Solo queso: 14.00$\n" +
      "- La viuda: 6.00$"
  },
  {
    keywords: ["promocion", "promociones", "oferta", "especial"],
    answer:
      "Promociones:\n" +
      "- De lunes a jueves: piezas en **1.80$**\n" +
      "- Empanadas\n" +
      "- Pasteles\n" +
      "- Almuerzo promocional: **13.50$**"
  },
];

function getAnswer(userQuestion) {
  const lower = userQuestion.toLowerCase();
  const matches = qaPairs.filter(qap => qap.keywords.some(kw => lower.includes(kw)));

  if (matches.length === 0) {
    return ["Lo siento, no tengo una respuesta para eso. Por favor, intenta con otra pregunta o escribe <b>contacto</b> para hablar con nosotros directamente."];
  }

  return matches.map(m => m.answer);
}

const welcomeText = `Hola! Como puedo ayudarte? Escribe 'Contacto' si quieres hablar con nosotros directamente.`;

const ChatBot = () => {
  const [messages, setMessages] = useState([{ from: "bot", text: welcomeText }]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const lowerInput = input.toLowerCase();

    // Detect "contact"
    // Detect contact / orders / reservations
if (contactKeywords.some(keyword => lowerInput.includes(keyword))) {
  const botMsg = {
    from: "bot",
    text: `
      Para reservas, pedidos o ayuda escríbenos directamente por WhatsApp
      <a href="https://wa.me/16824804614" target="_blank" style="color:#25D366;font-weight:bold;">
        Haz click aquí para chatear por WhatsApp
      </a>
    `
  };

  setMessages([...messages, userMsg, botMsg]);
  setInput("");
  return;
}
    // Get AI answers
    const answers = getAnswer(input);
    const botMsgs = answers.map(ans => ({ from: "bot", text: ans }));

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
      flexDirection: "column"
    }}>
      {open ? (
        <>
          <div style={{ background: "#531615", color: "#fff", padding: 12, width: "100%", cursor: "pointer" }}
               onClick={() => setOpen(false)}>
            ChatBot
            <span style={{ float: "right", fontWeight: "bold" }}>×</span>
          </div>

          <div style={{ flex: 1, padding: 12, overflowY: "auto", width: "100%" }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                textAlign: msg.from === "bot" ? "left" : "right",
                margin: "8px 0"
              }}>
                <span
  style={{
    display: "inline-block",
    background: msg.from === "bot" ? "#f1f1f1" : "#007bff",
    color: msg.from === "bot" ? "#333" : "#fff",
    borderRadius: 12,
    padding: "8px 12px",
    maxWidth: "80%",
    whiteSpace: "pre-line"
  }}
  dangerouslySetInnerHTML={{ __html: msg.text }}
></span>

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
            <button type="submit"
                    style={{ background: "#531615", color: "#fff", border: "none", padding: "0 16px", cursor: "pointer" }}>
              Send
            </button>
          </form>
        </>
      ) : (
        <button onClick={() => setOpen(true)}
                style={{ width: 60, height: 60, background: "#000", color: "#fff",
                         border: "none", fontSize: 28, cursor: "pointer",
                         display: "flex", alignItems: "center", justifyContent: "center" }}>
          <i className="fa-solid fa-message"></i>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
