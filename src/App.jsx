const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} — 3 units</p>
      <p>{props.part2} — 3 units</p>
      <p>{props.part3} — 3 units</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Total: {props.total} units</p>
  )
}

const App = () => {
  const course = 'CSIT340 - Industry Elective 1'

  return (
    <div>
      <Header course={course} />

      <Content
        part1="CSIT321"
        part2="IT365"
        part3="IT327"
      />

      <Total total={9} />
    </div>
  )
}

export default App