// app/layout.tsx
import StoreProvider from './StoreProvider';


const RootLayout: React.FC = ({ children }:any) => {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
