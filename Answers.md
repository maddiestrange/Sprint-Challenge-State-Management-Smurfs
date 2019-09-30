1. What problem does the context API help solve?
Helps avoid passing props from many components to other components by storing data on a centralized context object.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions hold info about an action we want to perform, reducers recieve the info from actions and updates the state according to the info it recieved, and the store holds our state, there is only one store in redux so by using it to hold our state we know we are using a centralized version of the state

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is stored in the store and can be shared to all parts of a project so it is perfect for large and complicated projects.
Component state is only used in single components and their children and works ok for temporary state in small elements.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is a node package(middlewear) that allows us to turn synchronous Redux flow asynchronous so we can make api calls in actions, thunk intercepts action creators when they are called and determines if they are an action or a function to be invoked

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Honestly, they all feel like overkill for the time being. I think when I am able to work on larger projects I will probably use Redux because it is easier to track what is happening to state.