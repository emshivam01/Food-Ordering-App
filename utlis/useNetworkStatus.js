import { useState, useEffect } from "react";

const useNetworkStatus = () => {
  const [NetworkStatus, SetNetworkStatus] = useState(true);

  function OnlineStatus() {
    SetNetworkStatus(true);
  }

  function OfflineStatus() {
    SetNetworkStatus(false);
  }

  useEffect(() => {
    window.addEventListener("online", OnlineStatus);

    window.addEventListener("offline", OfflineStatus);
  }, []);
  return NetworkStatus;
};

export default useNetworkStatus;
