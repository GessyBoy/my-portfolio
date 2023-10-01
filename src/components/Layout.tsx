import Navbar from './Navbar';
import Footer from './Footer';
import ParticleEffect from './ParticleEffect';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
    <div className="particle-effect-container">
      <ParticleEffect />
      </div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;