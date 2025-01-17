import { useState } from "react";
import "./App.css";
import companiesJSON from "./companies.json";
import technologiesJSON from "./technologies.json";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [companies, setCompanies] = useState(companiesJSON);
  const [technologies, setTechnologies] = useState(technologiesJSON);

  return (
    <div id="App">
      <nav id="Navbar">
        <Link to={"/"} style={{ fontSize: "1.5rem" }}>
          StackTracker
        </Link>
      </nav>
      <div id="Page">
        <Routes>
          <Route
            path="/"
            element={<HomePage companies={companies}></HomePage>}
          ></Route>
          <Route
            path="/company/:companySlug"
            element={<CompanyPage companies={companies}></CompanyPage>}
          ></Route>
          <Route
            path="/tech/:slug"
            element={
              <TechnologyPage technologies={technologies}></TechnologyPage>
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
