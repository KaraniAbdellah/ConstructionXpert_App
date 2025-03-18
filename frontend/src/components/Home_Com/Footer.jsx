import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              ConstructionXpert Services
            </h3>
            <p className="mb-4">
              The complete solution for managing your construction projects.
            </p>

            <ul className="wrapper">
              <a href="https://x.com/karani66745" className="icon twitter">
                <span className="tooltip">Twitter</span>
                <svg
                  height="1.8em"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="twitter"
                >
                  <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abdellah-karani-965928294/"
                className="icon linkedin"
              >
                <span className="tooltip">LinkedIn</span>
                <svg
                  viewBox="0 0 448 512"
                  height="1.8em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.1h92.88zm-46.5-315.6c-29.75 0-51.28-21.53-51.28-48.9 0-27.3 21.53-48.83 51.28-48.83 29.75 0 51.28 21.53 51.28 48.83 0 27.37-21.53 48.9-51.28 48.9zM447.99 448h-92.88V302.4c0-34.9-12.5-58.7-43.8-58.7-23.8 0-37.7 16-43.9 31.4-2.4 5.9-3.1 14.2-3.1 22.5v144.5h-92.8V148.1h92.8v38.9h1.3c12.4-23.3 42.4-47.7 87.3-47.7 64.8 0 114.3 42.7 114.3 135.6V448z"></path>
                </svg>
              </a>
              <a
                href="https://github.com/KaraniAbdellah"
                className="icon github"
              >
                <span className="tooltip">GitHub</span>
                <svg
                  viewBox="0 0 24 24"
                  height="1.8em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .296c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.801 8.207 11.396.6.11.82-.261.82-.58v-2.26c-3.338.727-4.03-1.602-4.03-1.602-.544-1.387-1.328-1.756-1.328-1.756-1.087-.742.082-.726.082-.726 1.2.084 1.831 1.234 1.831 1.234 1.06 1.811 2.791 1.287 3.466.983.107-.769.416-1.287.758-1.58-2.664-.302-5.466-1.336-5.466-5.94 0-1.309.468-2.382 1.236-3.222-.124-.302-.536-1.522.08-3.165 0 0 1.008-.32 3.3 1.205.96-.267 1.98-.398 3-.4 1.02.002 2.04.133 3 .4 2.292-1.524 3.3-1.205 3.3-1.205.617 1.643.204 2.863.08 3.165.768.84 1.236 1.913 1.236 3.222 0 4.615-2.803 5.638-5.466 5.94.345.292.661.871.661 1.75v2.694c0 .323.22.697.82.58C20.563 22.096 24 17.598 24 12.296c0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick links</h3>
            <ul>
              <li className="mb-2">
                <a href="#home" className="hover:text-blue-300">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#features" className="hover:text-blue-300">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="#works" className="hover:text-blue-300">
                  How it works
                </a>
              </li>
              <Link to="/register">
                <li className="mb-2">
                  <a href="#" className="hover:text-blue-300">
                    Register now
                  </a>
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">Email: abdellahkarani@gmail.com</p>
            <p className="mb-2">Téléphone: +212 607848253</p>
            <p className="mb-2">
              Address: Construction Street, Rabat, Morocco
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 py-2 text-center">
          <p>
            &copy; <span>{new Date().getFullYear()}</span> ConstructionXpert
            Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
