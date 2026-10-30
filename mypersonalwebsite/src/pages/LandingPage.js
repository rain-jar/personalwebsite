import React from "react";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="maintitle">
        {" "}
        Raj Nair
        {/*<small className="pronunciation">[ ra • aj - naa • yer ]</small>*/}
        <small className="pronunciation">Son • Engineer • Curious </small>
      </h1>
      <p className="bio">
        SaaS Solutions Consultant turned Applied-AI Builder. Building, breaking, debugging Agentic LLM systems. My most recent project
        is NWSL Fantasy.
      </p>
      <p className="contact">
        My email is{" "}
        <a href="mailto:medianjar@gmail.com">mediajar@gmail.com</a>.
      </p>
    </div>
  );
};

export default LandingPage;
