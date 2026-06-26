import { useEffect, useState } from "react";

function useOnlineStatus() {
    const [ isOnline, setIsOnline] = useState<Boolean>(navigator.onLine)
    // TODO: return { isOnline: boolean }
    useEffect(() => {
        const goOnline = () => setIsOnline(true)
        const goOffline = () => setIsOnline(false)

        window.addEventListener('online', goOnline)
        window.addEventListener('offline', goOffline)

        return () => {
            window.removeEventListener('online', goOnline)
            window.removeEventListener('offline', goOffline)
        }
    }, [])
    return {isOnline}
}

function StatusBadge() {
  const { isOnline } = useOnlineStatus();
  return <span>{isOnline ? '🟢 Online' : '🔴 Offline'}</span>;
}