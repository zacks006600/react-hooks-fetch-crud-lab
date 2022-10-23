import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({data}) {
  const [questions,setQuestions]=useState([])
useEffect(()=>{

fetch('http://localhost:4000/questions').then(data=>data.json()).then((res)=>{
setQuestions(res)
})

},[])
const onDelete=(id)=>{
  fetch(`http://localhost:4000/questions/${id}`,{
    method: 'DELETE',
    
  }).then(data=>data.json()).then(()=>
   { const updated=questions.filter(q=>q.id!=id)
  
  setQuestions(updated)
  }
    
    )
}
const handleAnswers=(id,correctIndex)=>{
  fetch(`http://localhost:4000/questions/${id}`,{
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({correctIndex}),
  }).then(data=>data.json()).then(data=>{
const updated=questions.map(item=>{
  if(item.id===data.id){
    return data
  }return item
})
console.log(updated,"after upadat");
setQuestions(updated)

  })
}

  return (
    <section>
      <h1>Quiz Questions</h1>
      {questions?questions.map((item,i)=><QuestionItem key={i}onSelectChange={handleAnswers} question={item} onDelete={()=>onDelete(item.id)}/> ):[]}
    </section>
  );
}

export default QuestionList;