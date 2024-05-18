import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";

const BASE_URL = "http://localhost:3000/";

export const apiClient = () => {
  let [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeApiRequest = async <T>(
    url: string,
    options?: AxiosRequestConfig
  ) => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<T> = await axios(BASE_URL + url, options);
      return setData(response?.data);
    } catch (e: any) {
      throw setError(e);
    } finally {
      return setIsLoading(false);
    }
  };

  return { makeApiRequest, data, isLoading, error };
};
