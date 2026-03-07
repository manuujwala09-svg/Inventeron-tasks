function fetchUsers() {

    fetch("https://jsonplaceholder.typicode.com/users")
    
    .then(function(response) {
        return response.json();
    })
    
    .then(function(data) {

        let tableBody = document.getElementById("userTable");
        tableBody.innerHTML = "";

        data.forEach(function(user) {

            let row = `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                </tr>
            `;

            tableBody.innerHTML += row;

        });

    })
    
    .catch(function(error) {
        console.log("Error:", error);
    });

}
