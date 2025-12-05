import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  light = false,
  centered = true 
}) => {
  const textColor = light ? 'text-white' : 'text-[#0F1419]';
  const subtitleColor = light ? 'text-gray-300' : 'text-[#4A4A4A]';
  const align = centered ? 'text-center' : 'text-left';

  return (
    <div className={`mb-16 ${align}`}>
      <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${textColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl mx-auto ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-24 h-1 bg-[#D4AF37] mt-6 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};
