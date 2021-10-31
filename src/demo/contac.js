
import React, { useEffect,useState } from 'react'
import Portlist from './PortLisst'
import { AiFillBank } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import axios from "axios"
import { Link } from 'react-router-dom';


 function Bpp() {
   const icon =   <AiFillBank /> ;
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
const [none, setnone] = useState(false)
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/product")
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchss = (text)=>{
    let matchss = countries.filter((coutry)=>{
      const regex = new RegExp(`${text}`,"gi");
      return coutry.title.match(regex)
    })
    setFilteredCountries(matchss)
  
  }

  if (loading) {
    return <p>Loading countries...</p>;
  }
console.log(filteredCountries)

    return (
        <div>
        
       <div>
       <input
        
              
        type="text"
        
        placeholder="Tìm kiếm sản phẩm ..."
        onChange={(e) => searchss(e.target.value)}
     onMouseOver={()=>setnone(!none)}
      />
       <div className="icon__navbar">
       <BsSearch className="icon__navbar--icon" />
       </div>
       </div>
      <ul className="post-lists">
      {filteredCountries&&filteredCountries.map((item,index)=>(
        
          
            <li>
   <Link className="link" to={item.link}>{item.title}</Link>
  
 </li>
        
            
  ) )}
      </ul>
   
 
  
  
      
 

    
        </div>
    )
}
  /*showRoute = (Routers)=>{
    var result = null;
    if(Routers.length > 0){
      result = Routers.map((Router,index)=>{
        return(<Route
          key={index}
          path={Router.path}
          exact={Router.exact}
          component={Router.main}
      
          
          />

        )
      })
    }
    return result;
  }*/


export default Bpp;
