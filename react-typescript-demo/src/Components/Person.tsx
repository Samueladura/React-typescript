import { personProps } from "./Person.types"

export const Person = (props: personProps) => {
    return <div>{props.name.first} {props.name.last}</div>
}
