// Tether price should be a real number and don't accept any characters

export default function Validate(values) {
  let errors = {}; // First, we create an object
  // const justNumbers = /(^[0-9\b]+$)/;
  const justNumbers = /^[+-]?([0-9]{1,3}(,[0-9]{3})*(\.[0-9]+)?|\d*\.\d+|\d+)$/;

  if (!values.tetherValue) {
    errors.tetherValue = "این فیلد اجباری است!";
  } else if (values.tetherValue && !justNumbers.test(values.tetherValue)) {
    errors.tetherValue = "فقط عدد وارد کنید.";
  }
  return errors; // Finally we return that object
}
