import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    fullstackPortfolio,
    frontendPortfolio,
    backendPortfolio,
} from "../../data";

export default function Portfolio() {
    const [selected, setSeleted] = useState("fullstack")
    const [data, setData] = useState([]);
    const list = [
        {
            id: "fullstack",
            title: "Fullstack"
        },
        {
            id: "frontend",
            title: "Frontend",
        },
        {
            id: "backend",
            title: "Backend",
        },
    ];

    useEffect(() => {
        switch(selected){
          case "fullstack":
            setData(fullstackPortfolio);
            break;
          case "frontend":
            setData(frontendPortfolio);
            break;
          case "backend":
            setData(backendPortfolio);
            break;
          default:
              break;
        }

    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
          <h1>Portfólio</h1>
          <ul>
            {list.map(item => (
                <PortfolioList
                  title={item.title}
                  active={selected=== item.id}
                  setSeleted={setSeleted}
                  id={item.id}
                />
            ))}
          </ul>
          <div className="container">
            {data.map(d => (
              <div className="item">
                <img src={d.img} alt="foto de página" />
                <h3>{d.title}</h3>
              </div>
            ))}
           
          </div>
        </div>
    )
}
