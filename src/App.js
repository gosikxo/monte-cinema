import { Header } from './Components/Header';
import { MainRegisterBox } from './Components/MainRegisterBox';
import { useState } from 'react';
import { NameRegisterBox } from './Components/NameRegisterBox';
import useRegistration from './useRegistration';
import { DateTime } from "luxon";

function App() {
  const [page, setPage] = useState("first-page");
  const { password, passwordError, email, emailError, shouldShowPasswordErrors, handleChange, validateFirstStep, date, name, lastName, validateSecondStep, nameError, lastNameError, dateError } = useRegistration();

  if (page === "first-page") {
    return (
      <div className="App">
        <Header />
        <div className='content'>
          <div className='title'>
            <h1>Ahoy you!</h1>
            <h1 className='grey'>Care to register?</h1>
          </div>

          <div className='mainRegisterBox'>
            <MainRegisterBox shouldShowPasswordErrors={shouldShowPasswordErrors} password={password} email={email} emailError={emailError} passwordError={passwordError} handleChange={handleChange} />
            <div className='buttons'>
              <a href='#' className='login'>Log in instead</a>
              <button className='nextStep' onClick={() => {
                if (validateFirstStep()) {
                  setPage("second-page")
                }
              }}>Next step</button>

            </div>
          </div>
        </div>

      </div>
    );
  }

  if (page === "second-page") {
    return (
      <div className="App">
        <Header />
        <div className='content'>
          <div className='title'>
            <h1>Great!</h1>
            <h1 className='grey'>Now your name</h1>
          </div>
          <div className='mainRegisterBox secondpage'>
            <NameRegisterBox name={name} lastName={lastName} date={date} handleChange={handleChange} nameError={nameError} lastNameError={lastNameError} dateError={dateError}/>
            <div className='buttons'>
              <a className='login' href='#'>Log in instead</a>
              <button className='nextStep'
                onClick={() => {
                  if (validateSecondStep()) {
                    setPage("third-page")
                  }
                }}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <h1>Good job name!</h1>
        <p>We have sent you an email to email.</p>
        <p>Make sure to click the link from the message to activate your account.</p>
        <button onClick={() => setPage("first-page")}>Go to homepage</button>
      </div>
    </div>
  );
}

export default App;
