import React, { useState } from "react";

const CategoryIcons = {
  "Front-end": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Back-end & APIs": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
    </svg>
  ),
  "Mobile & 3D": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M5.7646 7.99998L5.46944 7.26944C5.26255 6.75737 5.50995 6.17454 6.02202 5.96765L15.2939 2.22158C15.8059 2.01469 16.3888 2.26209 16.5956 2.77416L22.2147 16.6819C22.4216 17.194 22.1742 17.7768 21.6622 17.9837L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1772L11.0002 20.9586V21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V19.7303L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L5.7646 7.99998ZM8.00021 19H10.2089L8.00021 13.5333V19ZM6.00021 12.7558L4.32696 16.8972L6.00021 17.6084V12.7558ZM7.69842 7.44741L12.5683 19.5008L19.9858 16.5039L15.1159 4.45055L7.69842 7.44741ZM10.6766 9.47974C10.1645 9.68663 9.5817 9.43924 9.37481 8.92717C9.16792 8.4151 9.41532 7.83227 9.92739 7.62538C10.4395 7.41849 11.0223 7.66588 11.2292 8.17795C11.4361 8.69002 11.1887 9.27286 10.6766 9.47974Z"></path>
    </svg>
  ),
  "Données, DevOps & santé": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2C7.5817 2 4 4.0147 4 6.5V17.5C4 19.9853 7.5817 22 12 22C16.4183 22 20 19.9853 20 17.5V6.5C20 4.0147 16.4183 2 12 2ZM18 17.5C18 18.607 15.4183 20 12 20C8.5817 20 6 18.607 6 17.5V15.311C7.4336 16.0545 9.5723 16.5 12 16.5C14.4277 16.5 16.5664 16.0545 18 15.311V17.5ZM18 13.5C18 14.607 15.4183 16 12 16C8.5817 16 6 14.607 6 13.5V11.311C7.4336 12.0545 9.5723 12.5 12 12.5C14.4277 12.5 16.5664 12.0545 18 11.311V13.5ZM18 9.5C18 10.607 15.4183 12 12 12C8.5817 12 6 10.607 6 9.5V6.5C6 5.393 8.5817 4 12 4C15.4183 4 18 5.393 18 6.5V9.5Z" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Front-end": [
      "Interfaces web avec JavaScript, Vue 3 et React",
      "Intégration responsive en HTML, CSS et Tailwind CSS",
      "Visualisations 3D interactives avec Three.js",
    ],
    "Back-end & APIs": [
      "Applications et APIs avec Node.js, Express et PHP",
      "Conception d'APIs et architecture client-serveur",
      "Développement avec Python, Java et C++",
    ],
    "Mobile & 3D": [
      "Applications mobiles cross-platform avec React Native et Expo",
      "Intégration d'APIs, stockage local et fonctionnalités natives",
      "Expériences interactives et visualisation de données en 3D",
    ],
    "Données, DevOps & santé": [
      "PostgreSQL, SQLite, Firebase et PocketBase",
      "Déploiement avec Docker et Portainer sur Linux",
      "Systèmes d'information de santé, interopérabilité et RGPD",
      "Bases en analyse réseau avec Wireshark et Nmap",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="relative z-10 text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        Ce que je fais
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl border border-[var(--white-icon-tr)] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleItem(category)}
                aria-expanded={openItem === category}
                className="block w-full p-0 text-left hover:bg-opacity-80 transition-all cursor-pointer"
              >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>
              </button>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
