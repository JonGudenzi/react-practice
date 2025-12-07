import { useState } from "react"

export default function GreetingBox() {

    const [greetingText, setGreetingText] = useState("");

    return (
        <div>
            <input 
            value={greetingText}
           onChange={(e) => setGreetingText(e.target.value)}/>
            <p>{greetingText}</p>

        </div>

    )

}