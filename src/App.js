import React, { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [isDyslexic, setIsDyslexic] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  const toggleFont = () => {
    setIsDyslexic(!isDyslexic);
    const body = document.querySelector("body");
    if (isDyslexic) {
      body.classList.remove("dyslexic");
    } else {
      body.classList.add("dyslexic");
    }
  };

  return (
    <div className={"container"}>
      <header
        className="header"
        style={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          position: "fixed",
          background: "white",
        }}
      >
        <div className="logo" style={{ fontSize: "1.8rem" }}>
          <a href="#home" style={{ textDecoration: "none", color: "black" }}>
            Curious <span className="highlight">Owl</span>
          </a>
        </div>
        <nav className="menu">
          <a
            href="#philosophy"
            style={{
              fontFamily: "IBM Plex Sans",
              color: activeSection === "philosophy" ? "#4cb944" : "inherit",
            }}
            onClick={() => handleSectionChange("philosophy")}
          >
            Our Philosophy
          </a>
          <a
            href="#endeavours"
            style={{
              fontFamily: "IBM Plex Sans",
              color: activeSection === "endeavours" ? "#4cb944" : "inherit",
            }}
            onClick={() => handleSectionChange("endeavours")}
          >
            Future Endeavours
          </a>
        </nav>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: "10px", fontFamily: "OpenDyslexic" }}>
            For Dyslexic Readers
          </div>
          <input
            id="cb-toggle"
            type="checkbox"
            class="hide-me"
            aria-labelledby="cb-label"
            onClick={toggleFont}
          />
          <label for="cb-toggle" class="toggle"></label>
        </div>
        <button type="button" class="login-with-google-btn">
          Sign in with Google
        </button>
      </header>
      <main className="content" id="home">
        <section className="text">
          <h1 style={{ fontWeight: "400", marginTop: "30px" }}>
            Empowering Education with Meaningful &amp;{" "}
            <span className="highlight">Impactful</span> Technology
          </h1>
          <p
            style={{
              fontWeight: "300",
              marginTop: "30px",
              fontFamily: "IBM Plex Sans",
            }}
          >
            Curious Owl provides state-of-the-art teaching and assessment tools,
            incorporating{" "}
            <span className="highlight-red">instructional design</span>{" "}
            principles, to enhance teacher-student interactions and
            significantly{" "}
            <span className="highlight-red">improve learning outcomes</span>.
          </p>
          <button className="button" style={{ marginRight: "20px" }}>
            Start your Journey
          </button>
          <button type="button" class="login-with-google-btn">
            Sign in with Google
          </button>
        </section>
        <div className="image-container">
          <img src="/img1.png" alt="illustration" />
        </div>
      </main>
      <section className="features">
        <div className="feature-item">
          <i className="fa-solid fa-file-circle-plus"></i> Instant Quiz Creation
        </div>
        <div className="feature-item">
          <i className="fa-solid fa-magnifying-glass"></i> In-depth Analyze
        </div>
        <div className="feature-item">
          <i className="fa-solid fa-bolt"></i> Quick Revision
        </div>
        <div className="feature-item">
          <i className="fa-solid fa-bars"></i> Leaderboard
        </div>
      </section>
      <section className="tools">
        <h1 style={{ marginBottom: "10px" }}>Tools for Teachers</h1>
        <p>
          Curious Owl acts as your smart tech assistant, empowering you to
          deliver rich educational experiences.
        </p>
      </section>
      <section className="section">
        <div className="text-block">
          <h2>Create and Conduct</h2>
          <p>
            Adaptive, gamified quizzes and tests with just one click, suitable
            for any syllabus.
          </p>
        </div>
        <div className="image-block">
          <img src="/img2.png" alt="Create and Conduct" />
        </div>
      </section>
      <section className="section" style={{ background: "white" }}>
        <div className="image-block">
          <img src="/img3.png" alt="Analyze" />
        </div>
        <div className="text-block">
          <h2>Analyze</h2>
          <p>
            Analyze student results individually and overall to provide tailored
            feedback.
          </p>
        </div>
      </section>
      <section className="tools">
        <h1 style={{ marginBottom: "20px" }}>Tools for Students</h1>
        <p>
          Curious Owl is your tech-friend designed to make learning and
          test-taking enjoyable.
        </p>
      </section>
      <section className="section">
        <div className="text-block">
          <h2>Revise Instantly</h2>
          <p>
            On any topic by quickly creating your own quizzes, enhanced with a
            dash of gamification.
          </p>
        </div>
        <div className="image-block">
          <img src="/img4.png" alt="Revise Instantly" />
        </div>
      </section>
      <section className="section" style={{ background: "white" }}>
        <div className="image-block">
          <img src="/img5.png" alt="View the Leaderboard" />
        </div>
        <div className="text-block">
          <h2>View the Leaderboard</h2>
          <p>View the leaderboard to gauge your performance against peers.</p>
        </div>
      </section>
      <section className="section">
        <div className="text-block">
          <h2>Analyze</h2>
          <p>
            Analyze your results in-depth to better understand your learning
            progress.
          </p>
        </div>
        <div className="image-block">
          <img src="/img6.png" alt="Analyze" />
        </div>
      </section>
      <section
        className="section"
        id="philosophy"
        style={{
          margin: "20px 0",
          padding: "20px",
          background: "white",
          minHeight: "60vh",
        }}
      >
        <h1 className="section-title" style={{}}>
          The <span style={{ color: "#d8261c" }}>Owl Philosophy</span>
        </h1>
        <div className="content-box">
          <div className="image-wrapper">
            <img src="img7.svg" alt="Illustration" />
          </div>
          <div className="philosophy-text">
            Curious Owl fosters a community of passionate educators and
            learners. We simplify operational tasks for teachers and make
            learning fun for students, bridging traditional education with
            modern technology. Our goal is to enhance, not replace the teaching
            process, empowering educators and engaging learners.
          </div>
        </div>
      </section>

      <section
        className="section"
        id="endeavours"
        style={{ background: "white", minHeight: "70vh" }}
      >
        <h1 style={{ width: "80%", marginBottom: "20px" }}>
          Future <span style={{ color: "#d8261c" }}> Endeavours</span>
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px",
            margin: "10px",
            width: "85%",
          }}
        >
          <div
            style={{
              maxWidth: "45%",
              minHeight: "40vh",
              background: "#F5F5F5",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h1 style={{ margin: "20px", textAlign: "center" }}>
              Simplified Summaries
            </h1>
            <p style={{ margin: "7px" }}>
              Introducing Fat-Free Reads: summaries by real educators, blending
              information with wisdom and empathy. We're exploring sustainable
              compensation models for the future.
            </p>
          </div>
          <div
            style={{
              maxWidth: "45%",
              minHeight: "40vh",
              background: "#F5F5F5",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h1 style={{ margin: "20px", textAlign: "center" }}>
              Learning with Intuition
            </h1>
            <p style={{ margin: "7px" }}>
              Creating courses that prioritize intuition over jargon. Our tools
              help educators share knowledge and students succeed, fostering a
              community of innovative thinkers.
            </p>
          </div>
        </div>
      </section>

      <h3 style={{ textAlign: "center", margin: "80px" }}>
        Join us in transforming knowledge sharing, making education intuitive,
        accessible, and impactful.
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "60px",
        }}
      >
        <div className="contact">
          Share your thoughts with{" "}
          <a href="mailto:fat-freereads@curiousowl.in">
            <br /> fat-freereads@curiousowl.in
          </a>
        </div>
        <img src="/img8.png" alt="Join us" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "#F5F5F5",
          height: "30%",
          padding: "50px",
        }}
      >
        <div style={{ fontSize: "1.67rem" }}>
          Curious <span style={{ color: "#15A900" }}>Owl </span>
        </div>
        <div>
          <h4 style={{ fontWeight: "600" }}>Useful Links</h4>
          <p style={{ margin: "5px", cursor: "pointer" }}>Site Items</p>
          <p style={{ margin: "5px", cursor: "pointer" }}>Privacy Policy</p>
          <p style={{ margin: "5px", cursor: "pointer" }}>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default App;
