class Logger {
  constructor() { }

  log(str: string) {
    console.log(str);
  }

  error(str: string) {
    console.error(str);
  }
}

export default Logger;
