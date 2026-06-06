import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
}

const variantStyles = {
  primary:
    'bg-accent text-white shadow-[0_20px_60px_rgba(59,132,246,0.22)] hover:bg-sky-500',
  secondary:
    'bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-900',
  ghost: 'text-slate-100 hover:text-white',
};

export default function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={
        'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-accent/60 ' +
        variantStyles[variant] +
        (className ? ` ${className}` : '')
      }
      {...props}
    >
      {children}
    </button>
  );
}
