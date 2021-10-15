import "./portfolioList.scss";

export default function PortfolioList({title, active, setSeleted, id}) {
    return (
        <li
          className={active ? "portfolioList active" : "portfolioList"}
          onClick={() => setSeleted(id)}
        >
          {title}
        </li>
    )
}
