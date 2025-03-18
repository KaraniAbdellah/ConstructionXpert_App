import React from "react";

export default function CallAction() {
  return (
    <div className="bg-zinc-50 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-zinc-900 font-bold mb-4">
          Ready to optimize your construction projects?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-zinc-900">
          Get started with ConstructionXpert Services today and improve the
          efficiency of your projects.
        </p>
        <button class="button mx-auto ">
          Start Here
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
