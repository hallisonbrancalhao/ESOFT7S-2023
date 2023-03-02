import {Request, Response} from 'express'

class UserController {
    public async findUsers(req: Request, res: Response) { 
        return res.json('Hallison Brancalhão')
    }
    
    public async createUser(req: Request, res: Response) {
        return res.json('Hallison Brancalhão')
    }
}

export default new UserController()