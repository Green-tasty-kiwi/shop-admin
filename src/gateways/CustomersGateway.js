export class CustomersGateway {
    constructor({ requestSender }) {
        this._requestSender = requestSender;
    }

    async findOne(phone) {
        return this._requestSender
            .send('/customers/:id', { phone })
    }

}