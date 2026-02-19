import styles from './styles.module.css';

export function Footer () {
   return <footer className={styles.footer}>
    <a href="#">Ententa como funciona a técnica pomodoro 🍎</a>
    <a href="#">Pomodoro com React &copy; {new Date().getFullYear()} - feito com o ❤️</a>
   </footer>
}