# Weather App Project

For this assignment, you will build a weather application that will make use of the [wttr.in API](https://github.com/chubin/wttr.in) to show the weather in different locations. Your application will also store previous searches.

## Project setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Running your web application

You can run your code by simply opening the `index.html` page provided here. Whenever you make a change, you will need to refresh the page.

Alternatively, you may run the following command which will create a server that runs your site. This will take up your terminal.

```
npm start
```

A page will open in your browser. This page will refresh whenever you save a file in your project.

You can stop the server from running by pressing `Ctrl + C`.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will open the Cypress testing window, where you can click to run an individual suite of tests or all of the tests at once.

## Instructions

### Project Overview

Your web application will allow for users to search for the weather by city. Features and screenshots are included below, however you should first start by running the tests and looking at them to see what is required.

### Design

#### Landing Page

Your web application should look similar to the screenshot below when the page is first loaded.

![Weather App landing page.](./assets/landing.png)

In particular, make sure the following is true:

- [ ] The header should include the application's title.
- [ ] The header should include a search form with a label, text input, and submit input.
- [ ] The main section of the page contains placeholder text.
- [ ] The sidebar includes the title "Previous Searches" and a message that lets the user know no searches have been made.
- [ ] CSS Grid should be used to structure the page.

#### After Search

After searching, your page should look similar to the screenshot below.

![Weather App after making a single search.](./assets/single-search.png)

In particular, make sure to include the following:

- [ ] The main section of the page should be filled in with relevant information received from the API. (More detailed information below.)
- [ ] Three sections below the main section should show information for the next few days.
- [ ] CSS Grid should be used throughout to structure the page.
- [ ] The sidebar retains a link to the search.

#### Multiple Searches

After multiple searches, the sidebar will continue to fill up with more searches. The most recent search will always be on the bottom.

![Weather App after making multiple searches.](./assets/multiple-searches.png)

### Features

The following features are required for your application. These features detail what is needed to pass the tests.

- When a user arrives at the page, they should:
  - [ ] See an `h1` with the text "Weather App" in the header.
  - [ ] See a form in the header that includes both a text and submit input.
  - [ ] See a `.display` element on the left side of the page, that suggests that they make a search.
  - [ ] See a `.history` element on the right side of the page, that includes the text "Previous Searches".
- When a user enters text into the search form and presses submit, they should:
  - [ ] See the text disappear from the search bar.
  - [ ] See the name of the city that was searched as well as the area, region, country, and currently "feels like" temperature for that location.
  - [ ] See detailed information for the current day and the next two days below the main `.display` element.
  - [ ] See the city name and "feels like" temperature show up in the `.history` element.
- If another search is made, the user should:
  - [ ] See the main `.display` element change to account for the new city, updating all relevant information.
  - [ ] See the new city name appear at the bottom of the list in the `.history` element, with the "feels like" temperature.
- If one of the links in the `.history` element is clicked, the user should:
  - [ ] See the main section of the page show weather information about that city.
  - [ ] _Not see_ a new link show up in the `.history` element.

### API

The [wttr.in API](https://github.com/chubin/wttr.in) can be used from the command line to display weather information in your terminal. However, you will need to use the JSON format to integrate it into your web application. Read the documentation on the linked GitHub to see how to use the API.

The section below describes specifically how to make a request to the API so that it returns JSON.

- [wttr.in: JSON Output](https://github.com/chubin/wttr.in#json-output)
