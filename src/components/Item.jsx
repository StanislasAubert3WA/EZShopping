



const Item = (item) => {   

    return(
        <div key={key}>
            <h2>{item.title}</h2>
            <h5>{item.price}</h5>
            <p>{item.description}</p>
            <img src={item.image} alt="image" />
            <div>
                <button 
                onClick={() => {handleClick(item)}}>Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Item;