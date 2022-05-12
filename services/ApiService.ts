import axios from "axios";
import { UserInfo } from "../interfaces";

class ApiService {
  private xToken = "udEQ9DDFJzpvmSg884hwRv3Mcg5jcouOk0UPgKdAiQgg";

  constructor() {
    axios.defaults.baseURL = "https://api.monobank.ua/";
  }

  getUserInfo = async (): Promise<UserInfo> => {
    const { data } = await axios({
      method: "get",
      url: "/personal/client-info",
      headers: {
        "X-Token": this.xToken,
      },
    });

    return data;
  };
}

export default ApiService;
