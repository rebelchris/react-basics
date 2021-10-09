import useMedia from './hooks/useMedia';

function App() {
  const isDesktop = useMedia('(min-width: 960px)');

  return (
    <div className='App'>
      {isDesktop ? <h1>Desktop</h1> : <h1>Small screen</h1>}
    </div>
  );
}

export default App;
