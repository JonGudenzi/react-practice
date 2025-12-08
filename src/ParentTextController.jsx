import { useState } from "react";
import TextInput from "./TextInput";

export default function ParentTextController() {
const [text, setText] = useState("");

    return (
        <div>
         <TextInput 
         value={text}
         onChangeText={setText}/>
        </div>
       
    )
}