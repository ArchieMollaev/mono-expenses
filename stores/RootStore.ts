import { action, computed, makeAutoObservable, runInAction } from "mobx";
import { Account, UserInfo } from "../interfaces";
import ApiService from "../services/ApiService";
import AsyncStorage from "@react-native-async-storage/async-storage";

class RootStore {
  userInfo: UserInfo | null = null;

  @computed
  get uahBasicAccounts(): Account[] {
    return (
      this.userInfo?.accounts.filter(
        (item) =>
          item.currencyCode === 980 && ["black", "white"].includes(item.type)
      ) || []
    );
  }

  constructor(private readonly apiService: ApiService) {
    makeAutoObservable(this);
    this.fetchUserInfo();
  }

  @action
  private setUserInfo(userInfo: UserInfo | null): void {
    this.userInfo = userInfo;
  }

  private cacheUserInfo = async (data: UserInfo) => {
    await AsyncStorage.setItem("userInfo", JSON.stringify(data));
  };

  private getUserInfoFromCache = async () => {
    const json = await AsyncStorage.getItem("userInfo");

    return JSON.parse(json);
  };

  private fetchUserInfo = async () => {
    try {
      const cached = await this.getUserInfoFromCache();
      if (cached) {
        this.setUserInfo(cached);
        return;
      }
      const data = await this.apiService.getUserInfo();
      await this.cacheUserInfo(data);
      this.setUserInfo(data);
    } catch (error) {
      this.setUserInfo(null);
    }
  };
}

export default RootStore;
