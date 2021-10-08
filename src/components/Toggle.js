import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Toggle() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={() => setTheme('red')}>RED THEME</button>
      <button onClick={() => setTheme('blue')}>BLUE THEME</button>
    </>
  );
}
