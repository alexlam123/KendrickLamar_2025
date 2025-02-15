document.getElementById('fetch-data-btn').addEventListener('click', () => {
    fetch('https://api.example.com/data') // Replace with the actual API URL
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});