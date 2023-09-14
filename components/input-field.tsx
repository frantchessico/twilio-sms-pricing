import React, { InputHTMLAttributes } from 'react';
import { BiSolidUser } from 'react-icons/bi';

interface MyInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

const MyInputField: React.FC<MyInputFieldProps> = ({ icon, ...inputProps }) => {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        {icon}
      </span>
      <input
        className="pl-10 pr-4 py-2 border rounded-lg w-full"
        {...inputProps}
      />
    </div>
  );
};

export default MyInputField;
