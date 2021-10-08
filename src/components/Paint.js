import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Paint() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme.background,
        color: theme.color,
        padding: '2rem',
      }}
    >
      I'm the paint
    </div>
  );
}
