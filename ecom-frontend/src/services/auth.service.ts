import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { ILogin, IRegister } from "@/types/Auth";

const authServices = {
  register: (payload: IRegister) => instance.post(`/register`, payload),
  login: (payload: ILogin) => instance.post(`/login`, payload),
  getProfileWithToken: (token: string) =>
    instance.get(`${endpoint.AUTH}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default authServices;
