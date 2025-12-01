import React, { useState } from 'react';
import '../assets/css/Reservation.css';

export default function ReservationSection() {
  const [groupSize, setGroupSize] = useState('2');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();

  const message = `Hola, quiero reservar una mesa para ${groupSize} personas el ${date} a las ${time}.`;
  const encodedMessage = encodeURIComponent(message);

  const phone = "16824804614"; // SIN símbolos

  const url = `https://wa.me/${phone}?text=${encodedMessage}`;

  // Más confiable que window.open en WhatsApp Business
  window.location.href = url;
};



  return (
    <section className="reservation-section">
      <div className="reservation-form">
        <h2>Reserva una mesa</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Tamaño del grupo:
            <select value={groupSize} onChange={(e) => setGroupSize(e.target.value)}>
              <option value="2">2 personas</option>
              <option value="3">3 personas</option>
              <option value="4">4 personas</option>
              <option value="5">5 personas</option>
              <option value="6+">6 o más</option>
            </select>
          </label>

          <label>
            Fecha:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>

          <label>
            Horario:
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
          </label>

          <button type="submit">Buscar una mesa</button>
        </form>
      </div>

      <div className="reservation-map">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.6644348817276!2d-96.84347522446491!3d32.98625397326384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c25240213bdc9%3A0x7ef2ced921b00e32!2sGarcia%E2%80%99s%20Restaurant%20and%20market!5e0!3m2!1ses!2sve!4v1764194158336!5m2!1ses!2sve" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}