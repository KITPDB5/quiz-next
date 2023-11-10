// TODO: Firebaseに問題を登録する
// TODO: コンポーネントに分けてリファクタリングする

import { useEffect, useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { app, db } from "@/lib/firebase";

export default function CreateQuiz() {
  const [question, setQuestion] = useState('');
  const [answerFormat, setAnswerFormat] = useState('trueOrFalse');
  const [answer, setAnswer] = useState('');
  const [desc, setDesc] = useState('');
  const [choice1, setChoice1] = useState('');
  const [choice2, setChoice2] = useState('');
  const [choice3, setChoice3] = useState('');

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  }

  const handleAnswerFormatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setAnswerFormat(event.target.value);
    }
  }

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  }

  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value);
  }

  const handleChoice1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoice1(event.target.value);
  }

  const handleChoice2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoice2(event.target.value);
  }

  const handleChoice3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoice3(event.target.value);
  }

  const saveQuizToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, "quizzes"), {
        question: question,
        answerFormat: answerFormat,
        answer: answer,
        description: desc,
        choices: [choice1, choice2, choice3]
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document to Firestore: ", e);
    }
  }

  // const saveQuizToFirestore = async () => {
  //   await db.collection('quizzes').add({
  //     question,
  //     answerFormat,
  //     answer
  //   });
  // }

  useEffect(() => {
    console.log(question);
    console.log(answerFormat);
    console.log(answer);
    console.log(desc);
    console.log(choice1);
    console.log(choice2);
    console.log(choice3);
  }, [question, answerFormat, answer, desc, choice1, choice2, choice3])

  return (
    <div>
      <p>create quiz</p>

      <div className="part">
        <p>1. 問題文を作成</p>
        <input type="text" onChange={handleQuestionChange} />
      </div>

      <div className="part">
        <p>2. 回答形式を選択</p>
        <label>
          <input type="radio" name="answer_format" value="trueOrFalse" checked={answerFormat === 'trueOrFalse'} onChange={handleAnswerFormatChange} />
          ○×形式
        </label>
        <label>
          <input type="radio" name="answer_format" value="threeQuestions" checked={answerFormat === 'threeQuestions'} onChange={handleAnswerFormatChange} />
          ３択形式
        </label>
      </div>

      <div className="part">
        <p>3. 回答を作成</p>
        {answerFormat === 'trueOrFalse' ? (
          <div>
            <p>正解は</p>
            <label>
              <input type="radio" name="answer" value="true" checked onChange={handleAnswerChange} />
              ○
            </label>
            <label>
              <input type="radio" name="answer" value="false" onChange={handleAnswerChange} />
              ×
            </label>
          </div>
        ) : (
          <div>
            <p>選択肢の作成と正解を選ぼう</p>
            <label>
              <input type="radio" name="answer" value="A" checked onChange={handleAnswerChange} />
              1. <input type="text" name="choise1" onChange={handleChoice1Change} />
            </label>
            <label>
              <input type="radio" name="answer" value="B" onChange={handleAnswerChange} />
              2. <input type="text" name="choice2" onChange={handleChoice2Change} />
            </label>
            <label>
              <input type="radio" name="answer" value="C" onChange={handleAnswerChange} />
              3. <input type="text" name="choice3" onChange={handleChoice3Change} />
            </label>
          </div>
        )}
        <p>解説文を作成</p>
        <input type="text" onChange={handleDescChange} />
      </div>

      <div>
        <button onClick={saveQuizToFirestore}>問題を登録</button>
      </div>
    </div>
  )
}
