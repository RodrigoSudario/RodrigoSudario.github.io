import "./intro.scss"
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
          backDelay: 1500,
          backSpeed: 60,
          showCursor: true,
          strings: ['Frontend', 'Backend', 'Fullstack' ]
        });
    }, [])

    return (
        <div className="intro" id="intro">
          <div className="left">
            <div className="imgContainer">
              <img src="assets/fotoRodrigoCana.jpg" alt="foto do desenvolvedor" />
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <h2>Olá pessoal, me chamo</h2>
              <h1>Rodrigo</h1>
              <h3>Desenvolvedor <span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
                <img src="assets/down.png" alt="seta para baixo" />
            </a>
          </div>
        </div>
    )
}
