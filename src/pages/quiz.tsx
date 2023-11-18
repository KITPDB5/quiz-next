import { useEffect, useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import styles from "@/styles/quiz.module.css"

export default function CreateQuiz() {
  const [question, setQuestion] = useState('');
  const [answerFormat, setAnswerFormat] = useState('trueOrFalse');
  const [answer, setAnswer] = useState<boolean | string>(true);
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
    const value = event.target.value;
    setAnswer(value === 'true' ? true : value === 'false' ? false : value);
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
    // answerFormatに応じてanswerChoicesのデータを整形
    const answerChoicesToSave = answerFormat === 'trueOrFalse' ? [true, false] : [choice1, choice2, choice3];

    const docRef = await addDoc(collection(db, "quizzes"), {
      answerFormat: answerFormat,
      difficulty: "Beginner",
      question: question,
      answerChoices: answerChoicesToSave,
      answer: answer,
      description: desc,
      totalAttempts: 0,
      correctAttempts: 0
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document to Firestore: ", e);
  }
}

  // useEffect(() => {
  //   console.log(question);
  //   console.log(answerFormat);
  //   console.log(answer);
  //   console.log(desc);
  //   console.log(choice1);
  //   console.log(choice2);
  //   console.log(choice3);
  // }, [question, answerFormat, answer, desc, choice1, choice2, choice3])

  return (
    <div className={styles.container}>
      <p>create quiz</p>

      <div className="part">
        <p>1. 問題文を作成</p>
        <input type="text" onChange={handleQuestionChange} />
      </div>

      <div className="part">
        <p>2. 回答形式を選択</p>
        <label>
        <input
          type="radio"
          name="answer_format"
          value="trueOrFalse"
          checked={answerFormat === 'trueOrFalse'}
          onChange={(event) => {
            handleAnswerFormatChange(event);
            setAnswer(true);
          }}
        />
          ○×形式
        </label>
        <label>
        <input
          type="radio"
          name="answer_format"
          value="threeQuestions"
          checked={answerFormat === 'threeQuestions'}
          onChange={(event) => {
            handleAnswerFormatChange(event);
            setAnswer('A');
          }}
        />
        ３択形式
        </label>
      </div>

      <div className="part">
        <p>3. 解答を作成</p>
        {answerFormat === 'trueOrFalse' ? (
          <div>
            <p>正解は</p>
            <label>
              <input type="radio" name="answer" value="true" checked={answer === true} onChange={handleAnswerChange} />
              ○
            </label>
            <label>
              <input type="radio" name="answer" value="false" checked={answer === false} onChange={handleAnswerChange} />
              ×
            </label>
          </div>
        ) : (
          <div>
            <p>選択肢の作成と正解を選ぼう</p>
            <label>
              <input type="radio" name="answer" value="A" checked={answer === 'A'} onChange={handleAnswerChange} />
              A. <input type="text" name="choise1" onChange={handleChoice1Change} />
            </label>
            <label>
              <input type="radio" name="answer" value="B" checked={answer === 'B'} onChange={handleAnswerChange} />
              B. <input type="text" name="choice2" onChange={handleChoice2Change} />
            </label>
            <label>
              <input type="radio" name="answer" value="C" checked={answer === 'C'} onChange={handleAnswerChange} />
              C. <input type="text" name="choice3" onChange={handleChoice3Change} />
            </label>
          </div>
        )}
        <p>4. 解説文を作成</p>
        <input type="text" onChange={handleDescChange} />
      </div>

      <div>
        <button onClick={saveQuizToFirestore}>クイズを登録</button>
      </div>
    </div>
  )
}
