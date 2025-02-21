import PropTypes from "prop-types"

function Product(props){
    return(
        <div className="product">
            <p>Product: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Available: {props.isAvailable ? "Yes" : "No"}</p>
        </div>
    );
}

Product.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    isAvailable: PropTypes.bool,
}
Product.defaultProps = {
    name: "Milktea",
    price: 0,
    isAvailable: false,
}

export default Product;