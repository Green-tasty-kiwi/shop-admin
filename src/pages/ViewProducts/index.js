import { BreadCrumbs } from "../../components/common/Breadcrumbs";
import { ProductsForm } from "./ProductsForm";

const testProduct = {
    img: 'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-Orange.jpg',
    name: 'Orange',
    status: 'enabled',
    desription: 'juice',
    price: 20,
    quantity: 100,
    meta_header: 'tralala',
    meta_key: 'trululu',
    meta_description: 'trololo'
}

export default function ViewProducts({ product = testProduct }) {
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

            <ProductsForm product={product} />
        </div>
    )
}

