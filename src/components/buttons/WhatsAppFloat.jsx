import "./whatsapp-float.css";

export default function WhatsAppFloat() {
  // ✅ Replace with your WhatsApp number (country code + number, no +, no spaces)
  const phone = "919999999999";
  const text = encodeURIComponent("Hi! I’m interested. Please share details.");

  const link = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={link}
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp" />
    </a>
  );
}