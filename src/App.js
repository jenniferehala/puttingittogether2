
import './App.css';
import PersonCard3 from './components/personcard3';

function App() {
  return (
    <div className="App">
      <PersonCard3 firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black"/>
      <PersonCard3 firstName="John" lastName="Smith" age={ 88 } hairColor="Brown"/>
      <PersonCard3 firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="Brown"/>
      <PersonCard3 firstName="Maria" lastName="Smith" age={ 62 } hairColor="Brown"/>
    </div>
  );
}

export default App;
