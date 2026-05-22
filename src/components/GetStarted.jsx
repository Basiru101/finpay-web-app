import { useEffect, useState } from "react";

export default function GetStarted() {
  const steps = [
    {
      title: "Create an Account",
      text: "Sign up in less than 2 minutes using your email or phone number."
    },
    {
      title: "Verify Your Identity",
      text: "Secure your account with simple verification for safe transactions."
    },
    {
      title: "Add Funds",
      text: "Deposit money via mobile money, bank transfer, or card."
    },
    {
      title: "Start Transacting",
      text: "Send, receive, and manage payments instantly across Africa."
    }
  ];

  // Load saved progress (production behavior)
  const savedStep = JSON.parse(localStorage.getItem("finpay_step"));

  const [active, setActive] = useState(savedStep || 0);
  const [completed, setCompleted] = useState(false);
  const [animating, setAnimating] = useState(false);

  const progress = ((active + 1) / steps.length) * 100;

  // Save progress like real apps
  useEffect(() => {
    localStorage.setItem("finpay_step", JSON.stringify(active));
  }, [active]);

  const goNext = () => {
    if (active < steps.length - 1) {
      setAnimating(true);

      setTimeout(() => {
        setActive((prev) => prev + 1);
        setAnimating(false);
      }, 200);
    } else {
      setCompleted(true);
      localStorage.removeItem("finpay_step");
    }
  };

  const goBack = () => {
    if (active > 0) {
      setAnimating(true);

      setTimeout(() => {
        setActive((prev) => prev - 1);
        setAnimating(false);
      }, 200);
    }
  };

  if (completed) {
    return (
      <section className="get-started">
        <h2 className="section-title">Get Started with FinPay</h2>

        <div className="completion-box">
          <h3>🎉 You're all set!</h3>
          <p>Your FinPay onboarding is complete.</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              setCompleted(false);
              setActive(0);
            }}
          >
            Restart
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="get-started" className="get-started">

      <h2 className="section-title">Get Started with FinPay</h2>

      {/* PROGRESS BAR */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* STEP INDICATORS */}
      <div className="step-nav">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`step-dot ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      {/* STEP CARD */}
      <div className={`step-card ${animating ? "fade-out" : "fade-in"}`}>
        <h3>{steps[active].title}</h3>
        <p>{steps[active].text}</p>
      </div>

      {/* ACTIONS */}
      <div className="step-actions">

        <button
          className="btn btn-secondary"
          onClick={goBack}
          disabled={active === 0}
        >
          Back
        </button>

        <button
          className="btn btn-primary"
          onClick={goNext}
        >
          {active === steps.length - 1 ? "Finish" : "Next"}
        </button>

      </div>

    </section>
  );
}