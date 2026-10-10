
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { StudentProvider } from "./StudentContext";
import StudentList from "./StudentList";
import FavouriteStudents from "./FavouriteStudents";
import "./style.css";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <div className="app-container">
          <nav className="navbar">
            <Link to="/">List of Students</Link>
            <Link to="/favourites">Favourite Students</Link>
          </nav>

          <main>
            <Routes>
              <Route path="/" element={<StudentList />} />
              <Route
                path="/favourites"
                element={<FavouriteStudents />}
              />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
