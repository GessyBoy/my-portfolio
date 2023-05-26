import Link from "next/link";

const Navbar = (): JSX.Element => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Yohann's Portfolio
        </Link>
      </div>
      <Link href="/#contact-container" className="cta-btn">Contact</Link>
    </div>
  );
}

export default Navbar;
