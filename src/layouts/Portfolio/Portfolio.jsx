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
    description: "Plataforma colaborativa inspirada em fóruns de dúvidas e artigos técnicos. O projeto envolveu design responsivo com a metodologia 'Atomic Design', identidade visual própria e foco na experiência do usuário, integrações e testes de usabilidade.",
    link: "https://codetrouble.com.br/",
    image: codeTroubleImage,
  },
  {
    title: "CRJ Soluções",
    description: "Projeto de site institucional multipage para empresa de manutenção predial. Envolvedo estruturação de sitemap, definição de hierarquia de conteúdo, criação do layout responsivo (desktop e mobile), organização dos serviços com foco em condomínios e empresas, além da padronização visual para reforçar credibilidade, clareza e conversão via WhatsApp.",
    link: "https://crjsolucoes.com.br/",
    image: crjSolucoesImage,
  },
  {
    title: "Elevare",
    description: "Branding com foco na estética e na funcionalidade, especializado em design de embalagens para produtos de Medicina Tradicional Chinesa.",
    image: elevareImage,
  },
  {
    title: "Joys Gourmet",
    description: "Projeto de identidade visual para a Joy’s Gourmet, especializada em catering para eventos corporativos. O trabalho teve foco em sofisticação, elegância e credibilidade, com aplicação da marca em materiais físicos, uniformes, cardápios e base visual para futuras expansões como site e produtos físicos.",
    image: joysGourmetImage,
  },
  {
    title: "Prof Correa",
    description: "Landing page criada para apresentar a identidade visual e marca pessoal do Professor Corrêa. O projeto teve como foco acessibilidade, padronização de componentes e alto desempenho na web.",
    link: "dominio do professor correa",
    image: profCorreaImage,
  },
  {
    title: "Santé",
    description: "Projeto de landing page para uma clínica odontológica, com foco em transmitir credibilidade, acessibilidade e confiança por meio do design, aliado a um sistema de identidade visual consistente.",
    link: "dominio do projeto sante",
    image: santeImage,
  },
  {
    title: "Teacher Marceli",
    description: "Projeto focado na estruturação visual e estratégica da professora de inglês. Desenvolvimento da identidade visual, definição de hierarquia de conteúdo, organização da oferta e criação da landing page com foco em clareza, acolhimento e conversão.",
    link: "https://teachermarcelli.com.br/",
    image: teacherMarceliImage,
  },
  {
    title: "Toque AI",
    description: "Projeto de landing page e identidade visual para o produto digital Toque AI. O foco foi unir performance, clareza de proposta de valor e escalabilidade, validando componentes reutilizáveis e usabilidade prática.",
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
