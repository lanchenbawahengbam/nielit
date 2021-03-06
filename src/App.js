import { ReactComponent as MyLogo } from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
import Navbar from "./Navbar";
import ClockwithHook from "./ClockwithHook";
import Weather, { TemparatureCelcius } from "./Weather";
import { Grid } from "./Grid";
import { Layout } from "./Layout";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <header className="App-header">
        <MyLogo className="App-logo" />
        <Hello />
        <ClockwithHook />
        <Weather />
        <TemparatureCelcius />
      </header> */}
      <Grid />
      <Layout />
    </div>
  );
}

export default App;
