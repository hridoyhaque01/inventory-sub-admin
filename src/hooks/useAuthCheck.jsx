import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setStore } from "../features/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem("store");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      const validUser = auth?.token && auth?.expireIn > Date.now();
      if (validUser) {
        dispatch(setStore(auth));
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
