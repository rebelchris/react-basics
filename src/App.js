import { ThemeProvider } from './context/ThemeContext';
import Toggle from './components/Toggle';
import Paint from './components/Paint';

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <Paint />
        <Toggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
