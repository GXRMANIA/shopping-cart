import './card.css'

function Card(props) {
    return (
        <div className='cards-wrapper'>
            <div className='cards-semiwrap'>
                <div className='cards-site'>
                    {props.itemsInCart.map((ele) => {
                        return <div key={ele.item.id} data-id={ele.item.id} className="cart-item">
                            <p>{ele.item.name}</p>
                            <p>{ele.item.price}</p>
                            <img src={ele.item.img} alt="pic"/>
                            <div className='controls'>
                                <button onClick={props.changeAmount}>-</button>
                                <p>{ele.amount}</p>
                                <button onClick={props.changeAmount}>+</button>
                            </div>
                            
                        </div>
                    })}
                </div>
                    <button className='order'>Order</button>
            </div>
        </div>
    );
  }
  
  export default Card;
  