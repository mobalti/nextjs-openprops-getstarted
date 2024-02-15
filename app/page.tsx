import ToggleButton from './components/ToggleButton';
import Style from './page.module.css';

export default function Home() {
  return (
    <main className={Style.main}>
      <header className={Style.header}>
        <h1>Next.js + Open Props</h1>
        <ToggleButton />
      </header>
    </main>
  );
}
