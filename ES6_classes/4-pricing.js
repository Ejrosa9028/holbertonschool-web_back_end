export default class Pricing {
    constructor(amount, currency) {
      this._amount = amount;
      this._currency = currency;
    }
  
    // Getter para amount
    get amount() {
      return this._amount;
    }
  
    // Setter para amount
    set amount(newAmount) {
      this._amount = newAmount;
    }
  
    // Getter para currency
    get currency() {
      return this._currency;
    }
  
    // Setter para currency
    set currency(newCurrency) {
      this._currency = newCurrency;
    }
  
    // Método para mostrar el precio completo
    displayFullPrice() {
      return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }
  
    // Método estático para convertir el precio
    static convertPrice(amount, conversionRate) {
      return amount * conversionRate;
    }
  }
