import environment from "@/config/environment";
import { SessionExtended } from "@/types/Auth";
import axios from "axios";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

const headers = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: environment.API_URL,
  headers,
  timeout: 60 * 1000,
});

// Interceptors are being use to get response before handled by then or catch (eg. wait token)
instance.interceptors.request.use(
  async (request) => {
    // Session check
    const session: SessionExtended | null = await getSession();
    if (session && session.accessToken) {
      // If it is using accessToken set the bearer
      request.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return request;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default instance;
