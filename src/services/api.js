// This file contains functions to interact with your API endpoints

// Example function to fetch data from an API endpoint
export async function fetchData() {
    try {
        const response = await fetch('https://dummyapi.online/api/blogposts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
