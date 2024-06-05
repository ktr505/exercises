import { Button } from "./Button"

export function AlertClock({onButtonClick}) {
//   function handleShowTime() {
//     const now = new Date()

//     alert(`The current time is ${now.toLocaleTimeString()}`)
//   }

  return (
    <div>
      <p>Click the button below to show the current time</p>
      <button onClick={onButtonClick}>Click Me!</button>
    </div>
  )
}
