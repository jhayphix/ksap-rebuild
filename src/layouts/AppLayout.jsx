const AppLayout = ({ children }) => {
  return (
    <div>
      {" "}
      <nav>Side Navbar here</nav> <header>Top Navbar</header> {children}
      <footer>Footer here</footer>
    </div>
  );
};

export default AppLayout;
