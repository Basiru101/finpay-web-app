import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">

      <h2 className="section-title">
        Contact Us
      </h2>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Head Office</h3>

          <p>📍 Yaoundé, Cameroon</p>
          <p>📞 +237 650 000 000</p>
          <p>✉️ support@finpay.com</p>
          <p>⏰ Mon - Sat: 8AM - 6PM</p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-row">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="btn btn-primary">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}