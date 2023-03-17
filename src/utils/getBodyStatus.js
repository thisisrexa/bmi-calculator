export default function getBodyStatus(bmi) {
  if (bmi < 16) {
    return { message: 'شما شدیدا کمبود وزن دارید.', type: 'underweight' };
  } else if (bmi >= 16 && bmi < 18.5) {
    return { message: 'شما کمبود وزن دارید.', type: 'underweight' };
  } else if (bmi >= 18.5 && bmi < 25) {
    return { message: 'شما در وضعیت نرمال قرار دارید.', type: 'normal' };
  } else if (bmi >= 25 && bmi < 30) {
    return { message: 'شما اضافه وزن دارید.', type: 'overweight' };
  } else if (bmi >= 30 && bmi < 35) {
    return { message: 'شما دچار چاقی هستید.', type: 'moderatelyObese' };
  } else if (bmi >= 35 && bmi < 40) {
    return { message: 'شما دچار چاقی مفرد هستید!', type: 'serverelyObese' };
  } else if (bmi >= 40) {
    return { message: 'شما دچار چاقی نوع خطرناک هستید!', type: 'serverelyObese' };
  } else {
    return { message: 'وضعیت غیر نرمال.' };
  }
}
