import { useState } from "react";
import "./works.scss"
const data = [
  {
    id: "1",
    icon: "assets/fullstackMark.png",
    img: "assets/fullstackImage.png",
    title: "Fullstack",
    desc: "Na minha formação pela Trybe, o currículo foi desenhado em parceria com as maiores empresas de tecnologia do Brasil. Estudei JavaScript, HTML, CSS, React, Node, Express.js, SQL, Git, entre outras linguagens e frameworks.",
  },
  {
    id: "2",
    icon: "assets/frontIcon.jpg",
    img: "assets/frontImage.jpg",
    title: "Frontend",
    desc: "React, incluindo componentes, estado e eventos, componentes controlados, ciclo de vida, Router, Testes com RTL, Redux com React, Context API e React Hooks.",
  },
  {
    id: "3",
    icon: "assets/backIcon.png",
    img: "assets/backImage.jpg",
    title: "Backend",
    desc: "Bando de dados SQL e NoSQL, Node e express.js, arquitetura MVC, API, REST, JWT e FILE Upload, SOLID, ORM, Sockets e Heroku.",
  },
];


export default function Works() {
    const [currenctSlide, setCurrentSlide] = useState(0);
    const handleClick = (way) => {
      way === "left"
      ? setCurrentSlide(currenctSlide > 0 ? currenctSlide - 1 : 2)
      : setCurrentSlide(currenctSlide < data.length - 1 ? currenctSlide + 1 : 0)
    }
    return (
        <div className="works" id="works">
          <div className="slider" style={{transform: `translateX(-${currenctSlide * 100}vw)`}}>
            {
              data.map(d=> (
                <div className="container">
                  <div className="item">
                    <div className="left">
                      <div className="leftContainer">
                        <div className="imgContainer">
                          <img src={d.icon} alt="Marca fullstack" />
                        </div>
                        <h2>{d.title}</h2>
                        <p>
                          {d.desc}
                        </p>
                        <span>Projects</span>
                      </div>
                    </div>
                    <div className="right">
                      <img src={d.img} alt="Imagem de um fullstack" />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <img src="assets/arrow.png" alt="" className="arrow left" onClick={()=> handleClick("left")} />
          <img src="assets/arrow.png" alt="" className="arrow right" onClick={()=> handleClick()} />
        </div>
    )
}
