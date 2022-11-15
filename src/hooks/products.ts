import {useEffect, useState} from 'react';
import {IProduct} from '../models';
import axios, {AxiosError} from 'axios';

export const useProducts = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const addProduct=(products:IProduct)=> {
        setProducts(  prevState => [...prevState,products])
    }

    useEffect(() => {
        try {
            setError('')
            setLoading(true)
            axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
                .then(function (res) {
                    setProducts(res.data)
                    setLoading(false)
                })
        } catch (e:unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }, [])

    return {products, error,loading,addProduct}
}