import { Header } from './Components/Header';
import { MainRegisterBox } from './Components/MainRegisterBox';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Ahoy you!</h1>
      <h1>Care to register?</h1>
      <MainRegisterBox />
    </div>
  );
}

export default App;
