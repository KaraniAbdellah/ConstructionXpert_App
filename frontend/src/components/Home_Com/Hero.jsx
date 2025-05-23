import React from "react";
import { Link } from "react-router";
import Aos from "aos";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-zinc-800 pt-24 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div data-aos="fade-right" className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ConstructionXpert Services
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The complete solution for managing your construction projects
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/main">
              <button data-aos="fade-up" className="button">
                Start Here
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
