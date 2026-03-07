const fetchBtn = document.getElementById('fetchBtn');
const loader = document.getElementById('loader');
const userList = document.getElementById('userList');

fetchBtn.addEventListener('click', async () => {
    // 1. Prepare UI
    userList.innerHTML = ''; // Clear previous results
    loader.classList.remove('hidden'); // Show spinner
    fetchBtn.disabled = true; // Prevent double clicks

    try {
        // 2. Fetch Data (adding a small delay to actually see the spinner)
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        // 3. Render Data
        data.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
        userList.innerHTML = "<li>Failed to load data.</li>";
    } finally {
        // 4. Hide UI
        loader.classList.add('hidden'); // Hide spinner
        fetchBtn.disabled = false;
    }
});