import { Age } from "./Age"

export function Welcome ({ name, age }) {

    return (
    <div>
        <h2>Welcome, <strong>{name}</strong>!</h2>
        <Age age={age} />
        {age > 18 && <Age age={age} />}
        {age !== undefined && <Age age={age} />}
        {age > 18 && age < 65 && <Age age={age} />}
        {age > 18 && age < 65 && name === "John" && <Age age={age} />}
    </div>
    )
}