import React, { useState } from 'react'
import './Ask.css'
import { app } from '../../Firebase/Firebase'
import {getFirestore,collection,addDoc} from 'firebase/firestore'
function Ask() {

  const [question,setQuestion]=useState('')
  const db = getFirestore(app);
  const handleData=(event)=>{
    setQuestion(event.target.value);
    // console.log(event.target.value);

  }

  const addData= async()=>{
    const docRef=collection(db,'questions')
    addDoc(docRef,{
      question:question,
      answer:'',
      status:false
    }).then(()=>{}).catch((e)=>{console.log(e);})
    // setQuestion('')
  }

  const handleBack=()=>{
    console.log("hello")
    window.location='/Home'
  }



  return (
    <div className='ask-page'>
        <h1 className='ask-head'>Ask Your Problem</h1>
        <textarea  type='text' rows={20} cols={100} placeholder='Enetr Your Question'spellCheck='false' onChange={handleData}/>
        <div className='buttons'>
          <button className='question_submit_btn' onClick={addData}>Submit</button>
          <button className='back' onClick={handleBack}>Back</button>
        </div>
        
      
    </div>
  )
}

export default Ask
