/* eslint-disable react/prop-types */
import './App.css'
import Todo from './todo';
import Actor from './Actor';
import Singer from './Singer';

function App() {

  // eslint-disable-next-line no-unused-vars
  const actors = ['Moti', 'horipodo', 'nangta', 'suresh'];
  // eslint-disable-next-line no-unused-vars
  const singers = [
    { id: '2', name: 'lisa', age: 27 },
    { id: '3', name: 'sovon nazir', age: 29, },
    { id: '4', name: 'kalachan', age: 28, },
    { id: '7', name: 'alom vai', age: 28, },
  ]

  return (
    <>
      {
        // eslint-disable-next-line react/jsx-key
        singers.map(singer => <Singer key={singer.id} singer={singer} ></Singer>)
      }
      <Actor Name={'Hero Alom'}></Actor>
      {
        // eslint-disable-next-line react/jsx-key
        actors.map(actor => <Actor Name={actor} ></Actor>)
      }
      <Device Name={'Laptop'} price={'50000'}></Device>
      <Device Name={'Macbook'} price={'150000'}></Device>
      <Person></Person>
      <Person grade='9'></Person>
      <Student></Student>
      <Developer></Developer>
      <Todo task='Learn React' isDone={true}></Todo>
      <Todo task='Learn Redux' isDone={false}></Todo>
      <Todo task='Learn Typescript' isDone={false}></Todo>
    </>
  )
}

function Device(props) {
  return (
    <>
      <h5>This device: {props.Name} price: {props.price} </h5> {/*these are not errors */}
    </>
  )
}

function Person({ grade }) {

  const age = 40;
  const person = {
    name: 'Rofiq',
    class: 10,
    books: ['biology', 'physics', 'mathematics']
  }
  return (
    <>
      <h5>I am a person with age of {age} who has a friend name {person.name} read in class {grade}</h5>
    </>
  )

}

function Student() {

  return (
    <div className='student'>
      <h3>This is a Student</h3>
      <p>name: </p>
      <p>age: </p>
    </div>
  )
}

function Developer() {

  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }

  return (
    <>
      <div style={developerStyle}>
        <h5>Devo devo</h5>
        <p>coding p10</p>
      </div>
    </>
  )
}

export default App
