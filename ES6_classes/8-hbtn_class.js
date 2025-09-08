class HolbertonClass {
    constructor(size, location) {
      this._size = size;
      this._location = location;
    }
  
    // Método para convertir a Number
    valueOf() {
      return this._size;
    }
  
    // Método para convertir a String
    toString() {
      return this._location;
    }
  }
  
  export default HolbertonClass;
