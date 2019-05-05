# Cadent Front-End React + Redux Apptitude Exercise

## Summary

This execerise is designed to test your understanding of the major concepts of real world JavaScript and the patterns of React and Redux. The project is fully configured for you so you won't have to focus on configuring a build or working out a development instance. Everything has been based upon Facebook's React biolerplate, create-react-app.

This will test your ability to write components, map the redux store and its dispatch to the props of a component, maintain immutability, write and comprehend ES6 and create well formed classes.

This exercise should take anywhere from 1 - 2 hours.

## Concept

You are a freelance developer who has been tasked with the responsibility of writing a grocery list application for a client of yours. You have inherited a bit of code from a previous developer so bits and pieces of the application have been completed. Your job is to finish what they started and complete the grocery list application.

After taking a look at the application, you have assesed that you need to complete the following items that the other developer didn't finish

#### Tasks

- Finish the **ListTable** component so that the items in the grocery list will display inside of a table
- Add buttons within the table that will remove, select, and deselect and item from the list (you will need to write custom reducers and action creators for each of those actions).
- Finish the **ListSelection** component so that when an item inside the table is clicked, it will display inside of that component

#### Helpful Hints & Constraints

- **ListContainer** is already a Container component that is aware of the redux store as well as the dispatch. There is no need to create another container out of the other components that you will need to finish.
- Use the container as your main hub for both data and actions and then see what you can pass to each of the components.
- All of your Redux functionality is inside of the **ducks** directory. This file follows a pattern called ducks which groups all of related redux functionality into one file to avoid rework and segmentation.
- **DO NOT** worry yourself with styling the components. If you feel compelled, go ahead, but you will not be assessed your style comprehension.
- An original grocery list has been provided and hooked up to the container. Feel free to inspect console and view the list.

## Getting started

1. Fork this Codesandbox and add your last name onto the end of the title
2. Either continue writing in code sandbox or you can opt to connect it to your GitHub account and clone the repo to work locally
3. If you run it locally... follow 4 - 6. If you elect to keep using Code sandbox, do your thing.
4. run `yarn`
5. run `yarn start`
6. open to http://localhost:3000/

## Exercise Contraints

Use whatever resources you're most comfortable with to complete the assignment. This is designed to be a real-world exercise so we want you to use the real-world to be able to solve this problem. Nothing is off limits.

## Completing the assignment

When you're finished, be sure that you create a link and share the link with the individual who sent the link to you.

In addition, keep it locally and then bring it into your interview. We'll walk through what you did and how you did it. Again don't be worried if you can't get everything working. Words on a screen aren't too important to us, we care more about the concepts and the ways that you went about solving the problems that you're presented with. Keep a mental note of the resources you used to accomplish these problems as we'll be asking you to talk through how you went about solving for something that you previously didn't understand.

Good luck!

<hr>

## Addendum

#### Notes

All the required features for the assessment have been completed. With more time, I would have worked on the following:

- Generating a unique ID for each addition of a new random item to the order table. This would have been safer to use in place of the index value when generating new rows in the order table. It would have also made it possible to deselect specific items from the list table component rather than the full collection of that item in the present state.

- Wiring up the 'Add Random Item' button to actually add random items besides Roasted Turkey. This was a feature I briefly tried out before realizing two things and scrapping the idea:

  1. The simple, unstyled table would soon become an un-ordered (random) mess with this feature included.

  2. Adding a 'Clear Order Table' button to clean up the mess would have been a non-trivial addition which would involve controlling the `ListTable` from the `ListInput`.

- The app would obviously benefit from basic styling.

#### References

- [Immutability-helper](https://github.com/kolodny/immutability-helper): Referenced this library's readme on GitHub to learn how to update the application state instead of changing it.

- [React Docs: Handling Events](https://reactjs.org/docs/handling-events.html): Reviewed the section on creating a custom `this` binding attached to the table's action buttons so item data could be lifted as `payload` to the various state-altering actions of the reducer function.

- [Redux Docs](https://redux.js.org/introduction/getting-started): Referenced several pages from the official docs to understand the fundamentals behind Redux.

- [cadent-react-redux-excerise_clarke](https://github.com/donovanclarke/cadent-react-redux-excerise_clarke): Per the guidelines specified in the **Exercise Constraints**, a search utilizing five key terms from the original readme returned this repo. This solution was cloned down to my machine and used throughout the course of the assessment to provide:

  1. A working example of a Redux project (this was my first experience using Redux).

  2. An overview of how to fulfill the assessment's requirements which I consulted when stuck and needed guidance.
