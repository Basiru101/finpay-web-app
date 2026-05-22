export default function Services() {
  return (
    <section id="services" className="services">

      <h2 className="section-title">
        Our Financial Solutions
      </h2>

      <div className="grid">

        <div className="card">
          <div className="card-icon">💳</div>

          <h3>Digital Wallet</h3>

          <p>
            Securely send, receive, and store money
            from anywhere in Africa.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">🏦</div>

          <h3>Bank Transfers</h3>

          <p>
            Instantly transfer money between banks
            and mobile money platforms.
          </p>
        </div>

        <div className="card">
          <div className="card-icon">📱</div>

          <h3>Mobile Payments</h3>

          <p>
            Pay bills, purchase airtime, and complete
            transactions directly from your phone.
          </p>
        </div>

      </div>
    </section>
  );
}