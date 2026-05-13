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
import { useTranslation } from "react-i18next";

const projects = [
  { key: "codeTrouble", image: codeTroubleImage, link: "https://codetrouble.com.br/" },
  { key: "crjSolucoes", image: crjSolucoesImage, link: "https://crjsolucoes.com.br/" },
  { key: "elevare", image: elevareImage },
  { key: "joysGourmet", image: joysGourmetImage },
  { key: "profCorrea", image: profCorreaImage, link: "dominio do professor correa" },
  { key: "sante", image: santeImage, link: "dominio do projeto sante" },
  { key: "teacherMarceli", image: teacherMarceliImage, link: "https://teachermarcelli.com.br/" },
  { key: "toqueAi", image: toqueAiImage, link: "https://toqueai.com.br/" }
];

export default function Portfolio() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(Math.floor(projects.length / 2));

  const prev = () => setActiveIndex((activeIndex - 1 + projects.length) % projects.length);
  const next = () => setActiveIndex((activeIndex + 1) % projects.length);

  const leftIndex = (activeIndex - 1 + projects.length) % projects.length;
  const rightIndex = (activeIndex + 1) % projects.length;

  const activeProject = projects[activeIndex];

  return (
    <section className="portfolio">
      <h2>{t("portfolio.title")}</h2>
      <p>{t(`portfolio.projects.${activeProject.key}.description`)}</p>
      {activeProject.link && (
        <a href={activeProject.link} target="_blank" rel="noreferrer">
          {t("portfolio.viewProject")}
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
            style={{ backgroundImage: `url(${activeProject.image})` }}
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
