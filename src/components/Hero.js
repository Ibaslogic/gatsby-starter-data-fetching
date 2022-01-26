import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Gatsby tutorial</h1>
      <p>A step-by-step guide to data fetching with with Gatsby and GraphQL</p>
      <p>
        You can find{" "}
        <a
          href={`https://twitter.com/ibaslogic`}
          target="_blank"
          rel="noopener noreferrer"
          title="twitter"
        >
          Ibas on Twitter
        </a>
      </p>
    </div>
  );
};

export default Hero;
