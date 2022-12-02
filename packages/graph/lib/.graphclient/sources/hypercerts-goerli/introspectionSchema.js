"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schemaAST = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "SchemaDefinition",
            "operationTypes": [
                {
                    "kind": "OperationTypeDefinition",
                    "operation": "query",
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Query"
                        }
                    }
                },
                {
                    "kind": "OperationTypeDefinition",
                    "operation": "subscription",
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Subscription"
                        }
                    }
                }
            ],
            "directives": []
        },
        {
            "kind": "DirectiveDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Marks the GraphQL type as indexable entity.  Each type that should be an entity is required to be annotated with this directive."
            },
            "name": {
                "kind": "Name",
                "value": "entity"
            },
            "arguments": [],
            "repeatable": false,
            "locations": [
                {
                    "kind": "Name",
                    "value": "OBJECT"
                }
            ]
        },
        {
            "kind": "DirectiveDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Defined a Subgraph ID for an object type"
            },
            "name": {
                "kind": "Name",
                "value": "subgraphId"
            },
            "arguments": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "repeatable": false,
            "locations": [
                {
                    "kind": "Name",
                    "value": "OBJECT"
                }
            ]
        },
        {
            "kind": "DirectiveDefinition",
            "description": {
                "kind": "StringValue",
                "value": "creates a virtual field on the entity that may be queried but cannot be set manually through the mappings API."
            },
            "name": {
                "kind": "Name",
                "value": "derivedFrom"
            },
            "arguments": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "field"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "repeatable": false,
            "locations": [
                {
                    "kind": "Name",
                    "value": "FIELD_DEFINITION"
                }
            ]
        },
        {
            "kind": "ScalarTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "BigDecimal"
            },
            "directives": []
        },
        {
            "kind": "ScalarTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "BigInt"
            },
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "BlockChangedFilter"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "number_gte"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Block_height"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hash"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Bytes"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "number"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "number_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ScalarTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Bytes"
            },
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Contributor"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "contibutor ID is an Ethereum address",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "ID"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "hypercert the contributor has contributed to",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "hypercerts"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Hypercert_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Hypercert_filter"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Hypercert"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Contributor_filter"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ID"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ID"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercerts_"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Hypercert_filter"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter for the block changed event.",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_change_block"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BlockChangedFilter"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Contributor_orderBy"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercerts"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Hypercert"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "hypercert ID maps to the uint256 slotID in the ERC3525 Hypercert Minter",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "ID"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "fingerprint of the hyperspace claimed by the minter",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "claimHash"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Bytes"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "address of the entity claiming the impact",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "minter"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "array of know addresses representing contributors to this impact claim",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "contributors"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Contributor_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Contributor_filter"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Contributor"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "unix timestamp declaring when impact started",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "impactDateFrom"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "BigInt"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "unix timestamp declaring when impact ended",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "impactDateTo"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "BigInt"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "array of impacts declared in claim",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "impactScopes"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ImpactScope_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ImpactScope_filter"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ImpactScope"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "unix timestamp declaring when work started",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "workDateFrom"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "BigInt"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "unix timestamp declaring when work ended",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "workDateTo"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "BigInt"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "array of work declared in claim",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "workScopes"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "WorkScope_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "WorkScope_filter"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "WorkScope"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "array of rights an owner of the impact certificate holds",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "rights"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Right_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Right_filter"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Right"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "external reference, usually IPFS CID",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "uri"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "base64 formatted json string including SVG image",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "metadata"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "total unit of certificate, used for splitting and merging",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "totalUnits"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "BigInt"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "fractions of certificate",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "fractions"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "HypercertFraction_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "HypercertFraction_filter"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "HypercertFraction"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "unix timestamp of last change to entity",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "lastUpdated"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "BigInt"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "hypercert version",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "version"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "BigInt"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "HypercertFraction"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "fraction ID maps to the uint256 tokenID in the ERC3525 Hypercert Minter",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "ID"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "address of the entity owning the impact",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "owner"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Owner"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "units held by the fraction, used for splitting and merging",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "units"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "BigInt"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "link to hypercert this fraction relates to",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "hypercert"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Hypercert"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "HypercertFraction_filter"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ID"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ID"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_not_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_not_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_not_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_not_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_not_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_not_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner_"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Owner_filter"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "units"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "units_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "units_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "units_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "units_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "units_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "units_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "units_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_not_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_not_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_not_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_not_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_not_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_not_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert_"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Hypercert_filter"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter for the block changed event.",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_change_block"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BlockChangedFilter"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "HypercertFraction_orderBy"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "units"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Hypercert_filter"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ID"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ID"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "claimHash"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Bytes"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "claimHash_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Bytes"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "claimHash_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Bytes"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "claimHash_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Bytes"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "claimHash_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Bytes"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "claimHash_not_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Bytes"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_not_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_not_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_not_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_not_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_not_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter_not_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "contributors"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "contributors_not"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "contributors_contains"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "contributors_contains_nocase"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "contributors_not_contains"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "contributors_not_contains_nocase"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "contributors_"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Contributor_filter"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateFrom"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateFrom_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateFrom_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateFrom_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateFrom_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateFrom_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateFrom_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateFrom_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateTo"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateTo_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateTo_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateTo_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateTo_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateTo_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateTo_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateTo_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactScopes"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactScopes_not"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactScopes_contains"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactScopes_contains_nocase"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactScopes_not_contains"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactScopes_not_contains_nocase"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactScopes_"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ImpactScope_filter"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateFrom"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateFrom_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateFrom_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateFrom_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateFrom_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateFrom_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateFrom_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateFrom_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateTo"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateTo_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateTo_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateTo_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateTo_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateTo_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateTo_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateTo_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workScopes"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workScopes_not"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workScopes_contains"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workScopes_contains_nocase"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workScopes_not_contains"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workScopes_not_contains_nocase"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workScopes_"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "WorkScope_filter"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "rights"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "rights_not"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "rights_contains"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "rights_contains_nocase"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "rights_not_contains"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "rights_not_contains_nocase"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "rights_"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Right_filter"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_not_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_not_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_not_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_not_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_not_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri_not_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_not_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_not_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_not_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_not_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_not_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata_not_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "totalUnits"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "totalUnits_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "totalUnits_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "totalUnits_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "totalUnits_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "totalUnits_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "totalUnits_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "totalUnits_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "fractions_"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "HypercertFraction_filter"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "lastUpdated"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "lastUpdated_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "lastUpdated_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "lastUpdated_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "lastUpdated_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "lastUpdated_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "lastUpdated_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "lastUpdated_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "version"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "version_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "version_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "version_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "version_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "version_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "version_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "version_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "BigInt"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter for the block changed event.",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_change_block"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BlockChangedFilter"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Hypercert_orderBy"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "claimHash"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "minter"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "contributors"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateFrom"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactDateTo"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactScopes"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateFrom"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workDateTo"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workScopes"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "rights"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "uri"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "metadata"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "totalUnits"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "fractions"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "lastUpdated"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "version"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "ImpactScope"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "impaceScope ID maps to byts32 input of 'impactScopes' on Hypercert Minter",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "ID"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "natural language description of impact scope",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "text"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "array of hypercerts claiming this type of impact",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "hypercerts"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Hypercert_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Hypercert_filter"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Hypercert"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "ImpactScope_filter"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ID"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ID"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercerts_"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Hypercert_filter"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter for the block changed event.",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_change_block"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BlockChangedFilter"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "ImpactScope_orderBy"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercerts"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Defines the order direction, either ascending or descending",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "OrderDirection"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "asc"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "desc"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Owner"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "owner ID is an Ethereum address",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "ID"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Owner_filter"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ID"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ID"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter for the block changed event.",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_change_block"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BlockChangedFilter"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Owner_orderBy"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Query"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "contributor"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Contributor"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "contributors"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Contributor_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Contributor_filter"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Contributor"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Owner"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owners"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Owner_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Owner_filter"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Owner"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Hypercert"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercerts"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Hypercert_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Hypercert_filter"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Hypercert"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercertFraction"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "HypercertFraction"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercertFractions"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "HypercertFraction_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "HypercertFraction_filter"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "HypercertFraction"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactScope"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ImpactScope"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactScopes"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ImpactScope_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ImpactScope_filter"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ImpactScope"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workScope"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "WorkScope"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workScopes"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "WorkScope_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "WorkScope_filter"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "WorkScope"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "right"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Right"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "rights"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Right_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Right_filter"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Right"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Access to subgraph metadata",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_meta"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "_Meta_"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Right"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "impaceScope ID maps to bytes32 input of 'rights' on Hypercert Minter",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "ID"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "natural language description of rights the owner holds",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "text"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "array of hypercerts claiming these type of rights",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "hypercerts"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Hypercert_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Hypercert_filter"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Hypercert"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Right_filter"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ID"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ID"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercerts_"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Hypercert_filter"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter for the block changed event.",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_change_block"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BlockChangedFilter"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Right_orderBy"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercerts"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Subscription"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "contributor"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Contributor"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "contributors"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Contributor_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Contributor_filter"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Contributor"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owner"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Owner"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "owners"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Owner_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Owner_filter"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Owner"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercert"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Hypercert"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercerts"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Hypercert_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Hypercert_filter"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Hypercert"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercertFraction"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "HypercertFraction"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercertFractions"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "HypercertFraction_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "HypercertFraction_filter"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "HypercertFraction"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactScope"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ImpactScope"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "impactScopes"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ImpactScope_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ImpactScope_filter"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ImpactScope"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workScope"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "WorkScope"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "workScopes"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "WorkScope_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "WorkScope_filter"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "WorkScope"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "right"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "id"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Right"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "rights"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Right_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Right_filter"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The block at which the query should be executed. Can either be a `{ hash: Bytes }` value containing a block hash, a `{ number: Int }` containing the block number, or a `{ number_gte: Int }` containing the minimum block number. In the case of `number_gte`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "subgraphError"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "_SubgraphErrorPolicy_"
                                    }
                                }
                            },
                            "defaultValue": {
                                "kind": "EnumValue",
                                "value": "deny"
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Right"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Access to subgraph metadata",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_meta"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "block"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Block_height"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "_Meta_"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "WorkScope"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "impaceScope ID maps to bytes32 input of 'workScopes' on Hypercert Minter",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "ID"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "natural language description of work scope",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "text"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "array of hypercerts claiming this type of work",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "hypercerts"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "skip"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "first"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderBy"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Hypercert_orderBy"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "orderDirection"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "OrderDirection"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "where"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Hypercert_filter"
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Hypercert"
                                    }
                                }
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "WorkScope_filter"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ID"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ID"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ID"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_gt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_lt"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_gte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_lte"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_contains"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_contains_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_starts_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_starts_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_ends_with"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text_not_ends_with_nocase"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercerts_"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Hypercert_filter"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Filter for the block changed event.",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "_change_block"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BlockChangedFilter"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "WorkScope_orderBy"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "text"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "hypercerts"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "_Block_"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "The hash of the block",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "hash"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Bytes"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "The block number",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "number"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Integer representation of the timestamp stored in blocks for the chain",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "timestamp"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "The type for the top-level _meta field",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "_Meta_"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Information about a specific subgraph block. The hash of the block\nwill be null if the _meta field has a block constraint that asks for\na block number. It will be filled if the _meta field has no block constraint\nand therefore asks for the latest  block\n",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "block"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "_Block_"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "The deployment ID",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "deployment"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "If `true`, the subgraph encountered indexing errors at some past block",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "hasIndexingErrors"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Boolean"
                            }
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "_SubgraphErrorPolicy_"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Data will be returned even if the subgraph has indexing errors",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "allow"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "If the subgraph has indexing errors, data will be omitted. The default.",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "deny"
                    },
                    "directives": []
                }
            ],
            "directives": []
        }
    ]
};
exports.default = (0, graphql_1.buildASTSchema)(schemaAST, {
    assumeValid: true,
    assumeValidSDL: true
});
//# sourceMappingURL=introspectionSchema.js.map