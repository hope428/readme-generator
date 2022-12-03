// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `<img src="https://img.shields.io/badge/license-${license}-9cf"/>`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseName;
  if (!license) {
    return "";
  } else {
    switch (license) {
      case "Apache License 2.0":
        licenseName = "apache-2.0";
        break;

      case "GNU GPLv3":
        licenseName = "gpl-3.0";
        break;

      case "MIT":
        licenseName = "mit";
        break;

      case "ISC":
        licenseName = "isc";
        break;

      case "GNU GPLv2":
        licenseName = "gpl-2.0";
        break;
    }

    return `[${data.license} License](https://choosealicense.com/licenses/${licenseName})`;
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

## How to Contribute
${data.contribution}

## Tests
${data.testing}
`;
}

module.exports = generateMarkdown;
