export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg shadow-md bg-white ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return (
    <div className="p-4">
      {children}
    </div>
  );
}