export default function calculateBMI(height, weight, measurementSystem) {
  if (measurementSystem === 'SI') {
    return +(weight / (height * height)).toFixed(1);
  } else if (measurementSystem === 'US') {
    return +((weight / (height * height)) * 703).toFixed(1);
  } else {
    throw new Error(`Please pass a valid measurement system`);
  }
}
