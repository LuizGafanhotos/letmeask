// type ButtonProps = {
    // text?: string[];
//     children?: string

import { useState } from "react";

// }
export function Button(){
    const [counter, setCounter] = useState(0)

    // let counter = 0

    function increment() {
        // counter += 1;
        setCounter(counter + 1)
    }
    return (
        // <button>{props.children || 'Default'}</button>
        <button onClick={increment}>{counter}</button>
    )
}

// export default Button;