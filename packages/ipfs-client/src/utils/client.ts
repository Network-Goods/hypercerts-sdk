import { create, Options } from "ipfs-http-client";

const createClient = (options: Options) => {
  const client = create(options);

  return client;
};

export { createClient };
