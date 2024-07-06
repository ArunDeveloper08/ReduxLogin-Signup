"use client"
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { signUp, logIn, logOut } from '../lib/userSlice';

interface AuthFormProps {
  type: 'signup' | 'login';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (type === 'signup') {
      dispatch(signUp({ email, password }));
      router.push('/auth?type=login'); // Redirect to login page
    } else if (type === 'login') {
      const user = users.find((u) => u.email === email && u.password === password);
      if (!user) {
        alert('Invalid credentials. Please sign up first.');
        return;
      }
      dispatch(logIn({ email, password }));
      router.push('/user'); // Redirect to user page
    }
    setEmail('');
    setPassword('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className='w-[50%] h-[300px] border-black border-[1px] mx-auto bg-slate-300'
    >
      <div className='grid grid-cols-2 mt-3'>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
          className='border-[1px] border-black rounded-sm'
          required
        />
      </div>
      <div className='grid grid-cols-2 mt-3'>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          className='border-[1px] border-black rounded-sm'
          required
        />
      </div>
      <div className='w-[100px] mx-auto mt-5'>
        <button 
          type="submit"
          className='bg-green-500 hover:bg-green-700 text-white p-1 rounded-md'
        >
          {type === 'signup' ? 'Sign Up' : 'Login'}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
