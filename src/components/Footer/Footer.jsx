import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.holder}>
        Coded with &#10084;&#65039; by{' '}
        <a href='https://github.com/r3x4w' target='_blank'>
          @r3x4w
        </a>
      </div>
    </footer>
  );
}
