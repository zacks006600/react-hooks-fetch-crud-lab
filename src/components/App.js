import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
//import db from "../../db.json"
function App() {
  const [page, setPage] = useState("List");
  //const [data,setData]=useState(db.questions)
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList  />}
    </main>
  );
}

export default App;