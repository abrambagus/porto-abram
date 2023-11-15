import React from "react";

const Experience = () => {
  return (
    <div>
      <p className="text-white-2 font-bold text-5xl">Experience</p>
      <div className="mt-6 p-6 max-w-[80%] border rounded-2xl">
        <p className="text-white-2 text-4xl">PT. Buana Varia Komputama</p>
        <p className="text-white-2 text-3xl mt-1">
          Frontend Developer{" "}
          <span className="text-white-1 text-xl">Jan 2023 - Present</span>
        </p>

        <p className="text-white-1 text-xl mt-2">
          I&apos;m developed EMR (Eletronic Medical Record) project for the
          company&apos;s client, Kimia Farma. My work involves creating user
          interfaces and web applications that allow medical professionals to
          access, manage and update patient data. I also collaborate with
          back-end developers and QA Tester to ensure the functionality and
          quality of the EMR system.
        </p>
        <div className="flex mt-4">
          <div className="flex justify-center px-3 py-2 bg-blue-1 rounded-full">
            <p className="text-blue-2">Next JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
