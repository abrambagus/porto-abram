"use client";

import React, { Fragment } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { experiences } from "../_constant/experience";

const Experience = () => {
  return (
    <section id="experience" className="pt-28">
      <p className="text-white-1 font-bold text-5xl">Experience</p>

      {experiences.map((experience, index) => (
        <div
          key={index}
          className="group flex mt-6 p-6 rounded-2xl hover:bg-slate-800/80 cursor-pointer"
          onClick={() => window.open(experience.url)}
        >
          <div className="max-w-[25%] mr-8 mt-1">
            <p className="text-white-1 text-xl">{experience.duration}</p>
          </div>
          <div className="max-w-[75%]">
            <div className="flex items-center">
              <p
                className="text-white-1 group-hover:text-green-1 
                    group-hover:underline text-3xl font-bold mr-2"
              >
                {experience.companyName}
              </p>

              <ArrowUpRightIcon
                className="h-8 w-8 fill-white-1 group-hover:fill-green-1 
                    group-hover:translate-x-1 group-hover:-translate-y-1 ease-out duration-300"
              />
            </div>

            {experience.postitions.map((postition, index) => (
              <Fragment key={"postition-" + index}>
                <p className="text-white-1 text-2xl mt-4 font-bold">
                  {postition.name}
                </p>
                <p className="text-white-1/60 text-xl mt-2">
                  {postition.description}
                </p>
                <div className="flex flex-wrap">
                  {postition.skills.map((skill, index) => (
                    <Fragment key={"skill-" + index}>
                      <div className="flex justify-center px-3 py-2 bg-dark-2 rounded-full mr-2 my-2">
                        <p className="text-green-1">{skill}</p>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
