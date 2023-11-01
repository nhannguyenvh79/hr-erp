interface API {
  get: (enpoint: string) => Promise<any>;
  post: (enpoint: string, data: any) => Promise<any>;
  put: (enpoint: string, data: any) => Promise<any>;
  delete: (enpoint: string) => Promise<any>;
}

const BaseURL: string = "http://localhost:8000/api/v1";

const customFetchData = async (
  enpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any
) => {
  const options = {
    method: method,
    credentials: "include" as RequestCredentials,
    mode: "cors" as RequestMode,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("erptk") || "",
    },
    body: JSON.stringify(data) || null,
  };

  const response = await fetch(`${BaseURL}/${enpoint}`, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  return response.json();
};

const API: API = {
  get: async (enpoint) => {
    const response = await customFetchData(enpoint, "GET");
    return response;
  },
  post: async (enpoint, data) => {
    const response = await customFetchData(enpoint, "POST", data);
    return response;
  },
  put: async (enpoint, data) => {
    const response = await customFetchData(enpoint, "PUT", data);
    return response;
  },
  delete: async (enpoint) => {
    const response = await customFetchData(enpoint, "DELETE");
    return response;
  },
};

export default API;
