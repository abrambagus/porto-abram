import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-[700px] pt-24">
      <div className="flex justify-center">
        <p className="text-white-1 font-bold text-8xl text-center">
          I&apos;m Abram Bagus Janitra
        </p>
      </div>
      <div className="flex justify-center mt-10 xl:mx-72">
        <p className="text-white-1 text-2xl text-center">
          a front end developer with 2 years of experience. Graduated from Binus
          University in 2021 and passionate about creating beautiful and
          functional web applications using modern technologies for my client.
        </p>
      </div>
      {/* <div>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="0" x2="10" y2="50" stroke="red" />
        </svg>
      </div> */}
    </section>
  );
};

export default About;
