import { useState } from "react";
import { Link } from "react-router-dom";

import { useHackathons } from "../../../context/HackathonContext";
import HackathonItem from "../../../components/HackathonItems";
import Dropdown from "../../../components/Dropdown";
import SearchBar from "../../../components/Searchbar";
import AddedFilters from "../../../components/AddedFilters";

const Explore = () => {
  const { hackathons } = useHackathons();

  const [query, setQuery] = useState("");
  const [filterLevel, setFilterLevel] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const [dropOpen, setDropOpen] = useState(false);

  const filteredHackathons = hackathons.filter((h) => query ? h.name.includes(query) : true).filter((h) => filterLevel ? h.level == filterLevel : true).filter((h) => !filterStatus || filterStatus == "all" ? true : h.status == filterStatus);
  return (
    <>
      <div className="bg-[rgb(0,42,59)] px-0 py-[50px] relative">
        <div className="py-[30px] flex flex-col items-center">
          <p className="text-4xl text-white font-semibold text-center pb-[60px]">Explore Challenges</p>
          <SearchBar query={query} handleChange={setQuery} dropOpen={dropOpen} handleDropToggle={() => setDropOpen((prev) => !prev)} />
          <AddedFilters level={filterLevel} status={filterStatus} onRemoveLevel={setFilterLevel} onRemoveStatus={setFilterStatus} />
          {dropOpen && <Dropdown level={filterLevel} status={filterStatus} handleLevelChange={setFilterLevel} handleStatusChange={setFilterStatus} />}
        </div>
      </div>

      <div className="hackathon-card-mapping space-y-16 min-h-52">
        <div className="grid grid-cols-3 gap-20 justify-items-center content-center">
          {filteredHackathons.map((hackathon) => (
            <Link
              to="/detail"
              key={hackathon.id}
              state={{ hackathonDetail: hackathon }}
            >
              <HackathonItem
                hackathon={hackathon}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Explore;


