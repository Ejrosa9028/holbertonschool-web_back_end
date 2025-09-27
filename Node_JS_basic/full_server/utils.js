const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1).map((line) => line.split(','));

      const fields = {};
      students.forEach(([firstname, , , field]) => {
        const trimmedField = field.trim();
        if (!fields[trimmedField]) fields[trimmedField] = [];
        fields[trimmedField].push(firstname);
      });

      resolve(fields);
    });
  });
}

module.exports = readDatabase;
