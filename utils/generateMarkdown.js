function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license == 'Apache 2.0') {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license == 'GPL3.0') {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license == 'Mozilla Public License 2.0') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license == 'N/A') {
    return
  }
}

module.exports = renderLicenseBadge;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data,LicenseBadge) {
  var renderLicenseBadge = ''
  var renderLicenseLink = ""
  var renderLicenseSection = ""

  const readmetextstructure = `
# ${data.Name}
${LicenseBadge}
# Table-of-Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[Contributors](#Contributors)
[Test](#Test)
[Questions](#Questions)
# Description
${data.Description}
# Installation 
${data.Install}
# Usage
${data.Usage}
# Contributors
${data.Contributors}
# Test
${data.Test}
# Questions
https://github.com/${data.GitHub}
${data.Email}
`
  return readmetextstructure;

}

module.exports = generateMarkdown;