export default function unitConverter(number, srcUnit, destUnit) {
  switch (srcUnit) {
    case 'cm':
      if (destUnit === 'in') {
        return +(number / 2.54).toFixed(2);
      } else if (destUnit === 'm') {
        return +(number / 100).toFixed(2);
      } else {
        return `The ${destUnit} unit is not yet supported.`;
      }
      break;

    case 'in':
      if (destUnit === 'cm') {
        return +(number * 2.54).toFixed(2);
      } else {
        return `The ${destUnit} unit is not yet supported.`;
      }
      break;

    case 'kg':
      if (destUnit === 'lb') {
        return +(number * 2.205).toFixed(2);
      } else {
        return `The ${destUnit} unit is not yet supported.`;
      }
      break;

    case 'lb':
      if (destUnit === 'kg') {
        return +(number / 2.205).toFixed(2);
      } else {
        return `The ${destUnit} unit is not yet supported.`;
      }
      break;

    default:
      return `The ${srcUnit} unit is not yet supported.`
      break;
  }
}
