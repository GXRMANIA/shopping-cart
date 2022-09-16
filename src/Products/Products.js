
import './products.css'

function Products(props) {

    return (
        <div className="products">
            {props.items.map((ele, ind) => {
                return <div key={ele.id} className="product">
                <p>{ele.name} </p>
                <p>{ele.price} </p>
                <img src={ele.img} alt={ele.name}/>
                <button>Add to cart</button>
                </div>
            })}
        </div>
    );
  }
  
  export default Products;
  