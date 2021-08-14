import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/sumeetharyani")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error(error));
  }, []);

  const { Provider } = UserContext;
  return <Provider value={profile}>{children}</Provider>;
};
