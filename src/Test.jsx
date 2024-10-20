import React from 'react'

const Test = () => {

    // const users = [
    //     { name: 'John Doe', username: 'johndoe1', img: 'https://picsum.photos/35/35' },
    //     { name: 'Jane Smith', username: 'janesmith2', img: 'https://picsum.photos/35/35' },
    //     { name: 'Alice Johnson', username: 'alicejohnson3', img: 'https://picsum.photos/35/35' },
    //     { name: 'Bob Brown', username: 'bobbrown4', img: 'https://picsum.photos/35/35' },
    //     { name: 'Charlie Davis', username: 'charliedavis5', img: 'https://picsum.photos/35/35' },
    //     { name: 'Eve Miller', username: 'evemiller6', img: 'https://picsum.photos/35/35' },
    //     { name: 'Frank Green', username: 'frankgreen7', img: 'https://picsum.photos/35/35' },
    //     { name: 'Grace White', username: 'gracewhite8', img: 'https://picsum.photos/35/35' },
    //     { name: 'Henry Adams', username: 'henryadams9', img: 'https://picsum.photos/35/35' },
    //     { name: 'Ivy Brooks', username: 'ivybrooks10', img: 'https://picsum.photos/35/35' },
    //     { name: 'Jack Carter', username: 'jackcarter11', img: 'https://picsum.photos/35/35' },
    //     { name: 'Karen Young', username: 'karenyoung12', img: 'https://picsum.photos/35/35' },
    //     { name: 'Liam Hall', username: 'liamhall13', img: 'https://picsum.photos/35/35' },
    //     { name: 'Mia Turner', username: 'miaturner14', img: 'https://picsum.photos/35/35' },
    //     { name: 'Nathan Scott', username: 'nathanscott15', img: 'https://picsum.photos/35/35' },
    //     { name: 'Olivia Clark', username: 'oliviaclark16', img: 'https://picsum.photos/35/35' },
    //     { name: 'Paul Lewis', username: 'paullewis17', img: 'https://picsum.photos/35/35' },
    //     { name: 'Quinn Walker', username: 'quinnwalker18', img: 'https://picsum.photos/35/35' },
    //     { name: 'Rachel King', username: 'rachelking19', img: 'https://picsum.photos/35/35' },
    //     { name: 'Steve Hill', username: 'stevehill20', img: 'https://picsum.photos/35/35' }
    // ];
    
    const issueDataArray = [
        {
            userId: "6714f1b3ac28d0caf59b61e3", 
            issue: "Other",
            description: "The website goes down intermittently, preventing customers from accessing the service.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6714f1b3ac28d0caf59b61e3", 
            issue: "Other",
            description: "Users are unable to log in, and an error message is shown.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6714f1b3ac28d0caf59b61e3", 
            issue: "Contract",
            description: "The homepage takes too long to load.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6714f1b3ac28d0caf59b61e3", 
            issue: "Payment",
            description: "The search bar does not return any results.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6714f1b3ac28d0caf59b61e3", 
            issue: "Contract",
            description: "Users encounter a 404 error when accessing certain pages.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6714f45fac28d0caf59b61e5", 
            issue: "Payment",
            description: "Users are unable to complete transactions due to payment issues.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6714f45fac28d0caf59b61e5", 
            issue: "Contract",
            description: "The user's profile page takes too long to load or times out.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6714f45fac28d0caf59b61e5", 
            issue: "Payment",
            description: "Some product images are not displaying on the product pages.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6714f45fac28d0caf59b61e5", 
            issue: "Contract",
            description: "The website does not render well on mobile devices.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6714f45fac28d0caf59b61ed", 
            issue: "Other",
            description: "Users are not receiving email notifications for account activities.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6714f45fac28d0caf59b61ed", 
            issue: "Payment",
            description: "Users are requesting a dark mode feature for the website.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6714f45fac28d0caf59b61ed", 
            issue: "Contract",
            description: "There is a bug in the checkout process causing errors.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6714f45fac28d0caf59b61ed", 
            issue: "Other",
            description: "Users are unable to submit feedback through the feedback form.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6714f45fac28d0caf59b61ed", 
            issue: "Payment",
            description: "The website is not properly localized for different regions.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6712a32feccb10ce610143d4", 
            issue: "Account",
            description: "Analytics data is not updating in real-time.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6712a32feccb10ce610143d4", 
            issue: "Contract",
            description: "Some content is not displaying correctly on the website.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6712a36beccb10ce610143ee", 
            issue: "Payment",
            description: "The API response times are slow, affecting user experience.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6712a36beccb10ce610143ee", 
            issue: "Other",
            description: "Data is lost when a user deletes their account.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        },
        {
            userId: "6712a36beccb10ce610143ee", 
            issue: "Account",
            description: "Users are reporting inconsistent experiences across different browsers.",
            status: "Pending",
            attachment: "https://picsum.photos/500/500",
            contractLink: "https://example.com/contract.pdf"
        }
    ];
    
    const addUser = async (userData) => {
        try {
            const response = await fetch('http://localhost:8080/addIssue', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),  // Convert JS object to JSON string
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('User added:', data);
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Error making fetch request:', error);
        }
    };
    // Function to add all users
    const addMultipleUsers = async (users) => {
        for (let i=0;i<20;i++ ) {
            await addUser(users[i]);
        }
    };
    
    // Call the function to add all 20 users
    
    
   
    
    
    
return (
<>

<button onClick={() => { addMultipleUsers(issueDataArray) }}>Click me to start</button>
</>
  )
}

export default Test