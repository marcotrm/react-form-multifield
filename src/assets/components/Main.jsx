import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="main-container">
        <div className="left-main">
          <h3 className="slide-left">DI RAFFAELE SACCO</h3>
          <h1 className="zoom-in">CHEST E' MERAVIGLIA</h1>
          <p className="fade-in">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quas quod commodi odit voluptatem. Culpa, molestias amet, laboriosam
            blanditiis officia similique saepe impedit ratione modi voluptatum
            provident, vel numquam assumenda.
          </p>
        </div>
        <div className="right-main"></div>
      </div>
      <div className="btn-main-container"></div>
      <div className="btn-container">
        <button onClick={() => navigate("/menu")} className="slide-up">
          SCOPRI IL NOSTRO MENU
        </button>
      </div>
    </main>
  );
}
export default Main;
