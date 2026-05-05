import { useState } from "react";
import "@layouts/Portfolio/Portfolio.scss";
// import LeftArrowImg from "@icons/LeftArrowIcon.png";
import RightArrowImg from "@icons/RightArrowIcon.png";


const projects = [
  { description: "Projeto A", link: "https://a.com" },
  { description: "Projeto B", link: "https://b.com" },
  { description: "Projeto C", link: "https://c.com" },
  { description: "Projeto D", link: "https://d.com" },
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((activeIndex - 1 + projects.length) % projects.length);
  const next = () =>
    setActiveIndex((activeIndex + 1) % projects.length);

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p>{projects[activeIndex].description}</p>
      <a href={projects[activeIndex].link} target="_blank" rel="noreferrer">
        Ver projeto
      </a>

      <div className="carousel">
        <button onClick={prev} className="arrow left rotate">
          <img src={RightArrowImg} alt="setinha pra voltar um card" />
        </button>

        {projects.map((proj, i) => {
          let className = "card";
          if (i === activeIndex) className += " active";
          else if (i === (activeIndex - 1 + projects.length) % projects.length)
            className += " left";
          else if (i === (activeIndex + 1) % projects.length)
            className += " right";
          else className += " hidden";

          return (
            <div key={i} className={className}>
              {proj.description}
            </div>
          );
        })}

        <button onClick={next} className="arrow right">
          {/* <RightUpArrow /> */}
          <img src={RightArrowImg} alt="setinha direita pra avançar um card" />
        </button>
      </div>
    </section>
  );
}
