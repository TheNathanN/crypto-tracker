import styles from './Stats.module.scss';

const Stats = props => {
  // Destructure Props
  const { title, data } = props.stat;

  return (
    <div className={styles['container']}>
      <p>{title}</p>
      <p>{data}</p>
    </div>
  );
};

export default Stats;
