class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distance, time) {
      const distanceCost = distance * this.costPerKm;
      const timeCost = time * this.costPerMinute;
      const totalPrice = this.baseFare + distanceCost + timeCost;
      return totalPrice;
    }
  }
  
  
  const calculator = new UberPriceCalculator(3, 2.5, 1.5); 
  const distance = 10; 
  const time = 20; 
  const price = calculator.calculatePrice(distance, time);
  console.log(`The price for the ride is $${price}`);
  