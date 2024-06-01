import './App.css';
import UseReducerComponents from './hooks/UseReducerComponents';
import UseStateComponent from './hooks/UseStateComponent';


function App() {
  return (
    <>
      <h3>Materi use State:</h3>
      <UseStateComponent />

      <hr />
      <h3>Materi use Reducer:</h3>
      <UseReducerComponents />
    </>

  )
}

export default App;
