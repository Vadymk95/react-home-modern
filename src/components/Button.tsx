import { FC } from 'react';

interface IButtonProps {
  styles: string;
}

export const Button: FC<IButtonProps> = ({ styles }) => {
  return (
    <button
      type="button"
      className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none`}
    >
      Get Started
    </button>
  );
};
