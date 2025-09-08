import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter para sqft (heredado de Building)
  get sqft() {
    return this._sqft;
  }

  // Getter para floors
  get floors() {
    return this._floors;
  }

  // Sobrescribir el método evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
