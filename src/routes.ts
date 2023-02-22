// 16 - Importamos a classe Router do express
import { Router } from 'express'

// - importamos os controllers
import healthCheckController from './controller/healthCheckController'
import userController from './controller/userController'

//17 - Criamos uma constante que recebe a classe Router
const routes = Router()

//18 - Executamos o metodo get e post de Router através de routes, passando por parametro a rota e o metodo que deve ser executado
routes.get('/health-check', healthCheckController.check)
routes.get('/users', userController.findUsers)
routes.post('/users', userController.createUser)

//19 - 
export default routes