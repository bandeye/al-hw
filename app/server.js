// Import the Express.js library
import express, { json } from 'express';

// Create an Express application instance
const app = express();

// Define the port number the server will listen on.
// We use a default of 3000 if the PORT environment variable is not set.
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies in incoming requests.
// This is necessary to handle data sent from a front-end application.
app.use(json());

// A simple data array to serve as our "database"
let tasks = [
  //{ id: 1, title: 'First task', content: 'This is the content of the first task.' },
  //{ id: 2, title: 'Second task', content: 'This is the content of the second task.' },
  //{ id: 3, title: 'Third task', content: 'This is the content of the third task.' },
];

app.post('/tasks', (req, res) => {
    // Correctly get the new task data from the request body
    const newTask = req.body;

    // A simple way to assign an ID to the new task
    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const taskWithId = { id: newId, ...newTask };

    // Push the new task into our array
    tasks.push(taskWithId);

    // Respond with a 201 Created status and the newly created task
    res.status(201).json(taskWithId);
});

app.get('/tasks', (req, res) => {
  // Send a JSON response with the tasks data.
  res.status(200).json(tasks);
});

/**
 * Define a GET route for fetching a single task by its ID.
 * This route uses a URL parameter ':id' to identify the specific task.
 */
app.get('/tasks/:id', (req, res) => {
  // Get the ID from the URL parameter. The parameter is a string, so we convert it to a number.
  const taskId = parseInt(req.params.id);

  // Find the task with the matching ID.
  const task = tasks.find(p => p.id === taskId);

  // Check if the task was found.
  if (task) {
    // If found, send the task data.
    res.status(200).json(task);
  } else {
    // If not found, send a 404 Not Found status with a message.
    res.status(404).send('task not found.');
  }
});

/**
 * Define a PUT route for updating an existing task by its ID.
 * This route expects a JSON body with the new data.
 */
app.put('/tasks/:id', (req, res) => {
  // Get the ID from the URL parameter.
  const taskId = parseInt(req.params.id);

  // Find the index of the task with the matching ID.
  const taskIndex = tasks.findIndex(p => p.id === taskId);

  // Check if the task was found.
  if (taskIndex === -1) {
    // If not found, send a 404 Not Found status.
    return res.status(404).send('task not found.');
  }

  // Get the updated data from the request body.
  const updatedtaskData = req.body;

  // Validate that the request body contains the required fields.
  if (!updatedtaskData.title || !updatedtaskData.content) {
    return res.status(400).send('Title and content are required.');
  }

  // Update the existing task's properties.
  // We use the spread operator to merge the existing data with the new data.
  tasks[taskIndex] = { ...tasks[taskIndex], ...updatedtaskData };

  // Get the newly updated task to send in the response.
  const updatedtask = tasks[taskIndex];

  // Send a 200 OK status with the updated task data.
  res.status(200).json(updatedtask);
});

/**
 * Define a DELETE route for deleting a task by its ID.
 * This route uses a URL parameter ':id' to identify the task to be deleted.
 */
app.delete('/tasks/:id', (req, res) => {
  // Get the ID from the URL parameter.
  const taskId = parseInt(req.params.id);

  // Find the index of the task with the matching ID.
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  // Check if the task was found.
  if (taskIndex === -1) {
    // If not found, send a 404 Not Found status with a message.
    return res.status(404).send('Task not found.');
  }

  // Remove the task from the array.
  tasks.splice(taskIndex, 1);

  // Send a 204 No Content status, which is standard for successful DELETE operations.
  // There is no response body.
  res.status(204).send();
});

// Start the server and listen for incoming requests on the specified port.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
