import { App } from "./App";
import { HelloWorld } from "./HelloWorld"; //can be removed after importing App
import { createRoot } from 'react-dom/client'

// const HelloWorldElement = <HelloWorld />

// const rootElement = document.getElementById('root')
// const root = createRoot(rootElement)

// root.render(HelloWorldElement)

// simplified:

createRoot(document.getElementById('root')).render(<App />)