class Car {
    constructor(brand, motor, color) {
      this._brand = brand;
      this._motor = motor;
      this._color = color;
    }
  
    // Método para clonar el coche
    cloneCar() {
      const ClonedCar = this.constructor[Symbol.species] || this.constructor;
      return new ClonedCar();
    }
  }
  
  export default Car;
