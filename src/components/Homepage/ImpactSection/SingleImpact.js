export default function SingleImpact({ className, children }) {
  return (
    <div
      className={`w-full p-10 py-20 flex items-center justify-center relative ${className}`}
    >
      {children}
    </div>
  );
}
