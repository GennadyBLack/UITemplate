import { getErrorData } from "./notify";

export default function useFetcher() {
  const token = useCookie("accessToken").value;
  const config = useRuntimeConfig();
  const baseUrl = config.public.APP_API_HOST;
  const initialParams = {
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  if (token && token !== "") {
    initialParams.headers.Authorization = `Bearer ${token}`;
  }

  const apiFetch = $fetch.create(initialParams);

  return {
    get: async (url, config = {}) => {
      const { params = {}, headers = {} } = config;

      let opts = {
        method: "GET",
        params,
        headers: { ...initialParams?.headers, ...headers },
      };

      return await apiFetch(url, opts)
        .then((res) => {
          return res;
        })
        .catch((error) => {
          return getErrorData(error);
        });
    },
    post: async (url, body, config = {}) => {
      const headers = {
        ...initialParams?.headers,
        ...config?.headers,
      };

      const conf = {
        ...config,
        headers,
      };

      return await apiFetch(url, { method: "POST", body, ...conf })
        .then(async (res) => {
          if (res instanceof Blob) {
            return JSON.parse(await res.text());
          }
          return res;
        })
        .catch((error) => {
          return getErrorData(error);
        });
    },
    patch: async (url, body, config = {}) => {
      return await apiFetch(url, { method: "PATCH", body, ...config })
        .then((res) => {
          return res;
        })
        .catch((error) => {
          return getErrorData(error);
        });
    },
    delete: async (url, config = {}) => {
      return await apiFetch(url, { method: "DELETE", ...config })
        .then((res) => {
          return res;
        })
        .catch((error) => {
          return getErrorData(error);
        });
    },
  };
}
