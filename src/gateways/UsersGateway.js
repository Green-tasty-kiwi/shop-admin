export class UsersGateway {

    constructor({ requestSender }) {
        this._requestSender = requestSender;
    }

    create(userParams) {
        return this._requestSender.send('/users', { body: userParams, method: 'POST' });
    }

    async findAll(searchParams) {
        return this._requestSender
            .send('/users', { searchParams })
    }

    async findById() {
        return this._requestSender
            .send('/users/:id')
    }

}