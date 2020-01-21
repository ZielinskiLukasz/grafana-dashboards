class Validators {
  static validatePort(value) {
    const portNumber = Number.parseInt(value, 10);
    if (portNumber > 0 && portNumber < 65535) {
      return '';
    }
    return 'Port should be a number and between the range of 0 and 65535';
  }

  static validateIP(value) {
    if (/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(value)) {
      return '';
    }
    return 'IP address is invalid';
  }

  static validateKeyValue(value) {
    if (
      value &&
      !value
        .split(/[\n\s]/)
        .filter(Boolean)
        .every(element => /^[a-z0-9]+:[a-z0-9]+$/.test(element))
    ) {
      return 'Values have to be in key:value format, and separated with new line or space';
    }
    return '';
  }
}

export default Validators;
