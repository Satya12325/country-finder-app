import "./App.css";
import Cards from "./components/Cards";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {useState,useEffect} from "react";
import { useDispatch,useSelector } from 'react-redux'
import { dataapi } from './Redux/getData/data.api';



function App() {
  const {isLoading,isError,data} = useSelector((state)=>state.countrydata)
  const [datas,setDatas]=useState([])
  const [load,setLoad] = useState(false);
  const [background,setBackground] = useState("white")
  const [btn,setBtn] = useState(true)
  let [region,setRegion] = useState(['Americas', 'Africa', 'Europe', 'Oceania', 'Asia', 'Antarctic'])
   const getdataapi = async ()=>{
    setLoad(true)
    try{
        const data = await fetch("https://restcountries.com/v3.1/all")
        const res = await data.json();
        console.log(res);
        setDatas(res)
        let reg= res.map((item)=>item.region)
        console.log(reg,"reg")
        // setRegion([...new Set(reg)])
        setLoad(false)
    }
    catch(err){
        setLoad(false)
        console.log(err);
    }
   
   

}
console.log(region,"region")

  const handleHightoLow = (e) => {
    const option=e.target.value;
    if(option === "all"){
      setDatas(data)
    }
    if(option==="hightolow"){
     const updatelist =    [...datas].sort((a,b)=>  a.population - b.population)
     setDatas(updatelist)
    }
    if(option==="lowtohigh"){
     const updatelist =    [...datas].sort((a,b)=>  b.population - a.population)
     setDatas(updatelist)
    }
  };
  const filterinOrigin = (e) => {
    const option=e.target.value;
    if(option == "Americas"){
        const updatelist = data.filter((item)=>item.region===option )
        setDatas(updatelist)
    }
    if(option == "Africa"){
        const updatelist = data.filter((item)=>item.region===option )
        setDatas(updatelist)
    }
    if(option == "Europe"){
        const updatelist = data.filter((item)=>item.region===option )
        setDatas(updatelist)
    }
    if(option == "Oceania"){
        const updatelist = data.filter((item)=>item.region===option )
        setDatas(updatelist)
    }
    if(option == "Asia"){
        const updatelist = data.filter((item)=>item.region===option )
        setDatas(updatelist)
    }
    if(option == "Antarctic"){
      const updatelist = data.filter((item)=>item.region===option )
        setDatas(updatelist)
    }
  };

  const handleToggleButton = () =>{
    if(background === "black"){
      setBackground("white")
      setBtn(true)

    }
    else{
      setBackground("black")
      setBtn(false)
    }
  }
const dispatch= useDispatch()
  useEffect(() => {
    dispatch(dataapi())
    getdataapi()
  },[])
  if(load){
    return <h1>...Loading</h1>
  }
  return (
    <div className="App" style={{backgroundColor:background}}>
      <Paper elevation={3} style={{height:"50px"}} sx={{backgroundColor:background,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span className="rightsortby">
          SORTBY :
          <select onChange={handleHightoLow}>
            <option value="all">All</option>
            <option value="lowtohigh">Low To High</option>
            <option value="hightolow">High To Low</option>
          </select>
        </span>
        <span>
          <select className="forcolorsfilter" onChange={filterinOrigin}>
            {
              region?.map((item)=> <option value={item}>{item}</option>)

            }
           
          </select>
        </span>
        <span>
          <button onClick={handleToggleButton}>{btn?"Night":"Day"}</button>
        </span>
      </Paper>
      <Box sx={{ flexGrow:1,padding:"20px" }}>
        <Grid container spacing={2}>
          {datas?.map((item,i)=>
            <Grid key={i} item xs={12} sm={6} md={3}>
            <Cards 
            image={item.flags.svg}
            name={item.name.common}
            Population={new Intl.NumberFormat().format(item.population)}
            Region={item.region}
            Capital={item.capital}
            Nativename={item.name.official}
            SubRegion={item.subregion}
            />
            {i}
          </Grid> 
          )
          
          }
                   
        </Grid>
      </Box>
    </div>
  );
}

export default App;
