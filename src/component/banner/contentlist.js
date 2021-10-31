import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
import {useDispatch} from"react-redux"
import {accTOCART} from"./../../action/actionType"
 function ContentList({post,loading}) {
    const dispatch = useDispatch()
  
    const handispatch =(productsss)=>{
        const action = accTOCART(productsss,1)
        dispatch(action)
      }
    return (
      <>
          {post.map((contents,id)=>{
              return(
                  <>
               <div key={id}>
               <Link className="link_content" to={`/product/${id}`}>
               <img className="image__content" src={contents.image}/>
              
                  
                  <h6 className="content-name">{contents.name}</h6>
                  <span className="content-price"><i><strong>{contents.price}</strong></i><i><span className="content-price1">{contents.price1}</span></i></span>
                  
                  </Link>
                 
               </div>
               
                  </>
              )
          })}
       </>
    )
}
export default ContentList;
