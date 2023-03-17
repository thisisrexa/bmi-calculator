export default function calculateIBW(height, measurementSystem) {
  if (measurementSystem === 'SI') {
    return [(18.5 * (height * height)).toFixed(1), (24.9 * (height * height)).toFixed(1)];
  } else if (measurementSystem === 'US') {
    return [((18.5 / 703) * (height * height)).toFixed(1), ((24.9 / 703) * (height * height)).toFixed(1)];
  }
}
