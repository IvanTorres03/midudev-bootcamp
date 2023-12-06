import React from 'react'
import ReactDOM from 'react-dom'


const Title = ({course}) => <h1>{course}</h1>

const Paragraph = ({text, number}) => {
return <p>{text} {number}</p> 
}
const Exercises = ({text, number1, number2, number3}) => {
  return <p>{text} {number1 + number2 +number3}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course ={course} />
     <Paragraph text={part1} number={exercises1}/> 
      <Paragraph text={part2} number={exercises2}/>
      <Paragraph text={part3} number={exercises3}/>
      <Exercises text={"Number of exercises"} number1={exercises1} number2={exercises2} number3={exercises3}/>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
