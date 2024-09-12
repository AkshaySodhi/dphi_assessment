import "./DetailPage.css";
import { BsBarChartFill } from "react-icons/bs";
import { SlClock } from "react-icons/sl";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useHackathons } from "../../context/HackathonContext";

const DetailPage = () => {
  const location = useLocation();
  const { deleteHackathon } = useHackathons();
  const { hackathonDetail } = location.state || {};
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteHackathon(hackathonDetail.id);
    navigate("/");
  }

  if (!hackathonDetail) {
    return <p className="not-found">Hackathon detail not found</p>;
  }
  return (
    <div className="detail-page-container">
      <div className="upper-div">
        <div className="upper-inner-div">
          <h5 className="detail-h5">
            <SlClock className="mx-4" />
            Starts on {new Date(
              hackathonDetail.startDate
            ).toLocaleString()}{" "}
            (Indian Standard Time)
          </h5>
          <h1 className="detail-h1 capitalize">{hackathonDetail.name}</h1>
          <h4 className="detail-h4 capitalize">{hackathonDetail.description}</h4>
          <button className="easy-btn capitalize">
            <BsBarChartFill />
            {hackathonDetail.level}
          </button>
        </div>
      </div>
      <div className="lower-div">
        <nav className="detail-nav-bar">
          <h2 className="detail-h2">Overview</h2>
          <div className="space-x-4">
            <button className="btns edit-btn">
              <Link to={`/edit/${hackathonDetail.id}`}>Edit</Link>
            </button>
            <button
              onClick={handleDelete}
              className="btns delete-btn"
            >
              Delete
            </button>
          </div>
        </nav>
        <main className="hackathon-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex quibusdam sequi adipisci rem? Officiis, odit hic! Libero illum aliquam necessitatibus deserunt ad vitae rerum, quae cum laboriosam? A, obcaecati.
          Tenetur eius et tempora architecto ullam? Enim error quam illum ut animi, fugit, voluptatem quis minus ratione laudantium quas placeat ex? Consequuntur deserunt inventore placeat rem, unde dolores voluptatem eius.
          Id eligendi hic provident qui nobis facere rem unde nihil. Sint, reiciendis nostrum aperiam aut ullam sit eius aliquid sequi quas dolores quia corporis ab eos necessitatibus fuga incidunt assumenda!
        </main>
      </div>
    </div>
  );
};

export default DetailPage;
