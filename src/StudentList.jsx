
import { useContext } from "react";
import { StudentContext } from "./StudentContext";

const students = [
  { id: 1, name: "Bharath", rollNo: "ST101" },
  { id: 2, name: "Praveen", rollNo: "ST102" },
  { id: 3, name: "Kumar", rollNo: "ST103" },
  { id: 4, name: "Ramya", rollNo: "ST104" },
  { id: 5, name: "Monica", rollNo: "ST105" },
];

function StudentList() {
  const { favourites, addFavourite } =
    useContext(StudentContext);

  return (
    <div className="page">
      <ol className="student-list">
        {students.map((student) => {
          const isFavourite = favourites.some(
            (item) => item.id === student.id
          );

          return (
            <li key={student.id}>
              <span>{student.name}</span>

              <button
                className="add-btn"
                onClick={() => addFavourite(student)}
                disabled={isFavourite}
              >
                {isFavourite
                  ? "Added to Favourite"
                  : "Add to Favourite"}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default StudentList;
