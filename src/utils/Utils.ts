import { notification } from "antd";
import { get } from "lodash";

export default class Utils {
  static notificationError = (er: any) => {
    notification.error({
      message: "Ошибка запроса",
      description: get(er, "message"),
    });
  };
}
