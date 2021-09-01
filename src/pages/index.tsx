import styles from './index.less';

export default function IndexPage(props: any) {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <h2>Routes:</h2>
      <pre>{JSON.stringify(props.routes,  null, 2)}</pre>
    </div>
  );
}
