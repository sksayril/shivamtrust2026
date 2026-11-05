import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  className = ''
}) => {
  return (
    <div
      className={`mb-12 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-orange-500/30 bg-orange-500/10 text-orange-400 backdrop-blur-md shadow-[0_0_15px_rgba(255,87,51,0.15)]`}>
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
        {title}{' '}
        {highlight && (
          <span className="text-gradient-brand">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-slate-300/80 text-base sm:text-lg leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};

