const contracts = {
    updateCartRequest: {
        schema: {
            type: 'object',
            properties: {
                item: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number'
                        },
                        name: {
                            type: 'string'
                        },
                        quantity: {
                            type: 'number',
                            minimum: 0
                        }
                    },
                    additionalProperties: false,
                    required: ['id', 'name']
                }
            }
        },
        example: {
            item: {
                id: 1234,
                name: '6 pack of beer',
                quantity: 56
            }
        }
    },
    updateCartResponse: {
        schema: {
            type: 'object',
            properties: {
                cart: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'number'
                            },
                            name: {
                                type: 'string'
                            },
                            quantity: {
                                type: 'number'
                            }
                        }
                    }
                }
            }
        },
        example: {
            cart: [
                {id: 5, name: 'Nuka-Cola', quantity: 5},
                {id: 37, name: 'Nuka-Cola Cherry', quantity: 2},
                {id: 284, name: 'Nuka-Cola Quantum', quantity: 1},
            ]
        }
    }
};