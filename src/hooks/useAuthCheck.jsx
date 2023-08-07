import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);
      const validUser = auth?.token && auth?.expireIn > Date.now();
      if (validUser) {
        dispatch(setUser(auth));
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
