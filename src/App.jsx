import "./App.css";
import HackathonCard from "./components/HackathonCard";
import NavBar from "./components/NavBar";
import { HackathonProvider } from "./context/HackathonContext";
import DetailPage from "./pages/DetailPage/DetailPage";
import ListPage from "./pages/ListPage/ListPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <HackathonProvider>
        <div className="app-container poppins-regular">
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<ListPage />}></Route>
              <Route exact path="/create" element={<HackathonCard />}></Route>
              <Route exact path="/edit/:id" element={<HackathonCard />}></Route>
              <Route exact path="/detail" element={<DetailPage />}></Route>
            </Routes>
          </Router>
        </div>
      </HackathonProvider>
    </>
  );
}

export default App;
