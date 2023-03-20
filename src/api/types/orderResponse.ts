import { OrdersListItem } from "./../../screens/Orders/List/types";

export interface IOrderResponseType {
  getOrders: { orders: OrdersListItem[]; pagination: IPagination };
}

export interface IPagination {
  limit: number;
  totalCount: number;
  currentPage: number;
  totalPageCount: number;
}
