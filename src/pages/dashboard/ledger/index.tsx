import Layout from "@/components/UI/layout";
import { useRouter } from "next/router";
import React from "react";

export default function Ledger() {
    const router = useRouter()
    const customers = [
        {
          SrNo: 1,
          CustomerName: "Customer A",
          GSTNo: "GST12345678A",
          Address: "123 Street, City, State, Zip",
          ContactPerson: "John Doe",
          ContactDetail: "123-456-7890"
        },
        {
          SrNo: 1,
          CustomerName: "Customer A",
          GSTNo: "GST12345678A",
          Address: "123 Street, City, State, Zip",
          ContactPerson: "John Doe",
          ContactDetail: "123-456-7890"
        },
        {
          SrNo: 1,
          CustomerName: "Customer A",
          GSTNo: "GST12345678A",
          Address: "123 Street, City, State, Zip",
          ContactPerson: "John Doe",
          ContactDetail: "123-456-7890"
        },
        {
          SrNo: 1,
          CustomerName: "Customer A",
          GSTNo: "GST12345678A",
          Address: "123 Street, City, State, Zip",
          ContactPerson: "John Doe",
          ContactDetail: "123-456-7890"
        },
        {
          SrNo: 1,
          CustomerName: "Customer A",
          GSTNo: "GST12345678A",
          Address: "123 Street, City, State, Zip",
          ContactPerson: "John Doe",
          ContactDetail: "123-456-7890"
        },
        {
          SrNo: 1,
          CustomerName: "Customer A",
          GSTNo: "GST12345678A",
          Address: "123 Street, City, State, Zip",
          ContactPerson: "John Doe",
          ContactDetail: "123-456-7890"
        },
        {
          SrNo: 1,
          CustomerName: "Customer A",
          GSTNo: "GST12345678A",
          Address: "123 Street, City, State, Zip",
          ContactPerson: "John Doe",
          ContactDetail: "123-456-7890"
        },
        {
          SrNo: 1,
          CustomerName: "Customer A",
          GSTNo: "GST12345678A",
          Address: "123 Street, City, State, Zip",
          ContactPerson: "John Doe",
          ContactDetail: "123-456-7890"
        },
        {
          SrNo: 1,
          CustomerName: "Customer A",
          GSTNo: "GST12345678A",
          Address: "123 Street, City, State, Zip",
          ContactPerson: "John Doe",
          ContactDetail: "123-456-7890"
        },
        {
          SrNo: 1,
          CustomerName: "Customer A",
          GSTNo: "GST12345678A",
          Address: "123 Street, City, State, Zip",
          ContactPerson: "John Doe",
          ContactDetail: "123-456-7890"
        },
        {
          SrNo: 1,
          CustomerName: "Customer A",
          GSTNo: "GST12345678A",
          Address: "123 Street, City, State, Zip",
          ContactPerson: "John Doe",
          ContactDetail: "123-456-7890"
        },
        {
          SrNo: 1,
          CustomerName: "Customer A",
          GSTNo: "GST12345678A",
          Address: "123 Street, City, State, Zip",
          ContactPerson: "John Doe",
          ContactDetail: "123-456-7890"
        },
        {
          SrNo: 1,
          CustomerName: "Customer A",
          GSTNo: "GST12345678A",
          Address: "123 Street, City, State, Zip",
          ContactPerson: "John Doe",
          ContactDetail: "123-456-7890"
        },
        {
          SrNo: 1,
          CustomerName: "Customer A",
          GSTNo: "GST12345678A",
          Address: "123 Street, City, State, Zip",
          ContactPerson: "John Doe",
          ContactDetail: "123-456-7890"
        },
        {
          SrNo: 2,
          CustomerName: "Customer B",
          GSTNo: "GST87654321B",
          Address: "456 Avenue, City, State, Zip",
          ContactPerson: "Jane Smith",
          ContactDetail: "098-765-4321"
    
        },
        {
          SrNo: 2,
          CustomerName: "Customer B",
          GSTNo: "GST87654321B",
          Address: "456 Avenue, City, State, Zip",
          ContactPerson: "Jane Smith",
          ContactDetail: "098-765-4321"
        
        },
        {
          SrNo: 2,
          CustomerName: "Customer B",
          GSTNo: "GST87654321B",
          Address: "456 Avenue, City, State, Zip",
          ContactPerson: "Jane Smith",
          ContactDetail: "098-765-4321"
        
        },
        {
          SrNo: 2,
          CustomerName: "Customer B",
          GSTNo: "GST87654321B",
          Address: "456 Avenue, City, State, Zip",
          ContactPerson: "Jane Smith",
          ContactDetail: "098-765-4321"
        
        },
        {
          SrNo: 2,
          CustomerName: "Customer B",
          GSTNo: "GST87654321B",
          Address: "456 Avenue, City, State, Zip",
          ContactPerson: "Jane Smith",
          ContactDetail: "098-765-4321"
        
        },
        {
          SrNo: 2,
          CustomerName: "Customer B",
          GSTNo: "GST87654321B",
          Address: "456 Avenue, City, State, Zip",
          ContactPerson: "Jane Smith",
          ContactDetail: "098-765-4321"
        
        },
        {
          SrNo: 2,
          CustomerName: "Customer B",
          GSTNo: "GST87654321B",
          Address: "456 Avenue, City, State, Zip",
          ContactPerson: "Jane Smith",
          ContactDetail: "098-765-4321"
        
        },
        {
          SrNo: 2,
          CustomerName: "Customer B",
          GSTNo: "GST87654321B",
          Address: "456 Avenue, City, State, Zip",
          ContactPerson: "Jane Smith",
          ContactDetail: "098-765-4321"
        
        },
        {
          SrNo: 2,
          CustomerName: "Customer B",
          GSTNo: "GST87654321B",
          Address: "456 Avenue, City, State, Zip",
          ContactPerson: "Jane Smith",
          ContactDetail: "098-765-4321"
        
        },
        {
          SrNo: 2,
          CustomerName: "Customer B",
          GSTNo: "GST87654321B",
          Address: "456 Avenue, City, State, Zip",
          ContactPerson: "Jane Smith",
          ContactDetail: "098-765-4321"
        }
      ];

      const editHanlde = (index:number) => {
        router.push(`ledger/form/${index}`)
      }
  return (
    <div className="p-4">
      <table className="border-collapse border border-slate-400 w-full">
        <thead className="bg-indigo-400 text-white">
          <tr>
            <th className="px-2 border border-slate-300 caption-top text-start">
            Sr No
            </th>
            <th className="px-2 border border-slate-300 text-start">Customer Name</th>
            <th className="px-2 border border-slate-300 text-start">GST No</th>
            <th className="px-2 border border-slate-300 text-start">Address</th>
            <th className="px-2 border border-slate-300 text-start">Contact Person</th>
            <th className="px-2 border border-slate-300 text-start">Contact Detail</th>
            <th className="px-2 border border-slate-300 text-start">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td className="px-2 border border-gray-300">{index+1}</td>
              <td className="px-2 border border-gray-300">{customer.CustomerName}</td>
              <td className="px-2 border border-gray-300">{customer.GSTNo}</td>
              <td className="px-2 border border-gray-300">{customer.Address}</td>
              <td className="px-2 border border-gray-300">{customer.ContactPerson}</td>
              <td className="px-2 border border-gray-300">{customer.ContactDetail}</td>
              <td className="px-2 border border-gray-300">
                <button className="bg-indigo-400 text-white p-2" onClick={()=>editHanlde(index)}>Edit</button>
                <button className="bg-red-400 text-white ml-4 p-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Ledger.getLayout = Layout;
