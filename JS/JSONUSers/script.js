document.getElementById('searchButton').addEventListener('click', function() {
    const userId = document.getElementById('searchInput').value;
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Usuário não encontrado');
            }
            return response.json();
        })
        .then(data => {
            const userInfo = `
                <h2>${data.name}</h2>
                <p><strong>Nome de usuário:</strong> ${data.username}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Telefone:</strong> ${data.phone}</p>
            `;
            document.getElementById('userInfo').innerHTML = userInfo;
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            document.getElementById('userInfo').innerHTML = '<p>Usuário não encontrado.</p>';
        });
});
