import React from 'react';
import Link from 'next/link';

interface NeumorphicButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'amber' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  type = 'button',
  disabled = false
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-xl gap-1.5',
    md: 'px-6 py-3 text-sm font-bold rounded-xl gap-2',
    lg: 'px-8 py-4 text-base font-bold rounded-2xl gap-2.5'
  };

  const variantClasses = {
    primary: 'neu-btn text-white',
    amber: 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold shadow-[0_10px_25px_-5px_rgba(245,158,11,0.4)] hover:shadow-[0_14px_30px_-5px_rgba(245,158,11,0.6)] hover:-translate-y-0.5 transition-all',
    ghost: 'neu-btn-ghost text-slate-200 hover:text-white',
    outline: 'border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500 shadow-sm transition-all'
  };

  const combinedClasses = `inline-flex items-center justify-center tracking-wide transition-all duration-200 cursor-pointer select-none active:scale-[0.98] ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

