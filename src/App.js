import './App.css';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <h1 className='bg-red-700'>Hello i am Deval </h1>
    </UserContextProvider>
  );
}

export default App;
