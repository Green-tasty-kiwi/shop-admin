export class ProductsGateway {
    constructor({ requestSender }) {
        this._requestSender = requestSender;
    }

    create(productParams) {
        return this._requestSender.send(
            '/products',
            { body: productParams, method: 'POST' }
        );
    }

    async findAll(searchParams) {
        return this._requestSender
            .send(
                '/products',
                { query: searchParams }
            )
    }

    async findById(id) {
        return this._requestSender
            .send(`/products/${id}`)
    }

    async update(id, productParams) {
        return this._requestSender.send(
            `/products/${id}`,
            { body: productParams, method: 'POST' }
        );
    }
}
