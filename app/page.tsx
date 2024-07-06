// app/page.tsx
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link href="/auth?type=signup">Signup</Link>
          </li>
          <li>
            <Link href="/auth?type=login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;

