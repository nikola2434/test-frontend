import { SingleOrder } from "./../screens/Orders/Show/types";
import { ORDER_QUERY } from "./../screens/Orders/Show/queries";
import { GET_ORDERS_QUERY } from "~/screens/Orders/List/queries";
import client from "~/api/gql";
import { IOrderResponseType } from "./types/orderResponse";

export const orderService = {
  async getOrders(page?: number) {
    return client
      .query<IOrderResponseType>(GET_ORDERS_QUERY, {
        page,
      })
      .toPromise()
      .then((res) => res.data?.getOrders);
  },

  async getOrder(number: string) {
    return client
      .query<{ order: SingleOrder }>(ORDER_QUERY, { number })
      .toPromise()
      .then((res) => res.data);
  },
};