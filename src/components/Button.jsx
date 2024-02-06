import './Button.css';
import { useState } from 'react';

function Button(props) {
    const [count, setCount] = useState(0);
    console.log("component mounted ", props.text);

    function increaseCounter() {
        setCount(count + 1)
    }

    return (
        <button onClick={increaseCounter}>
            {/* <button onClick={()=>increaseCounter(someArgument)}> if we want to pass arguments we need to use the arrow function, if not, we create an infinite loop */}
            {props.text} {count}
        </button>
    )

}

export default Button;