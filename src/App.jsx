import './App.css';
import UseContextComponent from './hooks/UseContextComponent';
import UseEffectComponent from './hooks/UseEffectComponent';
import UseEffectTodos from './hooks/UseEffectTodos';
import UseLayoutEffect from './hooks/UseLayoutEffect';
import UseReducerComponents from './hooks/UseReducerComponents';
import UseRefComponent from './hooks/UseRefComponent';
import UseRefComponentDua from './hooks/UseRefComponentDua';
import UseStateComponent from './hooks/UseStateComponent';


function App() {
  return (
    <>
      {/* <h3>Materi use State:</h3> */}
      {/* <UseStateComponent /> */}

      <hr />
      {/* <h3>Materi use Reducer:</h3> */}
      {/* <UseReducerComponents /> */}

      <hr />
      {/* <h3>Materi use Effect</h3> */}
      {/* <UseEffectComponent /> */}

      <hr />
      {/* <h3>Fetching API dengan useEffect</h3> */}
      {/* <UseEffectTodos /> */}

      <hr />
      {/* <h3>Materi user Layout Effect</h3> */}
      {/* <UseLayoutEffect /> */}
      
      <hr />
      {/* <h3>Materi use Context</h3> */}
      {/* <UseContextComponent /> */}

      <hr />
      {/* <h3>Materi use Ref</h3> */}
      <UseRefComponent />
      <UseRefComponentDua />


    </>

  )
}

export default App;
