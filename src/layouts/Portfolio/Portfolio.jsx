import { useState } from "react";
import "@layouts/Portfolio/Portfolio.scss";
import RightArrowImg from "@icons/RightArrowIcon.png";
import codeTroubleImage from "@images/codeTroubleImage.png";
import crjSolucoesImage from "@images/crjSolucoesImage.png";
import elevareImage from "@images/elevareImage.png";
import joysGourmetImage from "@images/joysGourmetImage.png";
import profCorreaImage from "@images/profCorreaImage.png";
import santeImage from "@images/santeImage.png";
import teacherMarceliImage from "@images/teacherMarceliImage.png";
import toqueAiImage from "@images/toqueAiImage.png";

const projects = [
  {
    title: "Code Trouble",
    description: "Projeto Code Trouble",
    link: "https://codetrouble.com.br/",
    image: codeTroubleImage,
  },
  {
    title: "CRJ Soluções",
    description: "Projeto CRJ Soluções",
    link: "https://b.com",
    image: crjSolucoesImage,
  },
  {
    title: "Elevare",
    description: "Projeto Elevare",
    link: "https://c.com",
    image: elevareImage,
  },
  {
    title: "Joys Gourmet",
    description: "Projeto Joys Gourmet",
    link: "https://d.com",
    image: joysGourmetImage,
  },
  {
    title: "Prof Correa",
    description: "Projeto Prof Correa",
    link: "https://e.com",
    image: profCorreaImage,
  },
  {
    title: "Santé",
    description: "Projeto Santé",
    link: "https://f.com",
    image: santeImage,
  },
  {
    title: "Teacher Marceli",
    description: "Projeto Teacher Marceli",
    link: "https://g.com",
    image: teacherMarceliImage,
  },
  {
    title: "Toque AI",
    description: "Projeto Toque AI",
    link: "https://toqueai.com.br/",
    image: toqueAiImage,
  },
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(projects.length / 2));

  const prev = () =>
    setActiveIndex((activeIndex - 1 + projects.length) % projects.length);

  const next = () =>
    setActiveIndex((activeIndex + 1) % projects.length);

  const leftIndex = (activeIndex - 1 + projects.length) % projects.length;
  const rightIndex = (activeIndex + 1) % projects.length;

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p>{projects[activeIndex].description}</p>
      {projects[activeIndex].link && (
        <a href={projects[activeIndex].link} target="_blank" rel="noreferrer">
          Ver projeto
        </a>
      )}

      <div className="carousel">
        <button onClick={prev} className="arrow left rotate alignL">
          <img src={RightArrowImg} alt="setinha pra voltar um card" />
        </button>

        <div className="cards-wrapper">
          <div
            className="card left"
            style={{ backgroundImage: `url(${projects[leftIndex].image})` }}
          />
          <div
            className="card active"
            style={{ backgroundImage: `url(${projects[activeIndex].image})` }}
          />
          <div
            className="card right"
            style={{ backgroundImage: `url(${projects[rightIndex].image})` }}
          />
        </div>

        <button onClick={next} className="arrow right alignR">
          <img src={RightArrowImg} alt="setinha direita pra avançar um card" />
        </button>
      </div>
    </section>
  );
}
