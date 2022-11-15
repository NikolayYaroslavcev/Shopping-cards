import React, {useState} from 'react';
import {IProduct} from '../models';

interface ProductProps {
    products: IProduct
}


const Product = (props: ProductProps) => {
    const {products} = props

    const [details, setDetails] = useState(false)

    const btnClassName = details ? 'bg-yellow-400' : 'bg-blue-400'

    const btnClasses = ['py-2 px-4 border', btnClassName]

    const onClickHandler = () => {
        setDetails(!details)
    }


    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img className="w-1/6" src={products.image} alt={products.title}/>
            <p>{products.title}</p>
            <p className="font-bold">{products.price}</p>
            <button onClick={onClickHandler}
                    className={btnClasses.join(' ')}>{details ? 'Hide Details' : 'Show Details'}</button>
            {details &&
                <div>
                    <p>{products.description}</p>
                    <p className="text-center">Rate: <span style={{fontWeight:'bold'}}>{products?.rating?.rate}</span></p>
                </div>
            }
        </div>
    );
};

export default Product;