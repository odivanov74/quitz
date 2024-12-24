
import {useState} from 'react';
import Quitzes from './components/quitzes/Quitzes';
import './App.css';

const questions =
[
  {
    title: "Что такое переменная?",
    variants: ["место на диске","Часть процессора","Именованная область памяти"],
    correct: 2
  },
  {
    title: "Что такое такое if?",
    variants: ["Оператор","Функция","Управляющая структура"],
    correct: 2
  },
  {
    title: "Что такое оператор?",
    variants: ["Функция","Переменная","Управляющая структура"],
    correct: 0
  },
  {
    title: "Что такое указатель?",
    variants: ["Знак на дороге","Знак в здании","Переменная которая содержит адрес"],
    correct: 2
  },

]

function App() {
  const [step,setStep] = useState(0);
  const question = questions[step];
  const [correct,setCorrect] = useState(0);

  const onClickVariant = (variant) =>
  {
     if(step < questions.length) setStep(step + 1);
     if(variant === question.correct)
     {
        setCorrect(correct + 1);
     }
  }

  if(step < questions.length)
  {
    return (
      <div className="main">
      
        <Quitzes 
          question={question} 
          onClickVariant={onClickVariant} 
          lenght = {questions.length} 
          step = {step} 
          correct = {correct}         
          />           
      </div>
    );
  }
  else
  {
    return (
      <div className="main">      
        <div>Правильных ответов: {correct} </div> 
        <div>Неправильных ответов: {questions.length - correct} </div> 
      </div>
    )
  }
}

export default App;
