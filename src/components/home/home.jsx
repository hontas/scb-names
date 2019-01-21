import { h } from 'hyperapp';
import styles from './home.css';

const Table = ({ columns, data }) => (
  <div className={styles.table}>
    <div className={styles.row}>
      {columns.map(({ text }) => (
        <div className={`${styles.cell} ${styles.cellHead}`}>{text}</div>
      ))}
    </div>
    {data
      .filter(({ values }) => values[1] !== '..')
      .sort((a, b) => a.values[0] - b.values[0])
      .map(({ key, values }) => {
        const [name, year] = key;
        const [rate, count] = values;
        return (
          <tr className={styles.row}>
            <td className={styles.cell}>{name}</td>
            <td className={styles.cell}>{year}</td>
            <td className={styles.cell}>{rate}</td>
            <td className={styles.cell}>{count}</td>
          </tr>
        );
      })}
  </div>
);

const Home = ({ className, actions, state }) => {
  const { names } = state;
  console.log('names', names);

  return (
    <div className={`${styles.home} ${className}`}>
      <h1>SCB Namn statistik</h1>
      <select onchange={(e) => actions.getNamesByYear(e.target.value)}>
        {state.years.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
      {names && <Table {...names} />}
    </div>
  );
};

export default Home;
