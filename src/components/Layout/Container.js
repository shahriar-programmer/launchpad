export default function Container({ children, className }) {
  return (
    <div
      id="navbar-container"
      className={`w-full mx-auto max-w-7xl px-4 md:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
