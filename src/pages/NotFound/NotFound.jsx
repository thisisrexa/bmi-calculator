import ErrorImage from '../../assets/images/error-404.svg';
import styles from './NotFound.module.scss';

export default function NotFound() {
  return <img src={ErrorImage} alt='Error 404 illustration' className={styles.notFoundImage} />;
}
