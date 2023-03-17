import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '../../context/ThemeContext';

import LogoImage from '../../assets/images/react.svg';
import styles from './Header.module.scss';

export default function Header() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme();

  const mobileMenuRef = useRef(null);

  const handleToggleMenu = () => {
    mobileMenuRef.current.style.display === 'none'
      ? (mobileMenuRef.current.style.display = 'block')
      : (mobileMenuRef.current.style.display = 'none');
  };

  const handleToggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const handleChangeTheme = () => {
    alert('It will be available in the next versions.');
  };

  return (
    <header className={styles.header}>
      <div className={styles.holder}>
        <Link to='/' className={styles.logoContainer}>
          <img src={LogoImage} alt='BMI Calculator WebApp Logo' />
          <span className={styles.title}>محاسبه گر شاخص توده بدنی</span>
        </Link>
        <ul className={styles.menuContainer}>
          <li>
            <Link to='/' className={styles.menuLink}>
              خانه
            </Link>
          </li>
          <li>
            <Link to='about' className={styles.menuLink}>
              درباره شاخص توده بدنی
            </Link>
          </li>
        </ul>
        <div className={styles.actionsContainer}>
          <button onClick={handleChangeTheme}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx='12' cy='12' r='3'></circle>
              <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'></path>
            </svg>
          </button>
          <button onClick={handleToggleTheme}>
            {theme === 'light' ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='12' cy='12' r='5'></circle>
                <line x1='12' y1='1' x2='12' y2='3'></line>
                <line x1='12' y1='21' x2='12' y2='23'></line>
                <line x1='4.22' y1='4.22' x2='5.64' y2='5.64'></line>
                <line x1='18.36' y1='18.36' x2='19.78' y2='19.78'></line>
                <line x1='1' y1='12' x2='3' y2='12'></line>
                <line x1='21' y1='12' x2='23' y2='12'></line>
                <line x1='4.22' y1='19.78' x2='5.64' y2='18.36'></line>
                <line x1='18.36' y1='5.64' x2='19.78' y2='4.22'></line>
              </svg>
            )}
          </button>
        </div>
        <div className={styles.mobileMenuContainer}>
          <button onClick={handleToggleMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='3' y1='12' x2='21' y2='12'></line>
              <line x1='3' y1='6' x2='21' y2='6'></line>
              <line x1='3' y1='18' x2='21' y2='18'></line>
            </svg>
          </button>
        </div>
      </div>
      <ul ref={mobileMenuRef}>
        <li>
          <Link to='/' className={styles.menuLink}>
            خانه
          </Link>
        </li>
        <li>
          <Link to='about' className={styles.menuLink}>
            درباره شاخص توده بدنی
          </Link>
        </li>
      </ul>
    </header>
  );
}
