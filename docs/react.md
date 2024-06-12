# Introduction to React

React is a popular JavaScript library for building user interfaces (UIs), particularly single-page applications. It allows developers to create reusable UI components and manage the state of an application efficiently. React's core principles focus on declarative programming, component-based architecture, and the use of modern JavaScript features.

## Key Concepts in React

### 1. Functional Components

Functional components are simpler and more concise compared to class components. They are functions that accept props and return JSX.

#### Example:

```tsx
import React, { FC } from "react";

// Functional component
const Greeting: FC<{ name: string }> = ({ name }) => <h1>Hello, {name}!</h1>;

// Usage in App component
const App: FC = () => <Greeting name="John" />;
```

### 2. Declarative Programming Principles & Composition over Inheritance

React emphasizes the use of composition over inheritance. This means building complex UIs by combining simpler, reusable components rather than relying on class-based inheritance.

#### Example:

**Imperative Approach:**

```javascript
const button = document.createElement("button");
button.innerText = "Click Me";
button.onclick = function () {
  alert("Button Clicked!");
};
document.body.appendChild(button);
```

**Declarative Approach in React:**

```tsx
import React, { FC } from "react";

// Button component
const Button: FC<{ label: string; onClick: () => void }> = ({
  label,
  onClick,
}) => <button onClick={onClick}>{label}</button>;

// App component composed of multiple Button components
const App: FC = () => (
  <div>
    <Button label="Click Me" onClick={() => alert("Button 1 clicked!")} />
    <Button label="Press Me" onClick={() => alert("Button 2 clicked!")} />
  </div>
);
```

### 3. `useState` and `useEffect` Hooks

Hooks are special functions that let you use state and other React features in functional components.

#### `useState` Example:

```tsx
import React, { FC, useState } from "react";

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
```

#### `useEffect` Example:

```tsx
import React, { FC, useEffect, useState } from "react";

const Timer: FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  // Empty dependency array to run effect only once at component mount
  // If populated will execute on every change of a dependency (array item)
  // If not provided, will run on every render

  return <div>Seconds: {seconds}</div>;
};
```

### 4. Contexts

React Context provides a way to pass data through the component tree without having to pass props down manually at every level.

#### Example:

```tsx
import React, { FC, PropsWithChildren, createContext, useContext } from "react";

type User {
  name: string;
}

// Create a Context
const UserContext = createContext<User>({ name: "" });

// Provider component to wrap the app and provide the context value
export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const user = { name: "John Doe" }; // Fetch user data from API, etc.

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// Custom hook to consume the context
export const useUser = () => useContext(UserContext);

// App component that provides the context value
const App: FC = () => {
  return (
    <UserContextProvider>
      <UserProfile />
    </UserContextProvider>
  );
};

// Component that uses the context
const UserProfile: FC = () => {
  const user = useUser;
  return <div>User: {user.name}</div>;
};
```
