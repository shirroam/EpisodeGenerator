# Rick and Morty Episode Generator

This project is a web application that generates a random "Rick and Morty" episode setup, consisting of a random friend, enemy, and location fetched from the Rick and Morty API. Each time the user clicks the "Generate Episode" button, the page reloads or dynamically updates with new characters and a new location.

## Features
- Generates a random friend and enemy (characters) from the Rick and Morty universe.
- Fetches a random location from the Rick and Morty universe.
- Displays the selected characters and location dynamically on the webpage.
- Option to regenerate episodes using the "Generate Episode" button.

## Technologies Used
- Node.js with Express: Backend server framework.
- EJS: Templating engine for rendering the dynamic HTML.
- Axios: HTTP client used to fetch data from the Rick and Morty API.
- HTML/CSS: For the frontend structure and design.
- JavaScript: For handling client-side interactivity.

## Setup Instructions
To run this project locally, follow these steps:

1. Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/shirroam/EpisodeGenerator.git
cd <project-directory>
```

2. **Make sure you have Node.js installed. Then, install the required npm packages:**

```bash
npm install
```

3. **Start the Express server:**

```bash
npm start
```

4. Open your browser and navigate to:

```bash
http://localhost:3000
```

