import React, {useContext} from 'react';
import {useProducts} from '../hooks/products';
import {ModalContext} from '../context/ModalContext';
import {IProduct} from '../models';
import Loader from '../components/Loader';
import {Error} from '../components/Error';
import Product from '../components/Product';
import Modal from '../components/Modal';
import CreateProduct from '../components/CreateProduct';

export const ProductsPage = () => {

    const {loading, error, products, addProduct} = useProducts()

    const {modal, open, close} = useContext(ModalContext)

    const CreateHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }
    const OnClickHandler = () => {
        open()
    }

    return (
        <div className="container mx-auto max:-w-2xl pt-5 bg-gray-400">
            {loading && <Loader/>}
            {error && <Error error={error}/>}
            {products.map(el => <Product key={el.id} products={el}/>)}

            {modal && <Modal title="Create new product" onClose={close}>
                <CreateProduct onCreate={CreateHandler}/>
            </Modal>}
            <button onClick={open}
                    className="fixed bottom-5 right-5 rounded-full bg-blue-400 text-white text-2xg px-8 py-2">Add
            </button>
        </div>
    );
};

