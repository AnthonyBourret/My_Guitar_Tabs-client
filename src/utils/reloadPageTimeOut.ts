//Function to reload the page after a timeout to display the Toast
function reloadPageTimeOut() {
    setTimeout(() => {
        window.location.reload();
    }, 2200);
};

export default reloadPageTimeOut;