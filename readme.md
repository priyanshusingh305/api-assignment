# English to French Translation API

This project provides a simple API for translating English text to French using the free-translate library. The API is built with Express.js and includes a translation service and controller.

## Getting Started

To use this API, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/priyanshusingh305/api-assignment.git
   ```

2. Install dependencies:

   ```bash
   cd translation-api
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   The API will be accessible at [http://localhost:5454](http://localhost:5454).

## API Endpoints

### Translate English to French

- **Endpoint**: `/translate/engtofr`
- **Method**: POST
- **Request Body**:

  ```json
  {
    "text": "Enter your English text here"
  }
  ```

- **Response**:

  - Status Code: 201
  - Body:

    ```json
    {
      "translation": "Your translated text in French"
    }
    ```

  - Status Code: 400 (Bad Request)
    - Body:

      ```json
      {
        "error": "Text to translate is required"
      }
      ```

  - Status Code: 500 (Internal Server Error)
    - Body:

      ```json
      {
        "error": "Failed to translate text"
      }
      ```

## Project Structure

- **`/services/translation.service.js`**: Translation service containing the logic for English to French translation.
- **`/controller/translate.controller.js`**: Controller handling the translation request.
- **`/routes/translate.route.js`**: Express router defining the API endpoint and connecting it to the controller.
- **`app.js`**: Main application file, setting up the Express app, defining routes, and starting the server.

## Dependencies

- [express](https://www.npmjs.com/package/express): Web framework for Node.js.
- [free-translate](https://www.npmjs.com/package/free-translate): Node.js wrapper for the Free Translate API.

## Usage

Visit [http://localhost:5454](http://localhost:5454) to access the API and follow the provided endpoint documentation for translation.

Feel free to explore and modify the code to suit your needs!
