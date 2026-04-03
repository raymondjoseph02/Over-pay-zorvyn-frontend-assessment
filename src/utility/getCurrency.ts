interface currencyProps {
  currency: string;
}
export const getCurrency = ({ currency }: currencyProps) => {
  switch (currency.toLowerCase()) {
    case "USD".toLowerCase():
      return "$";
    case "EUR".toLowerCase():
      return "€";
    case "GBP".toLowerCase():
      return "£";
    default:
      return "$";
  }
};

export default getCurrency;
