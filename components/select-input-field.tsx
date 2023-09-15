import React, { SelectHTMLAttributes, useState } from 'react';

interface MySelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { key: string; name: string }[];
}

const MySelectField: React.FC<MySelectFieldProps> = ({ options, ...selectProps }) => {
  const [selectedValue, setSelectedValue] = useState(selectProps.value || '');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    if (selectProps.onChange) {
      selectProps.onChange(event);
    }
  };

  return (
    <select
      {...selectProps}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={selectedValue}
      onChange={handleChange}
    >
      <option value="" disabled>
        Choose your technology
      </option>
      {options.map((tech) => (
        <option value={tech.name} key={tech.key}>
          {tech.name}
        </option>
      ))}
    </select>
  );
};

export default MySelectField;
