import './App.css';
import Home from './pages/homepage/home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nava from './pages/navbar/navbar';
import Puter from './pages/footer/footer';

function App() {
  return (
    <div>
      {/* <Nava /> */}
      <Home />
      <Puter />
    </div>
  );
}

export default App;
