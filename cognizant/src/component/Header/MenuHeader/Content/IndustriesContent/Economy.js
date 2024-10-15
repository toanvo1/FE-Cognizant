import React from "react";

const Economy = () => {
  return (
    <div className="services-container">
     <img
        src="https://st4.depositphotos.com/4428871/30718/i/450/depositphotos_307182686-stock-photo-our-services-text-on-blackboard.jpg"
        alt="Education"
        className="content-image"
      />
      <h1>Our Services</h1>

      <div className="service-section">
        <h2>Finance & Investment</h2>
        <p>
          The primary field targeted by our algorithmic trading development
          service. This includes investment funds, financial institutions, and
          individual investors. We focus on optimizing investment and trading
          strategies with advanced technology.
        </p>
        <ul>
          <li>
            Customizable Learning Platforms:{" "}
            <span>
              Tailored to meet the needs of diverse educational institutions,
              from K-12 to corporate training.
            </span>
          </li>
          <li>
            Scalable Solutions:{" "}
            <span>
              Whether for small classes or large institutions, our systems grow
              with your organization’s needs.
            </span>
          </li>
          <li>
            Integration Capabilities:{" "}
            <span>
              Seamlessly integrate with existing tools, databases, and
              educational technologies.
            </span>
          </li>
        </ul>
      </div>

      <div className="service-section">
        <h2>Fintech</h2>
        <p>
          We provide advanced financial technology solutions, especially focused
          on automated trading and artificial intelligence (AI). Our solutions
          help financial businesses improve operational efficiency and customer
          service.
        </p>
        <ul>
          <li>
            Automated Trading Systems:{" "}
            <span>
              Leveraging AI to optimize trading performance and minimize risks.
            </span>
          </li>
          <li>
            AI-driven Analytics:{" "}
            <span>
              Using predictive algorithms to analyze market trends and make
              informed decisions.
            </span>
          </li>
          <li>
            Integration Support:{" "}
            <span>
              Ensuring compatibility with existing financial platforms and
              systems.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Economy;
