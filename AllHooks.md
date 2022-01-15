# React States

**useState**

It is the most important and often used hook. The purpose of this hook to handle reactive data, any data that changes in the application is called state, when any of the data changes, React re-renders the UI.

**useEffect**

It allows us to implement all of the lifecycle hooks from within a single function API.

**useContext**

This hook allows us to work with React's Context API, which itself a mechanism to allow us to share data within it's component tree without passing through props

**useReducer**
It does very similiar to setState, It's a different way to manage state using Redux Pattern. Instead of updating the state directly, we dispatch actions, that go to a reducer function, and this function figure out, how to compute the next state.

**useRef**
This hook allows us to create a mutable object. It is used, when the value keeps changes like in the case of useState hook, but the difference is, it doesn't trigger a re-render when the value changes.
The common use case of this, is to grab HTML elements from the DOM.

**useMemo**
This hook will help you to optimise computational cost or improve performance. It mostly used when we're needed to make expensive calculations.
