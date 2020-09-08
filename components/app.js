import React, { useEffect } from "react";
import { useRouter } from "next/router";
import SnackbarProvider from "react-simple-snackbar";
import Cookies from "js-cookie";
const App = ({ children }) => {
  const userAddress = Cookies.get("loggedUserStatus");
  const router = useRouter();
  console.log("userAddress", userAddress);
  useEffect(() => {
    if (!userAddress) {
      router.push("/");
    }
  });
  return (
    <React.Fragment>
      {userAddress && (
        <SnackbarProvider>
          <div>{children}</div>
        </SnackbarProvider>
      )}
    </React.Fragment>
  );
};

export default App;
