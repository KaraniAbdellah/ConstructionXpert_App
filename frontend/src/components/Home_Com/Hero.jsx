import React from "react";

export default function Hero() {
  return (
    <div className="bg-zinc-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
          ConstructionXpert Services
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The complete solution for managing your construction projects
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button class="button">
              Start Here
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button class="button">
              Register now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
