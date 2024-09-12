import firstIcon from "../../../assets/statisticsIcon/firsticon.svg";
import secondIcon from "../../../assets/statisticsIcon/secondicon.svg";
import thirdIcon from "../../../assets/statisticsIcon/thirdicon.svg";

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="inner-div">
        <img src={firstIcon} alt="" />
        <div className="ml-[22px] space-y-2">
          <h2 className="hTwo-heading">100K+</h2>
          <h5 className="hFive-heading">AI model submissions</h5>
        </div>
      </div>
      <span className="w-[1px] h-9 border border-[#C4C4C4]"></span>
      <div className="inner-div">
        <img src={secondIcon} alt="" />
        <div className="ml-[22px] space-y-2">
          <h2 className="hTwo-heading">50K+</h2>
          <h5 className="hFive-heading">Data Scientists</h5>
        </div>
      </div>
      <span className="w-[1px] h-9 border border-[#C4C4C4]"></span>
      <div className="inner-div">
        <img src={thirdIcon} alt="" />
        <div className="ml-[22px] space-y-2">
          <h2 className="hTwo-heading">100+</h2>
          <h5 className="hFive-heading">AI Challenges hosted</h5>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
