const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

let data = {};

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  },
  {
    message: 'What is your favorite color',
    name: 'color',
    type: 'list',
    choices: ['green', 'blue', 'pink', 'red']
})
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/per_page=100`;

    axios.get(queryUrl).then(function(res) {
      const gitHubUser = res.data.map(function(username) {
        return username.name;
      });

      const gitHubUserStr = gitHubUser.join("\n");

      fs.appendFile("GitHubUser.pdf", gitHubUserStr, function(err) {
        if (err) {
          throw err;
        }

        // console.log(`${username}`);
      });
    });
  });


function writeToFile(fileName, data) {
 
}

function init() {

init();
