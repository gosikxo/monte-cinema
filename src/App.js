import { Header } from './Components/Header';
import { MainRegisterBox } from './Components/MainRegisterBox';
import { useState } from 'react';
import { NameRegisterBox } from './Components/NameRegisterBox';

function App() {
  const [page, setPage] = useState("first-page");
  if (page === "first-page") {
    return (
      <div className="App">
        <Header />
        <h1>Ahoy you!</h1>
        <h1>Care to register?</h1>
        <div className='mainRegisterBox'>
          <MainRegisterBox />
          <div className='buttons'>
            <a href='#'>Log in instead</a>
            <button onClick={() => setPage("second-page")}>Next step</button>
          </div>
        </div>
      </div>
    );
  }

  if (page === "second-page") {
    return (
      <div className="App">
        <Header />
        <h1>Great!</h1>
        <h1>Now your name</h1>
        <div className='mainRegisterBox'>
          <NameRegisterBox />
          <input type='checkbox' />
          <p>I accept <a href="#">Privacy Policy</a></p>
          <div className='buttons'>
            <a href='#'>Log in instead</a>
            <button onClick={() => setPage("third-page")}>Register</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <div className='mainRegisterBox'>
        <h1>Good job name!</h1>
        <p>We have sent you an email to email.</p>
        <p>Make sure to click the link from the message to activate your account.</p>
        <button onClick={() => setPage("first-page")}>Go to homepage</button>
      </div>
    </div>
  );
}

export default App;
