import { collection, getDocs, getFirestore, updateDoc,doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { app } from '../../Firebase/Firebase';
import './Solve.css'

function Solve() {
  const db = getFirestore(app);
  const [questions, setQuestions] = useState([]);
  const [answer,setAnswer]=useState('');
  const [selected,setSelected]=useState(null);
  const [submit,setSubmit]=useState(false)
  const [viewAnswer,setViewAnswer]=useState(null)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        
        const colRef = collection(db, 'questions');
        const snapshot = await getDocs(colRef);
        const questionData = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setQuestions(questionData);
        console.log(questions.status)
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  
  const handleSkip=()=>{
    setSelected(null);
  }

  const storeAnswer=(event)=>{
    setAnswer(event.target.value)

  }

  const addAnswer=async(questionId)=>{
    setQuestions(questions=>questions.map(q=>q.id==questionId?{...q,answer,status:true}:{...q}))
    const Reference=doc(db,'questions',questionId);
    await updateDoc(Reference,{
      answer,
      status:true
    });
    setSelected(null);
    
    


  }

  return (
    <div className="product-grid">
      <h1 className='head'>Lets's Solve</h1>
      {questions.map((question,i) => (
        <div className="product" key={i}>
          

          {<p>{question.question}</p>}
          {selected==i?
          <div className='answer_container'>
          <div className='answer-field'>
          <textarea className='answer-box' type='text' rows={4} cols={135} onChange={storeAnswer}></textarea>
          </div>
          <button className='submit_button' onClick={()=>{setSubmit(i);addAnswer(question.id)}}>Submit Answer</button>
          <button className='skip' onClick={handleSkip}>Skip Question</button>
          </div>
          
          
          :<div>
            {question.status?
            <div>
            
            {answer==i?
            <>
            <h4>Answer</h4>
            <p>{question.answer}</p>
            <button className='hide-btn' onClick={()=>setAnswer()}>Hide Answer</button>
            </>
            :
            <><button className='view-ans-btn'  onClick={()=>setAnswer(i)}>View Answer</button>
            </>
            }
            </div>
            
            :
            <button className='start-answering-btn' onClick={()=>{setSelected(i)}}>Start Answering</button>
            }
            
            

          </div>
          
          

          }

        </div>
      ))}
    </div>
  );
}

export default Solve;
