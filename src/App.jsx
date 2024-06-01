import './App.css';
import UseEffectComponent from './hooks/UseEffectComponent';
import UseEffectTodos from './hooks/UseEffectTodos';
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

      <hr />
      <h3>Materi use Effect</h3>
      <UseEffectComponent />

      <hr />
      <h3>Fetching API dengan useEffect</h3>
      <UseEffectTodos />
    </>

  )
}

export default App;
