import Calculator from "./calculator";

describe('Calculator class', () => {

  const calculator = new Calculator();

  it('should sum two numbers', () => {
    const a = 3;
    const b = 5;

    expect(calculator.sum(a, b)).toBe(8);
  });

  it('should divide two numbers', () => {
    const a = 10;
    const b = 2;

    expect(calculator.divide).toBeDefined();
    expect(calculator.divide(10, 2)).toBe(5);
  });

  it('should throw an error when divide by zero', () => {
    const a = 10;
    const b = 0;

    const t = () => {
      calculator.divide(a, b);
    }

    expect(t).toThrow();
  });

  it('should log an error when divide by zero', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  
    const a = 10;
    const b = 0;

    const t = () => {
      calculator.divide(a, b);
    }

    expect(t).toThrow();
    expect(consoleSpy).toHaveBeenCalledWith('No se puede dividir por cero');
  });
});
