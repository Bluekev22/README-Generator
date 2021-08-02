// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data, license) {
  if (license === "Apache 2.0") {
    var badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "MIT") {
    var badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "ISC") {
    var badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }
  if (license === "GNU GPL v3") {
    var badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license === "Unlicensed") {
    var badge = "";
  }
  console.log(data);
renderLicenseLink(data, license, badge);
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data, license, badge) {
  if (license === "Apache 2.0") {
    var link = "https://opensource.org/licenses/Apache-2.0";
  }
  if (license === "MIT") {
    var link = "https://opensource.org/licenses/MIT";
  }
  if (license === "ISC") {
    var link = "https://opensource.org/licenses/ISC";
  }
  if (license === "GNU GPL v3") {
    var link = "https://opensource.org/licenses/GPL-3.0";
  }
  if (license === "Unlicensed") {
    var link = "This project is unlicensed";
  }
  renderMarkdown(data, license, badge, link);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var license = data.license;
  renderLicenseBadge(data, license);
}


function renderMarkdown(data, badge, link) {
   return `
# ${data.title}${badge}
  
# Table of Contents
  
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions) - [License](#license)
  
## Description:
${data.description}
## Installation:
${data.installation}
## Installation:
${data.installation}
## Contribution:
${data.contribution}
## Test:
${data.test}
## Questions:
- Visit my GitHub page: github.com/${data.username}
- If you have any question please email me at: ${data.email}
## License: ${link}`;
  }

module.exports = generateMarkdown
