// - 10 Importei a classe App
import app from "./app";

// 11 - Criei uma funçao main que será executada assim que a aplicaçao for iniciada
function main() {
    try {
        // 12 - Utilizamos o metodo listen do express para cirar o servidor com as definiçoes definidas
        // 13 - Passamos como parametro uma fun async anon para escrever a mensagem de confirmaçao ao iniciar
        app.listen(3000, 'localhost', async () => {
            console.log('starting server')
        })
    } catch (err) {
        // 14 - Capturando qualquer erro que aconteça durante a iniciaçao do servidor
        console.error('Starting server Error', err)
    }
}

// - 15 Chamamos a func Main para ser executada
main()