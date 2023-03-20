import { useState, useEffect } from "react";
import OrdersShowStore from "./store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import styles from "./styles.m.styl";
import ErrorMessage from "~/components/ErrorMessage/ErrorMessage";
import Heading from "~/components/Heading/Heading";
import OrderStatus from "~/components/OrderStatus";
import DeliveryType from "~/components/DeliveryType";
import Item from "./components/Item";

type ShowParams = {
  id: string;
};

const OrdersShow = observer(
  (): JSX.Element => {
    const [state] = useState(new OrdersShowStore());
    const params: ShowParams = useParams();

    useEffect(() => {
      state.getOrder(params.id);
    }, []);

    if (state.error) return <ErrorMessage message="Заказ не найден!" />;
    if (state.loading) return <h1>Loading...</h1>;

    return (
      <div className={styles.screenWrapper}>
        <div className={styles.screen}>
          <Heading title={`Номер заказа: ${state.order?.number}`} />
          <div className={styles.tags}>
            {state.order?.status && <OrderStatus code={state.order.status} />}
            {state.order?.delivery && (
              <DeliveryType code={state.order.delivery.code} />
            )}
          </div>
          <h3 className={styles.tags}>Товары:</h3>
          <div className={styles.items}>
            {state.order?.items.map((item) => (
              <Item item={item} key={item.id} />
            ))}
          </div>

          <div className={styles.items}></div>
        </div>
      </div>
    );
  }
);

export default OrdersShow;
