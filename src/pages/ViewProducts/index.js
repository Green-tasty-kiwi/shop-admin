import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BreadCrumbs } from "../../components/common/Breadcrumbs";
import { ProductsForm } from "./ProductsForm";
import { gateways } from '../../gateways';

export default function ViewProducts() {
    const [product, setProduct] = useState();
    const params = useParams();

    useEffect(() => {
        const findProduct = async () => {
            const response = await gateways.productsGateway
                .findById(params.id)
                .catch(error => console.error(error.message));

            setProduct(response);
        }
        findProduct();
    }, [params.id]);

    return (
        <div>
            <BreadCrumbs
                items={[{
                    link: '/products',
                    label: 'Products'
                },
                {
                    label: 'Product view'
                }]}
            />

            {product && <ProductsForm product={product} />}
        </div>
    )
}

