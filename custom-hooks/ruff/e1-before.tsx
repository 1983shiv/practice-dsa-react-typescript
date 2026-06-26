import { useState, useEffect} from "react"

interface UserProfileProps{
    userId: string
}

interface User {
  name: string;
}

function UserProfile({ userId }: UserProfileProps) {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      let cancelled = false;
      setLoading(true);
      fetch(`/api/users/${userId}`)
        .then(r => r.json())
        .then(data => { if (!cancelled) { setUser(data); setLoading(false); }})
        .catch(err => { if (!cancelled) { setError(err); setLoading(false); }});
      return () => { cancelled = true; };
    }, [userId]);
  
    if (loading) return <Spinner />;
    if (error) return <Error message={error.message} />;
    return <div>{user?.name}</div>;
  }

export default UserProfile;  