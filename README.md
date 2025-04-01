# SIT323 – Task 4.1C: Enhanced Calculator Microservice

## Overview

This microservice extends the calculator from Task 4.1P by adding extra functionality such as exponentiation, square root, and modulo operations. These were added to make the application more useful and to demonstrate the ability to design clean and flexible APIs using Node.js and Express.

---

## How to Set It Up and Run

### Step 1 – Clone the Repository

First, download the project from GitHub using:

git clone https://github.com/31Husain31/SIT323-2025-prac4c.git cd SIT323-2025-prac4c

### Step 2 – Install Dependencies

Run the following to install required packages:

npm install

### Step 3 – Start the Microservice

To launch the service, run:

node index.js

You should see a message like:
Calculator microservice running at http://localhost:3000

## Available Endpoints

These API endpoints can be accessed in your browser

### Addition
GET /add?num1=8&num2=2 Response: { "result": 10 }

### Subtraction
GET /subtract?num1=8&num2=2 Response: { "result": 6 }


### Multiplication
GET /multiply?num1=8&num2=2 Response: { "result": 16 }

### Division
GET /divide?num1=8&num2=2 Response: { "result": 4 }

---

## Extra Operations Added in Task 4.1C

### ⬆Exponentiation (num1 raised to the power of num2)
GET /power?num1=2&num2=3 Response: { "result": 8 }

### Square Root (of a single number)
GET /sqrt?num=25 Response: { "result": 5 }

### Modulo (remainder of num1 divided by num2)
GET /modulo?num1=10&num2=3 Response: { "result": 1 }

---

## Error Handling

- Non-numeric inputs return an error.
- Division and modulo by zero are not allowed.
- Square roots of negative numbers return a meaningful message.

---

## Documentation Files

- `4.2C.docx` – Word documentation
- `4.2C.pdf` – PDF version

Both contain step-by-step explanations and screenshots of testing.

---

## References

- [Node.js](https://nodejs.org/)
- [Express Documentation](https://expressjs.com/)

---

This project was created for learning purposes as part of the SIT323 unit at Deakin University by Husainuddin Mohammed | 223380186.