export default function Tag({ children, className = '' }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-ice-100 text-ice-500 border border-ice-200 ${className}`}
    >
      {children}
    </span>
  );
}
