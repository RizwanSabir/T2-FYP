import React, { useState } from 'react';
import useFetch from '../../Hooks/useFetch';
import TaskTable from './TaskTable';
import { set } from 'react-hook-form';

// Status constants
const STATUS_PENDING = { id: 1, name: "Pending" };
const STATUS_IN_REVIEW = { id: 2, name: "In Review" };
const STATUS_RESOLVED = { id: 3, name: "Resolved" };


const FetchData = () => {
    const [pagination, setPagination] = useState({
        pageIndex: 0, //initial page index
        pageSize: 6, //default page size

      });
    console.log("page index is "+pagination.pageIndex)
    const url = `${import.meta.env.VITE_SERVER_BASE_URL}`;
    const { data, loading, error } = useFetch(`${url}/Support/issues?page=${pagination.pageIndex+1}`);

    // Function to map status strings to the defined constants
    const mapStatus = (status) => {
        switch (status) {
            case "Pending":
                return STATUS_PENDING;
            case "In Review":
                return STATUS_IN_REVIEW;
            case "Resolved":
                return STATUS_RESOLVED;
        }
    };

    // If loading or error, handle those states
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
   
    // Map through the data and convert the status field
    const results = data?.data?.map((issue) => {
        const mappedStatus = mapStatus(issue.status);
        return { ...issue, status: mappedStatus };
    });

   
    return (
 
        <TaskTable DATA={results} pageCount={10} pagination={pagination} setPagination={setPagination}/>
        
    );
};

export default FetchData;
