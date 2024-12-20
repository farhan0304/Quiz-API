# Quiz API

A basic API for managing a quiz, allowing you to add new questions and fetch questions. You can use this API to make your own personal project like quiz application.

## Routes and Endpoints

### 1. `/quiz`

**Base route for the quiz-related operations.**

#### Endpoints:

\*\*1.1. POST \*\***`/quiz/add`**

- **Description**: Add a new question to the quiz.
- **Request Body** (JSON format):
  ```json
  {
    "question": "<Your question>",
    "option1": "<Option 1>", 
    "option2": "<Option 2>",
    "option3": "<Option 3>", 
    "option4": "<Option 4>"],
    "correct_option": "<Correct option>"
  }
  ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "question": "<Your question>",
      "option1": "<Option 1>", 
      "option2": "<Option 2>",
      "option3": "<Option 3>", 
      "option4": "<Option 4>"],
      "correct_option": "<Correct option>"
      "_id": "<Mongodb id>"
    }
    ```
  - **Error (400)**:
    ```json
    {
      "error": "All feilds are required"
    }
    ```

\*\*1.2. GET \*\***`/quiz/getquestion`**

- **Description**: Fetch an array of all quiz questions.
- **Response**:
  - **Success (200)**:
    ```json
    [
      {
        "question": "<Your question>",
        "option1": "<Option 1>", 
        "option2": "<Option 2>",
        "option3": "<Option 3>", 
        "option4": "<Option 4>"],
        "correct_option": "<Correct option>"
      },
      ...
    ]
    ```
  - **Error (500)**:
    ```json
    {
      "error": "Unable to fetch questions."
    }
    ```

## Usage

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Use Postman or any API testing tool to interact with the endpoints.

##

