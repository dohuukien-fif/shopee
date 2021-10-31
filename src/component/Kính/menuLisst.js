import React from 'react'
import {Link} from "react-router-dom"
 const MenuLisst = ({menuss}) => {
    return (
        <>
              {menuss.map((menus,id)=>{
                return(
                    <>
               
                 <div className="menu">
                <Link to={`/Kinhs-ss/${menus.id}`}> < img className="menu_img" src={menus.image[0]}/></Link>
                 <div className="menu_name-price">
                     <h6>{menus.name}</h6>
                     <span className="menu_price"><strong>{menus.price}</strong></span>
                     <span className="menu_price1">{menus.price1}</span>
                 </div>
             </div>
                    </>
                )
            })}
        </>
    )
}
export default MenuLisst;