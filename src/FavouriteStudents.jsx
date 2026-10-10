
import { useContext } from "react";
import { StudentContext } from "./StudentContext";

function FavouriteStudents() {
  const { favourites, removeFavourite } =
    useContext(StudentContext);

  return (
    <div className="page">
      {favourites.length === 0 ? (
        <p className="empty-message">
          No favourite students added yet
        </p>
      ) : (
        <ol className="student-list">
          {favourites.map((student) => (
            <li key={student.id}>
              <span>{student.name}</span>

              <button
                className="remove-btn"
                onClick={() => removeFavourite(student.id)}
              >
                Remove Favourite
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default FavouriteStudents;
