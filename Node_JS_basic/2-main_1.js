const countStudents = require('./2-read_file');

countStudents("database.csv");

try {
    countStudents('nope.csv');
  } catch (error) {
    console.error(error.message);
  }
