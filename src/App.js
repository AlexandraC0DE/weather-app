import './App.css';
import Weather from "./components/Weather";
import DataCard from "./components/DataCard";


function App() {

  return (
    <>
      <DataCard />
      <Weather className='App'/>
    </>
  );
}

export default App;
