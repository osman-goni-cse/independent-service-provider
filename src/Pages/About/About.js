import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="mt-5">
      <div className="margin-dao">
        <div className="focus w-25 mx-auto">
          <h1>Hello</h1>
          <h1>
            <span className="color">I'm Osman Goni</span>
          </h1>
        </div>

        <div className="mt-5">
          <div className="about">
            <div className="w-25">
              <h3 className="color text-center">About Me</h3>
              <p className="about-me">
                I am very passionate about Science, Math, Programming and
                Analytical skills. I invest a lot of time in solving algorithmic
                problems in online judges like UVa, LightOJ, etc and attending
                programming contests in many contest platforms like Codeforces,
                AtCoder, etc..
              </p>
            </div>
            <div className="w-25">
              <h3 className="color text-center">My Goals</h3>
              <p className="about-me">
              My Goal is to get a job in Google.That's why i prepare myself to proficient in problem solving.I love to learn different types of data structures and algorithms.I am also learning Web Development to get job after graduation.To achieve my goal i complete my daily task to daily.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
