export default class Building {
    constructor(sqft) {
      this._sqft = sqft;
  
      // If the class being instantiated is a subclass,
      // ensure it overrides the evacuationWarningMessage() method
      if (new.target !== Building) {
        if (
          this.evacuationWarningMessage === undefined
            || typeof this.evacuationWarningMessage !== 'function'
        ) {
          throw new Error('Class extending Building must override evacuationWarningMessage');
        }
      }
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  }
