import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  secondary,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`${
        secondary
          ? 'btn-secondary bg-transparent text-foreground border border-accent focus:border-2 hover:gap-4'
          : 'bg-accent hover:bg-accent-dark focus:outline-none focus:border-none'
      } transition-all duration-300 rounded-full capitalize px-8 py-3 flex items-center justify-center gap-2 text-background ${className}`}
      role="button"
      aria-pressed={secondary ? 'false' : 'true'}
      {...rest}>
      {label}
    </button>
  );
};

export default Button;
