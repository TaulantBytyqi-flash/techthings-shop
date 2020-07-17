
import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo(props){

    const[Product, setProduct] = useState({})

    useEffect(() => {
        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }

    return (
        <div>
            <Descriptions title="Informactionet rreth Produktit">
                <Descriptions.Item label="Qmimi"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Shitur">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="Shikuar"> {Product.views}</Descriptions.Item>
                <Descriptions.Item label="Pershkrimi"> {Product.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    Add to Cart
                    </Button>
        </div>

        </div>
    )
}


export default ProductInfo