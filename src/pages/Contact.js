import React from "react";

class Contact extends React.Component {
  componentDidMount() {
    document.title = "Contact";
  }

  render() {
    return (
      <section className="section">
        <h1 className="section-title">Contact Page</h1>
        <p className="section-description">Contact me :</p>
        <ul>
          <li>Watsapp: 87479757647</li>
          <li>Telegram : 87479757647</li>
          <li>email : anelbay505@gmail.com</li>
        </ul>
      </section>
    );
  }
}

export default Contact;

