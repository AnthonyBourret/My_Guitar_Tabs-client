// Function to format the date received from the API
// Used for the profile page

function formatDate(date: Date) {
    const initialDate = new Date(date);;
    const formattedDate = initialDate.toLocaleDateString();
    return formattedDate;
};

export default formatDate;