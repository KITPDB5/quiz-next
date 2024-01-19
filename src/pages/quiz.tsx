import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import styles from '@/styles/Quiz.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function CreateQuiz() {
  const [question, setQuestion] = useState('')
  const [answerFormat, setAnswerFormat] = useState('trueOrFalse')
  const [answer, setAnswer] = useState<boolean | string>(true)
  const [desc, setDesc] = useState('')
  const [choice1, setChoice1] = useState('')
  const [choice2, setChoice2] = useState('')
  const [choice3, setChoice3] = useState('')

  const [savedQuiz, setSavedQuiz] = useState<QuizData | null>(null)
  // const [showMessage, setShowMessage] = useState(false)

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value)
  }

  const handleAnswerFormatChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.checked) {
      setAnswerFormat(event.target.value)
    }
  }

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setAnswer(value === 'true' ? true : value === 'false' ? false : value)
  }

  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value)
  }

  const handleChoice1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoice1(event.target.value)
  }

  const handleChoice2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoice2(event.target.value)
  }

  const handleChoice3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoice3(event.target.value)
  }

  type QuizData = {
    answerFormat: string
    difficulty: string
    question: string
    answerChoices: boolean[] | string[]
    answer: string | boolean
    description: string
    totalAttempts: number
    correctAttempts: number
  }

  const saveQuizToFirestore = async () => {
    try {
      // answerFormatに応じてanswerChoicesのデータを整形
      const answerChoicesToSave =
        answerFormat === 'trueOrFalse'
          ? [true, false]
          : [choice1, choice2, choice3]

      const quizData = {
        answerFormat: answerFormat,
        difficulty: 'Beginner',
        question: question,
        answerChoices: answerChoicesToSave,
        answer: answer,
        description: desc,
        totalAttempts: 0,
        correctAttempts: 0,
      }

      const docRef = await addDoc(collection(db, 'quizzes'), quizData)
      console.log('Document written with ID: ', docRef.id)

      setSavedQuiz(quizData)
    } catch (e) {
      console.error('Error adding document to Firestore: ', e)
    }
  }

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
            onChange={event => {
              handleAnswerFormatChange(event)
              setAnswer(true)
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
            onChange={event => {
              handleAnswerFormatChange(event)
              setAnswer('A')
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
              <input
                type="radio"
                name="answer"
                value="true"
                checked={answer === true}
                onChange={handleAnswerChange}
              />
              ○
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="false"
                checked={answer === false}
                onChange={handleAnswerChange}
              />
              ×
            </label>
          </div>
        ) : (
          <div>
            <p>選択肢の作成と正解を選ぼう</p>
            <label>
              <input
                type="radio"
                name="answer"
                value="A"
                checked={answer === 'A'}
                onChange={handleAnswerChange}
              />
              A.{' '}
              <input
                type="text"
                name="choise1"
                onChange={handleChoice1Change}
              />
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="B"
                checked={answer === 'B'}
                onChange={handleAnswerChange}
              />
              B.{' '}
              <input
                type="text"
                name="choice2"
                onChange={handleChoice2Change}
              />
            </label>
            <label>
              <input
                type="radio"
                name="answer"
                value="C"
                checked={answer === 'C'}
                onChange={handleAnswerChange}
              />
              C.{' '}
              <input
                type="text"
                name="choice3"
                onChange={handleChoice3Change}
              />
            </label>
          </div>
        )}
        <p>4. 解説文を作成</p>
        <input type="text" onChange={handleDescChange} />
      </div>

      <div>
        <button onClick={saveQuizToFirestore}>クイズを登録</button>
      </div>

      {savedQuiz && (
        <div className={styles.quizConfirmationContainer}>
          <Image src="/cracker.png" alt="cracker" width={80} height={80} />
          <h1>クイズを登録しました！</h1>
          <p>問題: {savedQuiz.question}</p>
          <p>
            回答形式:{' '}
            {savedQuiz.answerFormat === 'trueOrFalse'
              ? '○×形式'
              : savedQuiz.answerFormat === 'threeQuestions'
                ? '3択形式'
                : savedQuiz.answerFormat}
          </p>
          <p>
            選択肢:{' '}
            {savedQuiz.answerChoices.length === 3
              ? savedQuiz.answerChoices
                  .map((choice, index) => {
                    const prefix = ['A', 'B', 'C'][index]
                    return `${prefix}: ${choice}`
                  })
                  .join(', ')
              : savedQuiz.answerChoices
                  .map(choice =>
                    typeof choice === 'boolean' ? (choice ? '○' : '×') : choice,
                  )
                  .join(', ')}
          </p>
          <p>
            解答:{' '}
            {typeof savedQuiz.answer === 'boolean'
              ? savedQuiz.answer
                ? '○'
                : '×'
              : savedQuiz.answer}
          </p>
          <p>解説: {savedQuiz.description}</p>

          <a href="/quiz" className={styles.button}>
            もう一問作成する
          </a>
          <Link href="/" className={styles.linkText}>トップにもどる</Link>
        </div>
      )}
    </div>
  )
}
