import { useEffect, useState } from "react";
import Container from "./containers/Container";
import "./styles/variables.css";
import { sampleData } from './data/sampleData';
import SearchBar from "./components/SearchBar/SearchBar";

function App() {

  const [data, setData] = useState([]);
  // const [searchField, setSearchField] = useState('');


  useEffect(() => {
    setData(sampleData);
  }, [])



  const advancedSearchChange = (e) => {

    // setSearchField(e.target.value);
    console.log(e.target.value);

  }

  // const filteredCards = data.filter(sData => sData.name === searchField);

  // console.log(filteredCards);

  return (
    <div style={{ marginLeft: '2%',marginTop: '5%'}}>
      {/* <SearchBar advancedSearchChange={advancedSearchChange} /> */}
      <Container data={data}  />
    </div>
  );
}

export default App;
