const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} — {props.exercises} units
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].units} />
      <Part name={props.parts[1].name} exercises={props.parts[1].units} />
      <Part name={props.parts[2].name} exercises={props.parts[2].units} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Total: {props.total} units</p>
  )
}

const Footer = (props) => {
  return (
    <div>
      {props.name} - {props.course} - {props.section}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 - Industry Elective 1',
    parts: [
      {
        name: 'CSIT321',
        units: 3
      },
      {
        name: 'IT365',
        units: 3
      },
      {
        name: 'IT327',
        units: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={9} />
      <Footer 
        name="Manuel Raphael De Guzman"
        course="CSIT340"
        section="G5"
      />
    </div>
  )
}

export default App