"use client";

import authAPI from "./authAPI";

const handleRefreshToken = async (apiFn: any) => {
  let response: any = {};
  response = await apiFn();

  if (response.statusCode === 401 && response.message === "jwt expired") {
    await refreshToken();
    response = await apiFn();
  }
  return response;
};

export const refreshToken = async () => {
  const refreshTokenResponse = await authAPI.refreshToken();
  const { accessToken } = refreshTokenResponse.data;
  localStorage.setItem("erptk", accessToken);
};

export default handleRefreshToken;
