import { Header } from "./components/Header";
import { Results } from "./components/Results";
import { UserInput } from "./components/UserInput";
import { useState } from "react";

function App() {

  const [userValue, setUserValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userValue.duration >= 1;

  function handelChange(inputIdentefier, newValue) {
    setUserValue((prevUserValue) => {
      return {
        ...prevUserValue,
        [inputIdentefier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userValue={userValue} onChange={handelChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userValue} />}
    </>
  );
}

export default App;
