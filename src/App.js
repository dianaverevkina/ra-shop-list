import { Listing } from './components/Listing/Listing';
import data from './data/data.json';
import './App.css';


function App() {
  return (
    <Listing items={data}/>
  );
}

export default App;
