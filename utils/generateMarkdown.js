// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return ""
  } else if (license == 'Apache 2.0') {
    return ""
  }
  else if (license == 'GPL3.0') {
    return ""
  } else if (license == 'Mozilla Public License 2.0') {
    return ""
  } else if (license == 'N/A') {
    return
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var renderLicenseBadge = ''
  var renderLicenseLink = ""
  var renderLicenseSection = ""

  const readmetextstructure = `
# Description
${data.Description}
# Installation 
${data.Install}
# Usage
${data.Usage}
# Contributors
${data.Contributors}
# Tests
${data.Tests}
# Questions
${data.Questions}
`
  return readmetextstructure;

}

module.exports = generateMarkdown;
