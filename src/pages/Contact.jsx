import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-container">
      <h1>Contact Me</h1>

      <div className="contact-details">
        <p><strong>Location:</strong> Toronto, ON, M1L 1K9</p>
        <p><strong>Cell:</strong> 437-422-1810</p>
        <p><strong>Email:</strong> <a href="mailto:nadia780akter@gmail.com">nadia780akter@gmail.com</a></p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/nadia-akter-8692142a3"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/nadia-akter-8692142a3
          </a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="textarea-field"
        />
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
