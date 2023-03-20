import { cacheExchange } from "@urql/exchange-graphcache";
import { createClient, fetchExchange } from "urql";

const client = createClient({
  url: process.env.API_URL || "http://localhost:3000/graphql",
  fetchOptions: () => {
    const token = String(process.env.API_KEY);

    return {
      headers: { "X-API-KEY": token || "" },
    };
  },
  exchanges: [fetchExchange, cacheExchange({})],
});

export default client;
