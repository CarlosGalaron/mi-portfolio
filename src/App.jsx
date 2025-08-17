import { useState } from "react";

export default function Portfolio() {
  const [lang, setLang] = useState("es");

  const translations = {
    es: {
      name: "Carlos Galarón Pérez",
      role: "Desarrollador Web",
      contact: "// Madrid, España | carlos.galaron@gmail.com | 696 613 333",
      github: "github.com/CarlosGalaron",
      skills: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Angular", "Svelte", "Figma"],
        backend: ["Java", "Python", "Spring", "Django", "MySQL", "MongoDB"],
        utilities: ["Git", "Linux", "Docker"],
        soft: ["Trabajo en equipo", "Resolución de problemas", "Habilidades de comunicación", "Inteligencia emocional"]
      },
      experience: [
        { role: "Profesor de Educación Secundaria", years: "2010 – 2023", description: "Todas las materias en institutos, academias y como autónomo." },
        { role: "Arqueólogo", years: "2016 – 2019", description: "Especializado en evolución humana." },
        { role: "Director de cuentas y tesorero", years: "2013 – 2018", description: "Born to Learn (ONG orientada a la educación)." }
      ],
      projects: [
        { name: "Dashboard dinámico Titanic", link: "https://github.com/CarlosGalaron/TitanicDinamicDashboardsSvelte" },
        { name: "Tienda online de intercambio de libros", frontend: "https://github.com/CarlosGalaron/FrontendTiendaOnline", backend: "https://github.com/CarlosGalaron/BackendTiendaOnline" },
        { name: "Juego RPG DragonLance", node: "https://github.com/CarlosGalaron/NodeDragonLance", react: "https://github.com/CarlosGalaron/ReactDragonLance" }
      ],
      education: {
        tech: [
          "FP Superior en Desarrollo de Aplicaciones Web | Instituto Nebrija",
          "AWS Academy | Cloud Foundation",
          "Fundamentos y Desarrollo con Next.js | OpenWebinars"
        ],
        other: [
          "Máster en Educación | Universidad Camilo José Cela",
          "Máster en Antropología física forense | Universidad de Granada",
          "Máster de Arqueología | Olduvai Gorge International Field School, UNC Greensboro",
          "Grado en Historia | Universidad Complutense de Madrid",
          "Diseño web y herramientas aplicadas a la enseñanza | Magister",
          "Plataformas de gestión escolar y sistemas operativos no propietarios | Magister"
        ]
      }
    },
    en: {
      name: "Carlos Galarón Pérez",
      role: "Web Developer",
      contact: "// Madrid, Spain | carlos.galaron@gmail.com | +34 696 613 333",
      github: "github.com/CarlosGalaron",
      skills: {
        frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Angular", "Svelte", "Figma"],
        backend: ["Java", "JavaScript", "Python", "Spring", "Node", "Django", "MySQL", "MongoDB"],
        utilities: ["Git", "Linux", "Docker"],
        soft: ["Teamwork", "Problem solving", "Communication skills", "Emotional intelligence"]
      },
      experience: [
        { role: "High School Teacher", years: "2010 – 2023", description: "Taught multiple subjects in schools, academies, and as a freelancer." },
        { role: "Archaeologist", years: "2016 – 2019", description: "Specialized in human evolution." },
        { role: "Account Manager & Treasurer", years: "2013 – 2018", description: "Born to Learn (NGO focused on education)." }
      ],
      projects: [
        { name: "Titanic Dynamic Dashboard", link: "https://github.com/CarlosGalaron/TitanicDinamicDashboardsSvelte" },
        { name: "Book Exchange Online Store", frontend: "https://github.com/CarlosGalaron/FrontendTiendaOnline", backend: "https://github.com/CarlosGalaron/BackendTiendaOnline" },
        { name: "DragonLance RPG Game", node: "https://github.com/CarlosGalaron/NodeDragonLance", react: "https://github.com/CarlosGalaron/ReactDragonLance" }
      ],
      education: {
        tech: [
          "Higher Vocational Training in Web Application Development | Instituto Nebrija",
          "AWS Academy | Cloud Foundation",
          "Fundamentals and Development with Next.js | OpenWebinars"
        ],
        other: [
          "Master’s in Education | Universidad Camilo José Cela",
          "Master’s in Forensic Physical Anthropology | Universidad de Granada",
          "Master’s in Archaeology | Olduvai Gorge International Field School, UNC Greensboro",
          "History Degree | Universidad Complutense de Madrid",
          "Web Design and Internet Tools for Teaching | Magister",
          "Web-based School Management Platforms & Open-source Operating Systems | Magister"
        ]
      }
    }
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-gray-300 font-mono p-6">
      {/* Botones de idioma */}
      <div className="flex gap-2 mb-6">
        <button onClick={() => setLang("es")} className="w-8 h-6 cursor-pointer">
          <img src="/flags/es.png" alt="Español" />
        </button>
        <button onClick={() => setLang("en")} className="w-8 h-6 cursor-pointer">
          <img src="/flags/uk.png" alt="English" />
        </button>
      </div>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-cyan-400">{t.name}</h1>
        <p className="text-lg text-gray-400">{t.role}</p>
        <p className="text-green-500 mt-2">{t.contact}</p>
        <a
          href="https://github.com/CarlosGalaron"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 underline hover:text-purple-300"
        >
          {t.github}
        </a>
      </header>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl text-yellow-400 mb-2">// {lang === "es" ? "Habilidades" : "Skills"}</h2>
        <div className="bg-[#252526] p-4 rounded-lg shadow-md">
          <p className="text-blue-400">Frontend:</p>
          <p className="ml-4">{t.skills.frontend.join(", ")}</p>
          <p className="text-blue-400 mt-2">Backend:</p>
          <p className="ml-4">{t.skills.backend.join(", ")}</p>
          <p className="text-blue-400 mt-2">{lang === "es" ? "Utilidades:" : "Utilities:"}</p>
          <p className="ml-4">{t.skills.utilities.join(", ")}</p>
          <p className="text-blue-400 mt-2">{lang === "es" ? "Habilidades personales:" : "Soft Skills:"}</p>
          <p className="ml-4">{t.skills.soft.join(", ")}</p>
        </div>
      </section>

      {/* Experiencia */}
      <section className="mb-10">
        <h2 className="text-2xl text-red-400 mb-2">// {lang === "es" ? "Experiencia Profesional" : "Work Experience"}</h2>
        <div className="space-y-4">
          {t.experience.map((exp, i) => (
            <div key={i} className="bg-[#252526] p-4 rounded-lg">
              <p className="text-cyan-400 font-semibold">{exp.role}</p>
              <p className="text-sm text-gray-400">{exp.years}</p>
              <p className="mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proyectos */}
      <section className="mb-10">
        <h2 className="text-2xl text-green-400 mb-2">// {lang === "es" ? "Proyectos" : "Projects"}</h2>
        <div className="space-y-4">
          {t.projects.map((proj, i) => (
            <div key={i} className="bg-[#252526] p-4 rounded-lg">
              <p className="text-purple-400 font-semibold">{proj.name}</p>
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                  {proj.link}
                </a>
              )}
              {proj.frontend && (
                <p>
                  <span className="text-gray-400">Frontend: </span>
                  <a href={proj.frontend} className="text-blue-400 underline">{proj.frontend}</a>
                </p>
              )}
              {proj.backend && (
                <p>
                  <span className="text-gray-400">Backend: </span>
                  <a href={proj.backend} className="text-blue-400 underline">{proj.backend}</a>
                </p>
              )}
              {proj.node && (
                <p>
                  <span className="text-gray-400">Node: </span>
                  <a href={proj.node} className="text-blue-400 underline">{proj.node}</a>
                </p>
              )}
              {proj.react && (
                <p>
                  <span className="text-gray-400">React: </span>
                  <a href={proj.react} className="text-blue-400 underline">{proj.react}</a>
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Educación */}
      <section>
        <h2 className="text-2xl text-pink-400 mb-2">// {lang === "es" ? "Educación" : "Education"}</h2>
        <div className="bg-[#252526] p-4 rounded-lg">
          <p className="text-blue-400">{lang === "es" ? "Formación técnica:" : "Technical Education:"}</p>
          <ul className="ml-6 list-disc">
            {t.education.tech.map((ed, i) => (
              <li key={i}>{ed}</li>
            ))}
          </ul>
          <p className="text-blue-400 mt-3">{lang === "es" ? "Otra formación:" : "Other Education:"}</p>
          <ul className="ml-6 list-disc">
            {t.education.other.map((ed, i) => (
              <li key={i}>{ed}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
