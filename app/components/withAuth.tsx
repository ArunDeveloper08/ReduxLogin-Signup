// components/withAuth.tsx
"use client"
import { useRouter } from 'next/navigation';
import { useAppSelector } from '../lib/hooks';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: React.FC) => {
  const AuthenticatedComponent: React.FC = (props) => {
    const router = useRouter();
    const users = useAppSelector((state) => state.user.users);
    const isAuthenticated = users.some((user) => user.isLoggedIn);

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/auth?type=login');
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null; // Optionally, show a loading spinner or message here
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
