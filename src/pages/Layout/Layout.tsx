import { ReactNode } from 'react';
import './Layout.less'
import Header from '../../components/Header/Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {location.pathname === '/home' ? <Header /> : ''}
      <main>{children}</main>
    </>
  )
}

export default Layout
