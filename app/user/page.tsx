// components/UserTable.tsx
"use client"
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import withAuth from '../components/withAuth';
import { logOut } from '../lib/userSlice';
import { useRouter } from 'next/navigation';

const UserTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const users = useAppSelector((state) => state.user.users);
  const currentUserEmail = useAppSelector((state) => state.user.currentUserEmail);

  const handleLogout = () => {
    dispatch(logOut());
    router.push('/auth?type=login'); // Redirect to login page
  };

  return (
    <div className='w-[70%] mx-auto mt-5'>
            <h1 className='text-center text-3xl mt-5'>Welcome, User!</h1>
            <p className='text-center text-lg mb-5'>You are logged in.</p>
            <button 
        onClick={handleLogout}
        className='block mx-auto mb-5 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded'
      >
        Log Out
      </button>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b border-gray-200'>Email</th>
            <th className='py-2 px-4 border-b border-gray-200'>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className='py-2 px-4 border-b border-gray-200'>{user.email}</td>
              <td className='py-2 px-4 border-b border-gray-200'>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withAuth(UserTable);
