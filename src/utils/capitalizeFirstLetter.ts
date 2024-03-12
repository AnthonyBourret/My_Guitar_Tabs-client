// Function to capitalize the first letter of a string
// Used for song titles and artists if needed

function capitalize(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
}
export default capitalize;
