import { useEffect, useState, useRef } from 'react';

import { useSizes } from '../../context/SizesContext';
import calculateBMI from '../../utils/calculateBMI';
import calculateIBW from '../../utils/calculateIBW';
import getBodyStatus from '../../utils/getBodyStatus';
import unitConverter from '../../utils/unitConverter';

import styles from './Display.module.scss';

export default function Display() {
  const {
    sizes: { height, weight, measurementSystem },
    setSizes,
  } = useSizes();

  const [state, setState] = useState({
    bmi: 0,
    ibw: [],
    bodyStatus: '',
    bmiRange: ['underweight', 'normal', 'overweight', 'moderatelyObese', 'serverelyObese'],
  });

  const statusRef = useRef(null);

  useEffect(() => {
    const { type } = getBodyStatus(state.bmi);
    statusRef.current.classList.remove(...state.bmiRange);
    statusRef.current.classList.add(type);

    setState((prevState) => ({
      ...prevState,
      bmi: calculateBMI(
        measurementSystem === 'SI' ? unitConverter(height, 'cm', 'm') : height,
        weight,
        measurementSystem
      ),
      ibw: calculateIBW(measurementSystem === 'SI' ? unitConverter(height, 'cm', 'm') : height, measurementSystem),
      bodyStatus: getBodyStatus(
        calculateBMI(measurementSystem === 'SI' ? unitConverter(height, 'cm', 'm') : height, weight, measurementSystem)
      ),
    }));
  }, [height, weight, measurementSystem]);

  return (
    <div className={styles.displayContainer}>
      <h1 className={styles.bodyStatus}>{state.bodyStatus.message}</h1>
      <div className={styles.innerContainer}>
        <div className={styles.displayItem} ref={statusRef}>
          <span>{state.bmi}</span>
          <p>شاخص توده بدنی</p>
        </div>
        <div
          className={`${styles.displayItem} ${
            getBodyStatus(state.bmi).type === 'underweight' ? styles.underweight : styles.overweight
          }`}
        >
          <span>
            {Math.abs((state.ibw[1] - weight).toFixed(1))}
            {measurementSystem === 'SI' ? 'kg' : 'lb'}
          </span>
          <p>{getBodyStatus(state.bmi).type === 'underweight' ? 'میزان کمبود وزن' : 'میزان اضافه وزن'}</p>
        </div>
        <div className={`${styles.displayItem} ${styles.ideal}`}>
          <span>
            {state.ibw[0]}
            {measurementSystem === 'SI' ? 'kg' : 'lb'}
          </span>
          <p>حداقل وزن مناسب</p>
        </div>
        <div className={`${styles.displayItem} ${styles.ideal}`}>
          <span>
            {state.ibw[1]}
            {measurementSystem === 'SI' ? 'kg' : 'lb'}
          </span>
          <p>حداکثر وزن مناسب</p>
        </div>
      </div>
    </div>
  );
}
