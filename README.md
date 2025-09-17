# Movies React Website
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/MaramAhmed18/Movies-React-Website)

👉 *[Live Demo](https://movies-react-website-git-main-maramahmed18s-projects.vercel.app)*

A responsive movie browsing web application built with React. Users can discover popular movies, search for specific titles, view details, and manage a personal list of favorites. The app features a theme switcher (Light/Dark) and multi-language support (English/Arabic).

## Features

- *Movie Browsing:* View a paginated list of popular movies from The Movie DB (TMDb) API.
- *Search Functionality:* Search for movies by title.
- *Movie Details:* Click on a movie to see its poster, overview, release date, and rating.
- *Favorites System:* Add or remove movies from a persistent "Favorites" list using Redux.
- *Theme Toggling:* Switch between a light and a dark mode, with the state managed by Redux.
- *Localization:* Change the application's language between English (EN) and Arabic (AR) using React's Context API.
- *User Forms:* Includes functional Registration and Login forms with real-time validation.

## Tech Stack

- *Frontend:* React.js
- *State Management:* Redux & Redux Thunk
- *Language Management:* React Context API
- *Routing:* React Router
- *HTTP Client:* Axios
- *Styling:* Bootstrap, Font Awesome, Custom CSS
- *API:* The Movie DB (TMDb)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1.  *Clone the repository:*
    sh
    git clone https://github.com/maramahmed18/movies-react-website.git
    
2.  *Navigate to the project directory:*
    sh
    cd movies-react-website
    
3.  *Install NPM packages:*
    sh
    npm install
    
    *Note: The project is configured to use --legacy-peer-deps for Vercel deployments, but npm install should work for local development.*

4.  *Start the development server:*
    sh
    npm start
    
    The application will be available at http://localhost:3000.

## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### npm run build

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### npm test

Launches the test runner in the interactive watch mode.

## Project Structure

The project follows a standard React application structure, with logic separated by feature and concern.

```plaintext
/src
├── Context/         # React Context for language management
├── componants/      # Reusable UI components (e.g., Card)
├── pages/           # Page-level components for routing
├── store/           # Redux files for state management
│   ├── Actions/     # Redux action creators
│   ├── Reducers/    # Redux reducers
│   └── Store.js     # Redux store configuration
├── App.js           # Main application component with routing
└── index.js         # Entry point of the application
