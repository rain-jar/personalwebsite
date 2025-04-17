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
        I'm an aspiring AI Developer based in Canada. This space is used to
        document my personal projects and endeavors. My most recent project is
        Lavie514.
      </p>
      <p className="contact">
        My email is{" "}
        <a href="mailto:rajrnair90@gmail.com">itscuriousjar@gmail.com</a>.
      </p>
    </div>
  );
};

export default LandingPage;
