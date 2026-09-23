# Project-DevStack

DevStack is a modern technology stack explorer that helps developers discover
and build their ideal development stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- Vite

## Features

- Explore different technologies and their information.
- Add technologies to your personal development stack.
- Remove individual technologies or clear the entire stack.



















## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript.
It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a component.
I used it in `CardList` to store the selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. It is commonly used
to fetch data when a component loads.

In this project, I used `Suspense` with a Promise to load the JSON data.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list and update the
list efficiently when the data changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it in `SelectedCard`:

{selectedCards.length === 0 ? (
    <p>No technologies selected yet.</p>
) : (
    <p>{selectedCards.length} Technologies Selected</p>
)}

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send something
back by calling a function passed from the parent as a prop.