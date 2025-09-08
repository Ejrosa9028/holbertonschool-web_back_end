class Airport {
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }
  
    // Sobrescribir el método toString para devolver el código del aeropuerto
    toString() {
      return `[object ${this._code}]`;
    }
  }
  
  export default Airport;
