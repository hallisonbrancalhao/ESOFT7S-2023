// 20 - Importar os tipos **Request e Response** do express
import { Request, Response } from 'express'

// 21 - Criamos uma classe clamada HealthCheck 
class HealthCheckController{
    // 22 - Criamos um metodo publc async chamado check que recebe 2 parametros
    public async check(req: Request, res: Response) {
        // - 23 Retornando um json pra rota que chamou
        return res.json('Hello World')
    }
}

// 24 - Exportando a classe já instanciada
export default new HealthCheckController()