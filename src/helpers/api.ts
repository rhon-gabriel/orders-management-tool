import axios from "axios";

import { IOrder } from "../containers/Orders/redux/types";

export const getOrders = async () =>
  await axios.get<IOrder[]>("http://demo4231066.mockable.io/orders");
