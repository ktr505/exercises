import { AlertClock } from "./AlertClock";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
  function handleShowTime() {
    const now = new Date()

    alert(`The current time is ${now.toLocaleTimeString()}`)
  }
  return (
    <div>
      <Welcome name="Francesca" age={23} />
      <AlertClock onButtonClick={handleShowTime}/>
    </div>
  );
}

export default App;