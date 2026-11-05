import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: 'orange' | 'amber' | 'crimson' | 'none';
  variant?: 'glass' | 'neu-flat' | 'neu-convex' | 'neu-inset';
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glow = 'none',
  variant = 'glass',
  onClick
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'neu-flat':
        return 'neu-flat rounded-2xl';
      case 'neu-convex':
        return 'neu-convex rounded-2xl';
      case 'neu-inset':
        return 'neu-inset rounded-2xl';
      case 'glass':
      default:
        return 'glass-panel rounded-2xl';
    }
  };

  const getGlowClass = () => {
    switch (glow) {
      case 'orange':
        return 'before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-r before:from-orange-500/20 before:to-rose-500/20 before:-z-10';
      case 'amber':
        return 'before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-r before:from-amber-500/20 before:to-orange-500/20 before:-z-10';
      case 'crimson':
        return 'before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-r before:from-rose-600/20 before:to-red-600/20 before:-z-10';
      default:
        return '';
    }
  };

  return (
    <div
      onClick={onClick}
      className={`relative ${getVariantClass()} ${hoverEffect ? 'glass-panel-hover' : ''} ${getGlowClass()} ${className}`}
    >
      {children}
    </div>
  );
};
