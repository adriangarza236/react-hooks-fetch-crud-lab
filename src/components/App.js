import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [questions, setQuestions] = useState([])
  const [page, setPage] = useState("List");

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleAddQuestion={handleAddQuestion} /> : <QuestionList questions={questions} setQuestions={setQuestions}/>}
    </main>
  );
}

export default App;
