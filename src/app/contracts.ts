export const contracts = [
    {
        name: 'update cart request',
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
                name: '6 pack of beer'
            }
        }
    },
    {
        name: 'update cart response',
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
                            }
                        }
                    }
                }
            }
        },
        example: {
            cart: [
                {id: 5, name: 'Nuka-Cola'},
                {id: 37, name: 'Nuka-Cola Cherry'},
                {id: 284, name: 'Nuka-Cola Quantum'},
            ]
        }
    }
]
