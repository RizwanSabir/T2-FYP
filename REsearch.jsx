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