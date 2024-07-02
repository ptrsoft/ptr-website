import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <div className='bg-slate-500 h-[1000px]'>
      <Header/>
      </div>
    <Home/>
    </div>
  );
}

export default App;
