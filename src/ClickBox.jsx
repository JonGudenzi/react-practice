import { useState } from "react";

export default function ClickBox() {

    const [isVisible, setIsVisible] = useState(false);

    return (
        
        <div style={{ backgroundColor: isVisible ? "black" : "purple"}}> 

            <button onClick={() => setIsVisible(prev => !prev)}> {isVisible ? "hide" : "show"} </button>
            {isVisible && <h3>Here is another message</h3>}
            {isVisible && <p style={{ color: "red", margin: "10px" }}>Hello from ClickBox</p>}
            
        </div>
    );
}