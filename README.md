This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## About project
### Autocomplete-input
It is an example of component which almost all is reusable and can be adjusted. 
 The data for instance i get from https://jsonplaceholder.typicode.com/comments and take from objects only 'email' fields. Then I use React-redux and redux-thunk to keep data in store. 
 I do not use any libraries or another third-party solutions. It is almost a clear solution on React.  
 
 #### How it is build
At the beginning there are default styles: 
- 'autocomplete-wrapper' 
- 'autocomplete-selector' 
- 'autocomplete-input' 
- 'autocomplete-option' 
 
 #### What can you do
- set an amount of visible options
- set a height of options
- write and set styles and classes through parent component for wrapper, input, selector blocks, for each option in the selector and for highlighting matches in the text 
- give functions onChange and onChoose for changing state of parent.

 #### How can you use it
 You can select options with keyboard with arrow down and arrow up. Also you can click on the options or select any option and choose it with key 'Enter' or 'Tab'. It will to autocomplete input field.   

## Available Scripts
In the project directory, you can run:
### `start` 
'yarn start' or 'npm run start' - to start a project.
### `install` 
Before this, you have to install dependencies with 'npm install' or 'yarn install'
