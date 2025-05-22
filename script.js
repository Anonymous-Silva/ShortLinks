document.getElementById('shorten-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const urlInput = document.getElementById('url-input').value;
    const resultElement = document.getElementById('result');

    try {
        const response = await fetch('https://shortlink-backend-qxre.onrender.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: urlInput })
        });

        const data = await response.json();
        if (data.short_url) {
            resultElement.innerHTML = `Link encurtado: <a href="${data.short_url}" target="_blank">${data.short_url}</a>`;
        } else {
            resultElement.textContent = `Erro: ${data.error}`;
        }
    } catch (error) {
        resultElement.textContent = 'Erro ao conectar com o servidor.';
    }
});
