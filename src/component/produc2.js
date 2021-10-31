import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = ({post,loading}) => {
 
  

  const renderList = post.map((productss) => {
    const { id, title, image, price, name } = productss;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/products/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <h2>{name}</h2>
              <div className="content">
              <div className="meta price">$ {price}</div>
                <div className="header">{title}</div>
             
               
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;