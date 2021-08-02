//Returns a license badge
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  }
  if (license === "GNU GPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license === "Unlicensed") {
    return "";
  }
};

//Returns license link
function renderLicenseLink(license) {
  if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  }
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  }
  if (license === "ISC") {
    return "https://opensource.org/licenses/ISC";
  }
  if (license === "GNU GPL v3") {
    return "https://opensource.org/licenses/GPL-3.0";
  }
  if (license === "Unlicensed") {
    return "";
  }
  
}

//Returns license section description
function renderLicenseSection(license) {
  if (license === "Apache 2.0") {
    return "This project is licensed under Apache 2.0: ";
  }
  if (license === "MIT") {
    return "This project is licensed under MIT: ";
  }
  if (license === "ISC") {
    return "This project is licensed under ISC: ";
  }
  if (license === "GNU GPL v3") {
    return "This project is licensed under GNU GPL v3: ";
  }
  if (license === "Unlicensed") {
    return "This project is unlicensed.";
  }
}

//Function to generate README.md file
function generateMarkdown(data) {
  var license = data.license;
  var badge = renderLicenseBadge(license);
  var link = renderLicenseLink(license);
  var section = renderLicenseSection(license);
   return `
# ${data.title}${badge}
  
# Table of Contents
  
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)
- [License](#license)
  
## Description:
${data.description}
## Installation:
${data.installation}
## Usage:
${data.usage}
## Contribution:
${data.contribution}
## Test:
${data.test}
## Questions:
- Visit my GitHub page: github.com/${data.username}
- If you have any question please email me at: ${data.email}
## License:
${section}${link}`;
  }

module.exports = generateMarkdown
