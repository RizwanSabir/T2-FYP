import { useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import './index.css';
import StatusCell from './StatusCell';
import Filters from './Filters';
import DeleteIcon from './DeleteIcon';
import User from './User';
import { DATA } from './data';
import useCurrentScreenSize from './useCurrentScreenSize';
import ScreenSizeDisplay from '../../useCurrentScreenSize';
import IssueProfile from '../Model/IssueProfile';




const TaskTable = () => {
  const [data, setData] = useState(DATA);
  const [columnFilters, setColumnFilters] = useState([]);
  const [selectedRows, setSelectedRows] = useState({});
  const [ShowIssue, setShowIssue] = useState(true);
  const [selectedRowData, setselectedRowData] = useState(null)
  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 6, //default page size
  });

  // Function to remove selected rows
  const removeSelectedRows = () => {
    const remainingData = data.filter(
      (_, index) => !selectedRows[index]
    );
    setData(remainingData);
    setSelectedRows({});
  };


  const handleDeleteRow = (rowIndex, data, setData) => {
    const updatedData = data.filter((_, index) => index !== rowIndex);
    setData(updatedData);
  };

  const userFilterFn = (row, columnId, filterValue) => {
    const user = row.getValue(columnId); // Get the user object
    if (!user || !filterValue) return true; // If no filterValue or user object is missing, show the row

    const searchTerm = filterValue.toLowerCase();
    const userName = user.name.toLowerCase();
    const userUsername = user.username.toLowerCase();

    // Check if either name or username contains the search term
    return userName.includes(searchTerm) || userUsername.includes(searchTerm);
  };

  const screenSize = useCurrentScreenSize();


 

    // Helper function to dynamically set column size based on screen size
    const getColumnSize = (baseSize) => {
      // Shrink column size for small screens
      if (screenSize === 'xxs' || screenSize === 'xs' || screenSize === 'sm') {
        return baseSize * 0.9; // Reduce size by 40% on small screens
      }
      return baseSize; // Default size for larger screens
    };
  
    // Define the columns based on the current screen size
    const columns = [
      {
        accessorKey: 'user',
        header: 'User',
        cell: User,
        size: (screenSize === 'xxs' || screenSize === 'xs' || screenSize === 'sm') ?20:200, // Dynamically adjust size
        enableColumnFilter: true,
        filterFn: userFilterFn,
      },
   

    // Conditionally include the Description column only on larger screens
    ...(screenSize !== 'xxs' && screenSize !== 'xs' && screenSize !== 'sm' 
      ? (console.log('Adding Description column for screen size:', screenSize), [
        {
          accessorKey: 'issue',
          header: 'Issue',
          cell: (props) => <p className="poppins-semibold text-[#1a3048cc]">{props.getValue()}</p>,
          size: getColumnSize(80), // Dynamically adjust size
        },
        ])
      : ""), // Exclude Description column on small screens
      
      // Conditionally include the Description column only on larger screens
      ...(screenSize !== 'xxs' && screenSize !== 'xs' && screenSize !== 'sm' 
        ? (console.log('Adding Description column for screen size:', screenSize), [
            {
              accessorKey: 'description',
              header: 'Description',
              cell: (props) => <p className="poppins-semibold text-[#1a3048cc]">{props.getValue()}</p>,
              size: getColumnSize(150),
            },
          ])
        : ""), // Exclude Description column on small screens
      {
        accessorKey: 'status',
        header: 'Status',
        cell: StatusCell,
        size: getColumnSize(150), // Dynamically adjust size
        enableColumnFilter: true,
        filterFn: (row, columnId, filterStatuses) => {
          if (filterStatuses.length === 0) return true;
          const status = row.getValue(columnId);
          return filterStatuses.includes(status?.id);
        },
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <DeleteIcon ClickFunction={() => handleDeleteRow(row.index, data, setData)} />
        ),
        size: getColumnSize(50), // Dynamically adjust size
      },


      
    ];
 
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      rowSelection: selectedRows,
      pagination,
    },
    onRowSelectionChange: setSelectedRows,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    columnResizeMode: 'onChange',
    defaultColumn: { size: 10 },
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                ...prev[rowIndex],
                [columnId]: value,
              }
              : row
          )
        ),
    },
  });




  return (
    <>
      {ShowIssue ?
       
      <div className='text-[9px] sm:text-[10px] mdm:text-[12px] flex justify-center flex-col items-center montserrat poppins-regular mt-5 mb-10    w-full'>
        {/* Table Start here */}

        <div className="bg-white  p-4  rounded-xl   lg:w-[800px]" style={{  }}>

          <div className='flex items-center flex-col sm:flex-row justify-between   mb-4'>
            <Filters columnFilters={columnFilters} setColumnFilters={setColumnFilters} />
            <button
              onClick={() => { removeSelectedRows(); }}
              disabled={!Object.keys(selectedRows).length}
              className={`  p-2 px-4 rounded-2xl text-white   ${!Object.keys(selectedRows).length ? 'bg-red-500 opacity-50 cursor-not-allowed' : 'bg-red-500'}`}>
              Remove Selected Rows
            </button>
          </div>



         <div className=''>
           {/* Render Table Headers */}
           <div className='px-2 bg-[#F7F8FA] mx-auto rounded-xl'>
            {table.getHeaderGroups().map((headerGroup) => (
              <div className="tr  flex justify-center" key={headerGroup.id}>
                <div className="th">
                  <input
                    type="checkbox"
                    className='hidden md:block custom-checkbox'
                    {...{
                      checked: table.getIsAllRowsSelected(),
                      indeterminate: table.getIsSomeRowsSelected(),
                      onChange: table.getToggleAllRowsSelectedHandler(),
                    }}
                  />
                </div>
                {headerGroup.headers.map((header) => (
                  <div
                    className="th"
                    key={header.id}
                    style={{ width: header.getSize() }}
                  >
                    {header.column.columnDef.header}

                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`}
                    ></div>
                  </div>
                ))}
              </div>
            ))}
          </div>


          {/* Render Table Rows */}
          <div className=' px-2  rounded-xl'>
            {table.getRowModel().rows.map((row) => (
             

             
             <div className="tr flex justify-center cursor-pointer " key={row.id} onClick={(e) => {e.stopPropagation(); setselectedRowData(row) }}>
                <div className="td">
                  <input
                    type="checkbox"
                    onClick={() => { setShowIssue(false) }}
                    className="hidden md:block   custom-checkbox"
                    checked={selectedRows[row.index]}
                    onChange={() => {
                      // Toggle the selected row and then filter out rows with false values
                      setSelectedRows((prev) => {
                        const updatedRows = {
                          ...prev,
                          [row.index]: !prev[row.index],
                        };
                        // Remove rows with false values
                        const filteredRows = Object.fromEntries(
                          Object.entries(updatedRows).filter(([key, value]) => value !== false)
                        );
                        return filteredRows;
                      });
                    }}
                  />
                </div>
                {row.getVisibleCells().map((cell) => (
                  <div key={cell.id} className="td" style={{ width: cell.column.getSize() }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                ))}
              </div>


            ))}
          </div>


          <div className='flex items-center justify-between poppins-semibold'>
           
           <div className='flex'>
           <h1 >Total Users</h1> 
           <p className='text-black/50'>: 232</p>
           </div>
            <div className="flex items-center space-x-4 justify-center ">


              <div className="flex   items-center space-x-4 justify-center ">
                <div
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className={`px-3 py-1 border border-gray-300 rounded-md text-gray-700 ${!table.getCanPreviousPage() ? 'cursor-not-allowed opacity-50' : ''}`}>
                  {'<'}
                </div>

                <p className="">
                  Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </p>

                <div
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className={`px-3 py-1 border border-gray-300 rounded-md text-gray-700 ${!table.getCanNextPage() ? 'cursor-not-allowed opacity-50' : ''}`}>
                  {'>'}
                </div>
              </div>
            </div>
          </div>

         </div>
          
        </div>


      </div> :
        
        <div className='border-2 border-red-500 size-[500px] bg-yellow-300'>{ShowIssue}</div>
      }

{selectedRowData && <Modal rowData={selectedRowData} onClose={() => setselectedRowData(null)} />}
    
    </>
  );
};


const Modal = ({ rowData, onClose }) => {
  if (!rowData) return null; // Return null if no row is selected

  return (
    (console.log(rowData)),
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg w-[300px] md:w-[500px]">
        <h2 className="text-xl font-bold mb-4">Row Details</h2>
        <div>
          <p><strong>User Name:</strong> {rowData.original.user.name}</p>
          <p><strong>User Username:</strong> {rowData.original.user.username}</p>
          {rowData.original.issue && <p><strong>Issue:</strong> {rowData.original.issue}</p>}
          {rowData.original.description && <p><strong>Description:</strong> {rowData.original.description}</p>}
          <p><strong>Status:</strong> {rowData.original.status.name}</p>
        </div>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default TaskTable;
