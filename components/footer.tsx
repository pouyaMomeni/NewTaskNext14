const Footer = () => {
  return (
    <footer className="rounded-lg shadow  bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <p className="hover:underline me-4 md:me-6 cursor-pointer">About</p>
          </li>
          <li>
            <p className="hover:underline me-4 md:me-6 cursor-pointer">
              Privacy Policy
            </p>
          </li>
          <li>
            <p className="hover:underline me-4 md:me-6 cursor-pointer">
              Licensing
            </p>
          </li>
          <li>
            <p className="hover:underline cursor-pointer">Contact</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
