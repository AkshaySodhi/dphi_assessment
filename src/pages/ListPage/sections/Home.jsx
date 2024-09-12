import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-section">
      <div className="left-div">
        <h1 className="hOne-heading">
          Accelerate Innovation with Global AI Challenges
        </h1>
        <h4 className="hFour-heading">
          AI Challenges at DPhi simulate real-world problems. It is a great
          place to put your AI/Data Science skills to test on diverse datasets
          allowing you to foster learning through competitions.
        </h4>
        <button className="create-btn"><Link to="/create">Create Challenge</Link></button>
      </div>
      <div className="right-div">
        <img src="Rocket.svg" alt="" />
      </div>
    </section>
  );
};

export default Home;
