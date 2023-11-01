import React, { useState, useEffect } from 'react'

export default function CreateQuiz() {

  const [answerFormat, setAnswerFormat] = useState('trueOrFalse');
  useEffect(() => {
    if (answerFormat === 'trueOrFalse') {
      // 丸バツを選択したときの処理
    } else if (answerFormat === 'threeQuestions') {
      // ３択を選択したときの処理
    }
  }, [answerFormat]);

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
          ３択
        </label>
      </div>

      <div className="part">
        <p>3. 回答を作成</p>
        {answerFormat === 'trueOrFalse' ? (
          <div>
            <p>まるばつ</p>
          </div>
        ) : (
          <div>
            <p>せんたく</p>
          </div>
        )}
      </div>
    </div>
  )
}
