import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom"
import {filter} from"./../../action/actionType"
 const MenuLisst = ({menuss}) => {
    const dispatch = useDispatch()
    const filters = (price)=>{
     const action =filter(price);
     dispatch(action)
    }
    return (
        <>
              {menuss.map((menus,id)=>{
                return(
                    <>
               
                 <div className="menus">
                 <div className="mnm">
                 <Link to={`/Sons/${menus.id}`}> < img className="menu_imgss" src={menus.image[0]}/></Link>
               </div>
               
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