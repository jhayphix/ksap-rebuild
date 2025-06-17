const SideNavbar = () => {
  return (
    <aside className="w-side-default bg-primary-subtle text-dark-medium p-4 overflow-y-auto">
      <ul className="space-y-3">
        <li>
          <a href="#" className="block hover:text-primary">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="block hover:text-primary">
            Applications
          </a>
        </li>
        <li>
          <a href="#" className="block hover:text-primary">
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideNavbar;
