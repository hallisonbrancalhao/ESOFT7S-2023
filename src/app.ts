// 2 - importamos o express
import express from 'express'
// 27 - importamos a constante routes que esta em routes.ts
import routes from './routes'


// 1 -Criamos uma classe App
class App {
    // 3 - Definimos uma propriedade chamada Express que deve ser do tipo express.Aplication
    public express: express.Application

    // 4 - Criamos um construtor
    public constructor() {
        // 5 - instanciamos o express dentro da aplicaçao
        this.express = express()

        // 8 - Dizendo ao construtor que quem instanciar classe ja vai por padrao executar o metodo middleware
        this.middleware()
        // 28 - Ao instanciar esta classe, ja vai por padrao o metodo de routes declarado
        this.routes()
    }

    // 6 - Criamos um metodo Middlewere 
    public middleware(): void {
        // 7 - Habilitamos o express a entender requisiçoes em formato JSON
        this.express.use(express.json())
    }

    // 25 - Criamos um metodo chamado routes
    public routes(): void {
        // 26 - Dizemos para o Express para habilitar as rotas declaradas em routes
        this.express.use(routes)
    }
}

// 9 -exportando a classe já instanciada e quem chamar, já acassará o método express
export default new App().express