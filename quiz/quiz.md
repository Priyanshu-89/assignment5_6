#  React Quiz – Multiple Choice Questions (MCQ)

### 1️. React is primarily used for:
 
**Ans: c) Building user Interfaces**

---

### 2️. JSX allows you to:

**Ans: b) Write HTML-like code inside JavaScript** 

---

### 3️. Which of the following is true about props?

 **Ans: c) Props are immutable and flow parent → child**

 ---

### 4️. In React, event handlers are written in:

 **Ans: c) camelCase**

### 5️. What does React use for efficient DOM updates?

**Ans: b) Virtual DOM** 

### 6️. Write a simple React functional component called `HelloWorld` that displays “Hello, React!”.
```jsx

import React from "react"

function HelloWorld(){
    return <h1>Hello, React!</h1>
}
export default HelloWorld;
```


### 7️. What is the difference between a functional component and a class component?

| **Functional Component**                                               | **Class Component**                                                 |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Uses plain JavaScript functions.                                       | Uses ES6 classes.                                                   |
| Simpler and easier to write.                                           | More complex syntax.

### 8. Why should React component name start with a capital letter?

Because when we start a component name with a **small letter**, the compiler gets confused — it treats it as a built-in **HTML tag** (since HTML tags by default start with small letters).  
By convention, **React components must begin with a capital letter** so React can distinguish them from regular HTML elements.
                                   
### 9️. Explain the difference between JSX and plain JavaScript in React.

| **JSX (JavaScript XML)** | **Plain JavaScript** |
| ------------------------- | -------------------- |
| JSX allows you to write HTML-like code inside JavaScript. | Plain JavaScript uses `React.createElement()` to create UI elements. |
| Easier to read and write for UI structure. | More and harder to visualize the UI. |
| Example: `<h1>Hello, React!</h1>` | Example: `React.createElement('h1', null, 'Hello, React!')` |
| Must be transpiled by Babel to JavaScript. | Runs directly in the browser without transpilation. |

### 10. Create a button in React that, when clicked, logs "Button clicked!" to the console.

```jsx
import React from "react"

function ClickButton(){
    const handleClick=()=>{
        clg("Button Clicked!")
    }

    return(
        <button onClick={handleClick}>Click Me </button>
    )
}

export default ClickButton;
````
