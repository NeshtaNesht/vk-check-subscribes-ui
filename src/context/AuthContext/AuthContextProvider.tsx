import { Spin } from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MAIN_PAGE } from "src/AppUrls";
import { authContext } from "./authContext";

type AuthContextProps = {
  children?: React.ReactNode;
};

const AuthContext: React.FC<AuthContextProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const accessToken = localStorage.getItem("access_token");
  const userId = localStorage.getItem("user_id");
  const nav = useNavigate();
  const currentHash = useMemo(
    () => new URLSearchParams(window.location.hash.substring(1)),
    []
  );
  const _authVk = useCallback(() => {
    const accessTokenHash = currentHash.get("access_token");
    const userIdHash = currentHash.get("user_id");
    if (accessTokenHash && userIdHash) {
      localStorage.setItem("access_token", accessTokenHash);
      localStorage.setItem("user_id", userIdHash);
      document.cookie = `user_id=${userIdHash}`;
      nav(MAIN_PAGE);
      setIsAuth(true);
      return;
    }
    if (accessToken && userId) {
      document.cookie = `user_id=${userId}`;
      nav(MAIN_PAGE);
      setIsAuth(true);
      return;
    }
    if (!accessToken || !userId) {
      const search = new URLSearchParams({
        client_id: import.meta.env.VITE_CLIENT_ID,
        redirect_uri: import.meta.env.VITE_REDIRECT_URI,
        response_type: "token",
        scope: "group",
      });
      document.location.href = `https://oauth.vk.com/authorize?${search}`;
    }
  }, [accessToken, currentHash, nav, userId]);

  useEffect(() => {
    _authVk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuth) {
    return <Spin size="large">Авторизация...</Spin>;
  }

  return <authContext.Provider value={{}}>{children}</authContext.Provider>;
};

export default AuthContext;
