# Note Taker App

## Table of Contents
---
### - [Description](#description)
### - [Screencap](#screencap)
### - [Installation and Usage](#installation)
### - [Deployed App](#deployed)
### - [Credits](#credits)
### - [License](#license)
### - [Contributing](#contributing)
### - [Questions](#questions)<br><br>

## Description
---
### The Note Taker App is a handy tool that can be used to generate, save, and delete notes in one location. If used as a To-Do list, one can simply delete the tasks as they are completed, allowing for better time management and organization. Use it to store your creative ideas, appointments, or even as an address book. <br><br>

## Screencap
---
![Screencap of Notetaker App](/images/notetaker.gif)<br><br>

## Installation and Usage
---
### The app is built in the [Node.js](https://nodejs.org/en/download/) environment, with an [Express.js](https://expressjs.com/) backend, which handles the storing, retrieval, and deletion notes from a JSON database file. Additionally, the npm package [Generate Unique ID](https://www.npmjs.com/package/generate-unique-id) is used to auto-generate a unique ID for each note, which allows for the successful saving, getting, and deleting of notes.

### Please use the following commands to initialize the app and install necessary dependencies:
```
npm init -y 
npm install express
npm install generate-unique-id
```

### Once installed and you have launched the server (with the npm start command), you will be greeted with a landing page for the Note Taker App with a call-to-action button inviting you to 'Get Started'. You will then see existing notes on the left pane and an invitation to create a new note on the right. Once a title and text have been added, simply click the save icon at the top right and you will see your note join the others in the left pane. To view a previously saved note, simply click on it and it will appear in the right pane. To delete a note, simply click the trashcan icon next to the desired note.<br><br>

## Deployed App
---
### The Note Taker app has been deployed to Heroku and can be viewed [here](https://nameless-stream-37257.herokuapp.com/).<br><br>

## Credits
---
### The frontend code for this project was provided by edX. Our task was to build a backend and connect it to the frontend to give it CRUD (Create, Read, Update, and Delete) functionality.<br><br>

## License
---
### This project carries with it the [MIT License](https://opensource.org/licenses/MIT)<br><br>

## Contributing
---
### For any comments, suggestions, or otherwise, please feel free to contact me.<br><br>

## Questions
---
### Please contact me with any questions:
<ul>
<li>GitHub: <a href="https://github.com/ejseader">@ejseader</a></li>
<li>Email: <a href="mailto:ejseader@gmail.com">ejseader@gmail.com</a></li>
</ul>