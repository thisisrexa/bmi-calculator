import { useContext, useEffect, useState } from 'react';

import { useSizes } from '../../context/SizesContext';
import unitConverter from '../../utils/unitConverter'

import styles from './Controls.module.scss';

export default function Controls() {
  const { sizes, setSizes } = useSizes();

  const [values, setValues] = useState({
    ...sizes,
  });

  const handleHeight = (e) => {
    setValues((prevState) => ({
      ...prevState,
      height: +e.target.value,
    }));
  };

  const handleWeight = (e) => {
    setValues((prevState) => ({
      ...prevState,
      weight: +e.target.value,
    }));
  };

  const handleMeasurementSystem = (e) => {
    setValues((prevState) => ({
      ...prevState,
      measurementSystem: e.target.value,
    }));
  };

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setSizes((prevState) => ({
        ...prevState,
        ...values,
      }));
    }, 1000);

    return () => clearTimeout(timeoutID);
  }, [values]);

  return (
    <div className={styles.controlsContainer}>
      <h1 className={styles.title}>لطفا مشخصات خودتون رو وارد کنید.</h1>
      <div className={styles.selectContainer}>
        <label htmlFor='typeOfSystem'>سیستم اندازه گیری: </label>
        <select onChange={(e) => handleMeasurementSystem(e)} value={values.measurementSystem} id='typeOfSystem'>
          <option value='SI'>سیستم متریک (SI)</option>
          <option value='US'>سیستم اندازه گیری آمریکایی</option>
        </select>
      </div>
      <div>
        <div className={styles.holder}>
          <label htmlFor='heightRange' className={styles.label}>
            قد ({values.measurementSystem === 'SI' ? 'سانتی متر' : 'اینچ'})
          </label>
          <input
            type='range'
            id='heightRange'
            value={values.height}
            onChange={(e) => handleHeight(e)}
            min={
              values.measurementSystem === 'SI'
                ? 100
                : unitConverter(100, 'cm', 'in')
            }
            max={
              values.measurementSystem === 'SI'
                ? 230
                : unitConverter(230, 'cm', 'in')
            }
          />
          <span className={styles.value}>
            {values.height}
            {values.measurementSystem === 'SI' ? 'cm' : 'in'}
          </span>
        </div>
        <div className={styles.holder}>
          <label htmlFor='weightRange' className={styles.label}>
            وزن ({values.measurementSystem === 'SI' ? 'کیلوگرم' : 'پوند'})
          </label>
          <input
            type='range'
            id='weightRange'
            value={values.weight}
            onChange={(e) => handleWeight(e)}
            min={
              values.measurementSystem === 'SI'
                ? 10
                : unitConverter(10, 'kg', 'lg')
            }
            max={
              values.measurementSystem === 'SI'
                ? 200
                : unitConverter(200, 'kg', 'lb')
            }
          />
          <span className={styles.value}>
            {values.weight}
            {values.measurementSystem === 'SI' ? 'kg' : 'lb'}
          </span>
        </div>
      </div>
    </div>
  );
}
