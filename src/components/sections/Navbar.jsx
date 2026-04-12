import Button from '../elements/Button';
import HamburgerMenu from '../elements/HamburgerMenu';
import Logo from '../elements/Logo';

export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Blogs', href: '#blogs' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-20 my-5 md:my-3">
      <div className="wrapper flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Right Side */}
        <div className="flex items-center gap-5 lg:gap-10">
          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 lg:gap-8 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative group transition-colors duration-300 hover:text-black/60 text-base">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-brandGreen transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button className="mt-1">Contact Us</Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
