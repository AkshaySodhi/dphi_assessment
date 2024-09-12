import { createContext, useState, useContext } from "react";

const HackathonContext = createContext();
export const useHackathons = () => useContext(HackathonContext);

export const HackathonProvider = ({ children }) => {
  const [hackathons, setHackathons] = useState([]);
  console.log(hackathons);

  const addHackathon = (newHackathon) => {
    const { startDate, endDate } = newHackathon;

    const isUpcoming = new Date(startDate) > new Date();
    const isActive = new Date(startDate) <= new Date() && new Date(endDate) >= new Date();
    newHackathon.status = isUpcoming ? "upcoming" : isActive ? "active" : "past";

    setHackathons([...hackathons, { ...newHackathon, id: Date.now() }]);
  };

  const updateHackathon = (updatedHackathon) => {
    const { startDate, endDate } = updatedHackathon;

    const isUpcoming = new Date(startDate) > new Date();
    const isActive = new Date(startDate) <= new Date() && new Date(endDate) >= new Date();
    updatedHackathon.status = isUpcoming ? "upcoming" : isActive ? "active" : "past";

    setHackathons(
      hackathons.map((hackathon) =>
        hackathon.id === updatedHackathon.id ? updatedHackathon : hackathon
      )
    );
  };

  const deleteHackathon = (id) => {
    setHackathons(hackathons.filter((hackathon) => hackathon.id !== id));
  };

  return (
    <HackathonContext.Provider
      value={{ hackathons, addHackathon, updateHackathon, deleteHackathon }}
    >
      {children}
    </HackathonContext.Provider>
  );
};
