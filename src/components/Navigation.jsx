import { memo } from "react";

function Navigation({ children }) {
  return (
    <nav className="flex justify-between items-start h-1/5 px-32 dark:text-white pt-5">
      <ul className="flex gap-5">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      {children}
    </nav>
  );
}
export default memo(Navigation);
