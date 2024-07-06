// app/auth/page.tsx
"use client"
import { useSearchParams } from 'next/navigation';
import AuthForm from '../components/AuthForm';


const AuthPage: React.FC = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  if (type !== 'signup' && type !== 'login') {
    return <div>Invalid type</div>;
  }

  return (
    <div>
      <h1>{type === 'signup' ? 'Signup Page' : 'Login Page'}</h1>
      <AuthForm type={type} />
    </div>
  );
};

export default AuthPage;
