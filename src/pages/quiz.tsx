// TODO: Firebaseに問題を登録する
// TODO: コンポーネントに分けてリファクタリングする

import { useEffect, useState } from 'react'

export default function CreateQuiz() {
  const [question, setQuestion] = useState('');
  const [answerFormat, setAnswerFormat] = useState('trueOrFalse');
  const [answer, setAnswer] = useState('');

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  }

  const handleAnswerFormatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswerFormat(event.target.value);
  }

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  }

  // useEffect(() => {
  //   console.log(question);
  //   console.log(answerFormat);
  //   console.log(answer);
  // }, [question, answerFormat, answer])

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
          <input type="radio" name="answer_format" value="true_or_false" checked={answerFormat === 'trueOrFalse'} onChange={handleAnswerFormatChange} />
          ○×形式
        </label>
        <label>
          <input type="radio" name="answer_format" value="three_questions" checked={answerFormat === 'threeQuestions'} onChange={handleAnswerFormatChange} />
          ３択形式
        </label>
      </div>

      <div className="part">
        <p>3. 回答を作成</p>
        {answerFormat === 'trueOrFalse' ? (
          <div>
            <p>正解は</p>
            <label>
              <input type="radio" name="answer" value="circle" checked onChange={handleAnswerChange} />
              ○
            </label>
            <label>
              <input type="radio" name="answer" value="cross_mark" />
              ×
            </label>
          </div>
        ) : (
          <div>
            <p>選択肢の作成と正解を選ぼう</p>
            <label>
              <input type="radio" name="answer" value="ans1" checked onChange={handleAnswerChange} />
              1. <input type="text" name="ans1" />
            </label>
            <label>
              <input type="radio" name="answer" value="ans2" onChange={handleAnswerChange} />
              2. <input type="text" name="ans2" />
            </label>
            <label>
              <input type="radio" name="answer" value="ans3" onChange={handleAnswerChange} />
              3. <input type="text" name="ans3" />
            </label>
          </div>
        )}
      </div>
    </div>
  )
}
