export function useSeperateNumbers(number: number) {
  // Convert number to string
  let numberString = String(number);
  // Split the number string into integer and fractional parts (if any)
  let parts = numberString.split(".");
  // Get the integer part
  let integerPart = parts[0];
  // Add commas to the integer part
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // If there's a fractional part, append it back to the integer part
  if (parts.length > 1) {
    return integerPart + "." + parts[1];
  } else {
    return integerPart;
  }
}
