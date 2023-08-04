import {useState,useEffect} from "react"
import Header from "./components/Header";
import Blocks from './components/Blocks';
import './App.css';




function App() {
  const [data,setData] = useState(null)
  const GetData = () =>{

    useEffect(()=>{
      const getData = async()=>{
        const starwarsData = await fetch("https://swapi.dev/api/starships/")
        const rawStarwarsData = await starwarsData.json()
        setData(rawStarwarsData)
      }
      getData()
    
    },[])
}

GetData()

 const validData = data? data: "Loading...."
  return (
    <div className="App">
      <Header/>
      <Blocks data = {validData}/>
    </div>
  );
}

export default App;
