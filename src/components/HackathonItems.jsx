/* eslint-disable react/prop-types */
import Countdown from "react-countdown";
import "./style/Cards.css";
import { FiCheckCircle } from "react-icons/fi";

const HackathonItem = ({ hackathon }) => {
  const { endDate, image, name, startDate, status } = hackathon;

  const timer = ({ days, hours, minutes }) => {
    if (status === "past") return (<h1 className="font-semibold" >Ended on {new Date(endDate).toDateString()}</h1>)
    return (
      <div className="timer text-center">
        <div className="timer-item">
          <span>{days} </span>Days
        </div>
        <span> : </span>
        <div className="timer-item">
          <span>{hours} </span>Hours
        </div>
        <span> : </span>
        <div className="timer-item">
          <span>{minutes} </span>Mins
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img className="card-image" src={image} alt={name} />
      </div>
      <div className="main-card-content">
        <div className="card-content">
          <h5
            className={`status-badge ${status} capitalize`}
          >
            {status}
          </h5>
          <h3 className="card-title">{name}</h3>
          <div className="timer-wrapper">
            {status === "upcoming" && <p>Starts in</p>}
            {status === "active" && <p>Ends in</p>}
            <Countdown
              date={status === "active" ? endDate : startDate}
              renderer={timer}
            />
          </div>
          <button className={`participate-button ${status === "past" && "grayscale"}`}>
            <FiCheckCircle className="mr-2" />
            Participate Now
          </button>
        </div>
      </div>
    </div >
  );
};

export default HackathonItem;
