const btn = document.getElementById('btnPedido')
const info = document.getElementById('informacoes')

btn.addEventListener('click', () => {

    const promessa = new Promise((resolve, reject) => {

        setTimeout(() => {

            const pedido = {
                produto: info.querySelector('h2').textContent,
                preco: info.querySelector('span').textContent
            };

            resolve(pedido);

        }, 2000);

    });

    promessa
        .then((pedido) => {
            alert(`Pedido realizado: ${pedido.produto} - ${pedido.preco}`);
        })
        .catch((erro) => {
            alert(`Erro ao realizar pedido: ${erro}`);
        })
        .finally(() => {
            console.log('Processamento finalizado!');
        });

});