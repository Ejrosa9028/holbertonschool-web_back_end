export default class Currency {
    constructor(code, name) {
      this._code = code;
      this._name = name;
    }
  
    // Getter para code
    get code() {
      return this._code;
    }
  
    // Setter para code
    set code(newCode) {
      this._code = newCode;
    }
  
    // Getter para name
    get name() {
      return this._name;
    }
  
    // Setter para name
    set name(newName) {
      this._name = newName;
    }
  
    // Método para mostrar la moneda completa
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
