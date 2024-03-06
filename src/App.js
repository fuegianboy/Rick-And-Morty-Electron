import { useEffect, useState} from "react";
import Navbar  from "./components/Navbar";
import Characters from "./components/Characters"
import Pagination from "./components/Pagination";
import Card from "./components/Card";

function App() {

  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState({})
  const [info, setinfo] = useState({})
  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response=> response.json())
      .then(data=> {
        setCharacters(data.results)
        setCharacter(data.results[0])
        setinfo(data.info)

      })
      .catch(error => console.log(error))
  }

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }
  
  const onNext = () => {
    fetchCharacters(info.next)

  }

  useEffect(() => {
    fetchCharacters(initialUrl)
   }, [])
  
  return (
    <>
      <Navbar brand="Rick And Morty Application" />
      <div className="container mt-5">
        <Pagination prev={info.prev}next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters} character={character} setCharacter={setCharacter}/>
        <Card character={character} setCharacter={setCharacter}/>
        <Pagination prev={info.prev}next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
    </>
  );
}

export default App;
