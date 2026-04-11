import Button from '../Button';
export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-20 my-5">
      <div className="wrapper flex justify-between items-center ">
        <h1 className="text-xl font-bold">Company Logo</h1>
        <div className="flex flex-row gap-10  items-center">
          <nav>
            <ul className="hidden md:flex gap-8 text-sm">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
            </ul>
          </nav>
          <Button className="mt-1">Contact Us</Button>
        </div>
      </div>
    </header>
  );
}
