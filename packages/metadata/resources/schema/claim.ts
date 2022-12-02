const schema = {
  title: "claim data",
  description: "claim for a hypercert",
  type: "object",
  required: ["impactScopes", "workScopes", "impactTimeframe", "workTimeframe", "contributors"],
  properties: {
    name: {
      type: "string",
      description: "Identifies the asset to which this token represents",
    },
    description: {
      type: "string",
      description: "Describes the asset to which this token represents",
    },
    image: {
      type: "string",
      description:
        "A URI pointing to a resource with mime type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive.",
    },
    ref: {
      type: "string",
      description: "Describes the asset to which this token represents",
    },
    properties: {
      type: "object",
      impactScopes: {
        type: "string",
        description: "Describes the asset to which this token represents",
      },
      workScopes: {
        type: "string",
        description: "Describes the asset to which this token represents",
      },
      impactTimeframe: {
        type: "array",
        description: "Describes the asset to which this token represents",
        items: {
          type: "number",
        },
      },
      workTimeframe: {
        type: "array",
        description: "Describes the asset to which this token represents",
        items: {
          type: "number",
        },
      },
      contributors: {
        type: "array",
        description: "Describes the asset to which this token represents",
        items: {
          type: "string",
        },
      },
    },
  },
};

const config = {
  // for error messages...
  errMessages: {
    impactScopes: {
      required: "A claim must have an impact scope",
    },
    workScopes: {
      required: "A claim must have an work scope",
    },
  },
};

export { schema, config };
