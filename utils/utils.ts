export function mapCurrencyCode(code: number): string {
  if (code === 980) {
    return "UAH";
  }

  if (code === 978) {
    return "EUR";
  }

  return "UNKNOWN";
}

export function formatUAH(number: number): number {
  return number / 100;
}
