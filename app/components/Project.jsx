import React from "react";

const Project = () => {
  return (
    <section id="project" className="py-20">
      <p className="text-white-1 font-bold text-5xl">Project</p>

      <div className="mt-6 p-6 rounded-2xl border border-green-1/50">
        <p className="text-white-1 font-bold text-3xl">
          Kimia Farma Diagnostic
        </p>
        <p className="text-white-1/60 text-xl mt-4">
          A web application to record, store, and manage patient medical
          information. Features in this application include admin, patient
          registration, plebotomy, soapi, prescriptions, billing and other
          features related to patient care.
        </p>
      </div>
      <div className="mt-6 p-6 rounded-2xl border border-green-1/50">
        <p className="text-white-1 font-bold text-3xl">
          Yummy Corp Point of Sale
        </p>
        <p className="text-white-1/60 text-xl mt-4">
          A responsive software web application that helps to process
          transactions to customer, records sales data, and analytic.
        </p>
      </div>
      <div className="mt-6 p-6 rounded-2xl border border-green-1/50">
        <p className="text-white-1 font-bold text-3xl">MyTelkomsel Web App</p>
        <p className="text-white-1/60 text-xl mt-4">
          A web application that allows users to manage their telecommunication
          services from Telkomsel, the largest mobile service provider in
          Indonesia.
        </p>
      </div>
    </section>
  );
};

export default Project;
