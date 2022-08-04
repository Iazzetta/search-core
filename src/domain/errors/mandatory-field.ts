export class MandatoryFieldError extends Error {
    constructor() {
        super('Mandatory Field!')
        this.name = 'MandatoryFieldError'
    }
}