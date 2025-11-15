import Logger from "./utils/logger";

class Calculator {
  logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }

  sum(a: number, b: number): number {
    return a + b;
  }

  divide(a: number, b: number): number {
    if(b === 0) {
      this.logger.error('No se puede dividir por cero');
      throw new Error('División por cero');
    }

    return a / b;
  }
}

export default Calculator;
