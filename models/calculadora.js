function somar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error";
  } else {
    return a + b;
  }
}

exports.somar = somar;
