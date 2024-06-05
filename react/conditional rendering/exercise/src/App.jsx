import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Welcome name="Francesca" age={23} />
    </div>
  );
}

export default App;