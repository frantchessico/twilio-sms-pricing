import React from 'react';
import Error from './messages/Error';


interface TableProps {
  data: Array<{
    "ISO": string;
    "Country": string;
    "Description": string;
    "Price / msg": string;
  }>;
}
export function CountryTable({data}: TableProps) {
  console.log(data)
  if (!Array.isArray(data)) {
    return (
      <div>
        <Error/>
      </div>
    );
  }

  return (
    
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ISO
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-dark' : 'bg-gray-100 dark:bg-gray-800'}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item["ISO"]}
              </th>
              <td className="px-6 py-4">
                {item["Country"]}
              </td>
              <td className="px-6 py-4">
                {item["Description"]}
              </td>
              <td className="px-6 py-4">
                ${item["Price / msg"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


