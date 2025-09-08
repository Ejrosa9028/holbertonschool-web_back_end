export default class HolbertonCourse {
    constructor(name, length, students) {
      // Validación estricta de tipos en tiempo de construcción
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      if (typeof length !== 'number') {
        throw new TypeError('Length must be a number');
      }
      if (!Array.isArray(students) || !students.every((s) => typeof s === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
  
      // Asignación a propiedades internas con convención de guion bajo (underscore)
      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    // GETTER para name
    get name() {
      return this._name;
    }
  
    // SETTER para name con validación de tipo
    set name(newName) {
      if (typeof newName !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = newName;
    }
  
    // GETTER para length
    get length() {
      return this._length;
    }
  
    // SETTER para length con validación de tipo
    set length(newLength) {
      if (typeof newLength !== 'number') {
        throw new TypeError('Length must be a number');
      }
      this._length = newLength;
    }
  
    // GETTER para students
    get students() {
      return this._students;
    }
  
    // SETTER para students con validación completa
    set students(newStudents) {
      if (!Array.isArray(newStudents) || !newStudents.every((s) => typeof s === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
      this._students = newStudents;
    }
  }
