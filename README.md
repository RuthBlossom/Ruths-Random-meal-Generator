# Random Meal Generator

This Node.js application fetches a random meal from [TheMealDB API](https://www.themealdb.com/api.php) and displays it on a web page. It utilizes Axios for making HTTP requests, EJS for rendering views, and Express.js for setting up routes and middleware.

## Prerequisites
- Node.js installed on your machine.

## Installation
1. Clone or download this repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the server:
    ```bash
    npm start
    ```
2. Open your web browser and go to `http://localhost:3000`.
3. Click the "Get Meal" button to fetch a random meal. Each time you click the button, a new random meal will be displayed.

## File Structure
- **index.js**: Main application file containing the Express.js server setup and route definitions.
- **public/**: Directory containing static assets like CSS and client-side JavaScript.
- **views/index.ejs**: EJS template file for rendering the meal details.

## Dependencies
- **express**: Web framework for Node.js.
- **axios**: Promise-based HTTP client for making requests to external APIs.
- **ejs**: Templating engine for rendering HTML templates.
- **path**: Node.js module for working with file and directory paths.

## Routes
- **GET "/":** Renders the index page with a placeholder meal initially.
- **GET "/get-meal":** Fetches a random meal from TheMealDB API and renders the index page with the fetched meal details.

## Error Handling
- Error handling is implemented for failed API requests. If there's an error fetching the meal, a generic error message will be displayed.

## Disclaimer
This application is for educational purposes only.
```
