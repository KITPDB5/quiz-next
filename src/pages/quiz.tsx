// TODO: Firebaseに問題を登録する
// TODO: コンポーネントに分けてリファクタリングする

import { useState } from 'react'

export default function CreateQuiz() {
  const [answerFormat, setAnswerFormat] = useState('trueOrFalse');

  return (
    <div>
      <p>create quiz</p>

      <div className="part">
        <p>1. 問題文を作成</p>
        <input type="text" />
      </div>

      <div className="part">
        <p>2. 回答形式を選択</p>
        <label>
          <input type="radio" name="answer_format" value="true_or_false" checked={answerFormat === 'trueOrFalse'} onChange={() => setAnswerFormat('trueOrFalse')} />
          ○×形式
        </label>
        <label>
          <input type="radio" name="answer_format" value="three_questions" checked={answerFormat === 'threeQuestions'} onChange={() => setAnswerFormat('threeQuestions')} />
          ３択形式
        </label>
      </div>

      <div className="part">
        <p>3. 回答を作成</p>
        {answerFormat === 'trueOrFalse' ? (
          <div>
            <p>正解は</p>
            <label>
              <input type="radio" name="answer" value="circle" checked />
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
              <input type="radio" name="answer" value="ans1" checked />
              1. <input type="text" name="ans1" />
            </label>
            <label>
              <input type="radio" name="answer" value="ans2" />
              2. <input type="text" name="ans2" />
            </label>
            <label>
              <input type="radio" name="answer" value="ans3" />
              3. <input type="text" name="ans3" />
            </label>
          </div>
        )}
      </div>
    </div>
  )
}
