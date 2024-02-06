function processList(inputList) {
    // Check if the length of the list is not a multiple of 10
    if (inputList.length % 10 !== 0) {
        console.error("Error: Input list length must be a multiple of 10");
        return; // Exit the function
    }

    // Filter out items at positions which are a multiple of 2 or 3
    const filteredList = inputList.filter((_, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);
    
    return filteredList;
}

// Example usage:
const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const processedList = processList(inputList);
if (processedList) {
    console.log("Processed list:", processedList);
}
