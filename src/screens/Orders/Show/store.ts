import { orderService } from "./../../../api/order.service";
import { makeAutoObservable } from "mobx";
import { SingleOrder } from "~/screens/Orders/Show/types";

export default class OrdersShowStore {
  order: SingleOrder | null = null;
  id: string | null = null;
  loading: boolean = false;
  error: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setOrder(order: SingleOrder) {
    this.order = order;
    this.id = String(order.id);
  }

  async getOrder(id: string) {
    this.loading = true;

    const res = await orderService.getOrder(id);
    if (!res?.order) {
      this.error = true;
      this.loading = false;
      return;
    }

    this.setOrder(res.order);
    this.loading = false;

  }
}