import React from "react"

type InputProps = {
    value: string
    handleChange: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Input = ({value, handleChange}: InputProps) => {
    const handleInputChange = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event)
    }
    return <input type="text" value={value} onChange={handleInputChange} />
}
