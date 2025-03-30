// Import the Express framework
const express = require('express');

// Initialize the Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Root route to show basic API info
app.get('/', (req, res) => {
    res.send(`
        <h2>Calculator Microservice</h2>
        <ul>
            <li><strong>Addition:</strong> /add?num1=&lt;num&gt;&num2=&lt;num&gt;</li>
            <li><strong>Subtraction:</strong> /subtract?num1=&lt;num&gt;&num2=&lt;num&gt;</li>
            <li><strong>Multiplication:</strong> /multiply?num1=&lt;num&gt;&num2=&lt;num&gt;</li>
            <li><strong>Division:</strong> /divide?num1=&lt;num&gt;&num2=&lt;num&gt;</li>
            <li><strong>Exponentiation:</strong> /power?num1=&lt;num&gt;&num2=&lt;num&gt;</li>
            <li><strong>Square Root:</strong> /sqrt?num=&lt;num&gt;</li>
            <li><strong>Modulo:</strong> /modulo?num1=&lt;num&gt;&num2=&lt;num&gt;</li>
        </ul>
    `);
});


// ADDITION endpoint (adds two numbers provided in query parameters)
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1); // Convert first parameter to number
    const num2 = parseFloat(req.query.num2); // Convert second parameter to number

    // Check if either parameter is not a number (isNaN = "is Not a Number?")
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Both num1 and num2 must be valid numbers.' });
    }

    res.json({ result: num1 + num2 }); // Return the result as JSON
});

// SUBTRACTION endpoint (subtracts num2 from num1)
app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Both num1 and num2 must be valid numbers.' });
    }

    res.json({ result: num1 - num2 });
});

// MULTIPLICATION endpoint (multiplies num1 by num2)
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Both num1 and num2 must be valid numbers.' });
    }

    res.json({ result: num1 * num2 });
});

// DIVISION endpoint (divides num1 by num2)
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Check if inputs are numbers
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Both num1 and num2 must be valid numbers.' });
    }

    // Check for division by zero (not allowed)
    if (num2 === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero.' });
    }

    res.json({ result: num1 / num2 });
});

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Calculator microservice running at http://localhost:${PORT}`);
});

// Exponentiation endpoint (num1 raised to the power of num2)
app.get('/power', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Both num1 and num2 must be valid numbers.' });
    }

    res.json({ result: Math.pow(num1, num2) });
});

// Square root endpoint (square root of num)
app.get('/sqrt', (req, res) => {
    const num = parseFloat(req.query.num);

    if (isNaN(num)) {
        return res.status(400).json({ error: 'Parameter num must be a valid number.' });
    }

    if (num < 0) {
        return res.status(400).json({ error: 'Cannot calculate square root of a negative number.' });
    }

    res.json({ result: Math.sqrt(num) });
});

// Modulo endpoint (remainder after num1 divided by num2)
app.get('/modulo', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Both num1 and num2 must be valid numbers.' });
    }

    if (num2 === 0) {
        return res.status(400).json({ error: 'Modulo by zero is not allowed.' });
    }

    res.json({ result: num1 % num2 });
});

