export class OrdersGateway {
    constructor({ requestSender }) {
        this._requestSender = requestSender;
    }

    create(orderParams) {
        return this._requestSender.send('/orders', { body: orderParams, method: 'POST' });
    }

    async findAll(searchParams) {
        return this._requestSender
            .send('/orders', { searchParams })
    }

    async findById() {
        return this._requestSender
            .send('/orders/:id')
    }

}