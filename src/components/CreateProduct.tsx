import React, {ChangeEvent, FormEvent, useState} from 'react';
import {IProduct} from '../models';
import axios from 'axios';
import {Error} from './Error';


const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10,
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export const CreateProduct = ({onCreate}: CreateProductProps) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }

        productData.title = value

        axios.post<IProduct>('https://fakestoreapi.com/products', productData)
            .then(function (res) {
                onCreate(res.data)
            })

    }
    return (
        <form onSubmit={submitHandler}>
            <input value={value} onChange={onChangeHandler} type="text"
                   className="border py-2 px-4 mb-2 w-full outline-0" placeholder="Enter product title..."/>
            {error && <Error error={error}/>}
            <button type="submit" className="py-2 px-4 border bg-amber-200 hover:text-white">Create</button>
        </form>
    );
};

export default CreateProduct;