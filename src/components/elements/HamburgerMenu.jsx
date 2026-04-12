import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', id: 'home' }, // redirect
    { name: 'About', id: 'about' }, // scroll
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleClick = (item) => {
    if (item.link) {
      // 👉 If using React Router
      // navigate(item.link);

      // 👉 Normal redirect
      window.location.href = item.link;
    } else if (item.id) {
      const section = document.getElementById(item.id);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        className="w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50 relative"
        onClick={() => setIsOpen(true)}>
        <span className="block h-0.5 w-6 bg-black" />
        <span className="block h-0.5 w-6 bg-black" />
        <span className="block h-0.5 w-6 bg-black" />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer (Right → Left Full Width) */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {/* Top Bar */}
        <div className="flex justify-between items-center p-5 border-b">
          <Logo />

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl leading-none">
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col items-center justify-center h-[80%] gap-8 text-xl">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => handleClick(item)}
              className="cursor-pointer hover:opacity-70 transition">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
