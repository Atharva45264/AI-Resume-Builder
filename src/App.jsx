import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

function App() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>; // prevent rendering before Clerk loads
  }

  if (!isSignedIn) {
    return <Navigate to="/auth/sign-in" />;
  }

  return <Outlet />;
}

export default App;
