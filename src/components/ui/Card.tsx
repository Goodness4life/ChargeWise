import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`blur-panel rounded-3xl border border-slate-700/60 shadow-surface transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.24)] ${className}`}>
      {children}
    </div>
  );
}
