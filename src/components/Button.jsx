export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded px-4 py-2 font-semibold hover:opacity-90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}