import {h} from 'hyperapp';
import { Link } from "@hyperapp/router";

import styles from './header.css';

const links = [
  {
    href: '/',
    text: 'Home'
  },
  {
    href: '/about',
    text: 'About'
  },
  {
    href: '/media-session-api',
    text: 'Media Session API'
  }
];

const Header = (props) => (
  <header className={styles.header}>
    <nav className={styles.linkList}>
      {links.map(({ href, text }) => (
        <Link to={href} className={styles.link}>{text}</Link>
      ))}
    </nav>
  </header>
);

export default Header;