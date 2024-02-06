# React State and Props

In this class we've learned about the state and props in React.

The state hook is used to create a state variable and the props are used to pass data from parent to child.

The state variable makes the component re-render when its value changes.

To change the value of a state variable, we use the function that is returned by the useState hook.

```jsx
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); // the setCount function is used to change the value of the count variable whenever we want

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> {/* in this case we are using the setCount function to change the value of the count variable */}
        Click me
      </button>
    </div>
  );
}

export default App;
```