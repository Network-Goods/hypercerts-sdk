declare const schema: {
    title: string;
    description: string;
    type: string;
    required: string[];
    properties: {
        name: {
            type: string;
            description: string;
        };
        description: {
            type: string;
            description: string;
        };
        image: {
            type: string;
            description: string;
        };
        ref: {
            type: string;
            description: string;
        };
        properties: {
            type: string;
            impactScopes: {
                type: string;
                description: string;
            };
            workScopes: {
                type: string;
                description: string;
            };
            impactTimeframe: {
                type: string;
                description: string;
                items: {
                    type: string;
                };
            };
            workTimeframe: {
                type: string;
                description: string;
                items: {
                    type: string;
                };
            };
            contributors: {
                type: string;
                description: string;
                items: {
                    type: string;
                };
            };
        };
    };
};
declare const config: {
    errMessages: {
        impactScopes: {
            required: string;
        };
        workScopes: {
            required: string;
        };
    };
};
export { schema, config };
//# sourceMappingURL=claim.d.ts.map