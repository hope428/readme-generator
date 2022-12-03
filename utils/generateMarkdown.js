// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `<img src="https://img.shields.io/badge/license-${license}-9cf"/>`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    switch (license) {
      case "Apache License 2.0":
        return `[${license} License](https://choosealicense.com/licenses/apache-2.0)`;
      case "GNU GPLv3":
        return `[${license} License](https://choosealicense.com/licenses/gpl-3.0)`;
      case "MIT":
        return `[${license} License](https://choosealicense.com/licenses/mit)`;
      case "ISC":
        return `[${license} License](https://choosealicense.com/licenses/isc)`;
      case "GNU GPLv2":
        return `[${license} License](https://choosealicense.com/licenses/gpl-2.0)`;
      case "None":
        return `This project does not use a license`;
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `
## License
${renderLicenseLink(license)}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
- [Tests](#tests)

## Installation
${data.installation}

## Usage 
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Questions
[Contact me on Github](https://github.com/${data.username})<br/>
[Email me at ${data.email}](mailto:${data.email})

## Contributing
${data.contribution}

## Tests
${data.testing}
`;
}

module.exports = generateMarkdown;
