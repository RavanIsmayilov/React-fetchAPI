import './App.css';
import {useEffect,useState} from "react"


function App() {

  // const [Name,setName] = useState("")
  // const [surName,setsurName] = useState("")

  const [char, setChar] = useState([]);

  async function fetchAPI(){
    try{
  
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log(data)
      setChar(data)
      
    } 
    catch(error){
      console.error("Something went wrong fetching!")
    }
  }
  
  useEffect(() =>{
    fetchAPI();
  
    return() => console.log("unsubscribe")
  },[] );


  const getFunction = () =>{

    return char.map((item) => (
      <div key={item.id}>
        <h1>Name = {item.name}</h1>
        <h1> Surname = {item.username}</h1>

      </div>
    ))
  }

  return (
    <>
    {getFunction ()}
    </>
   
  );
}



export default App;
