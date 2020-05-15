import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import AuthenticateUserSeervice from '@modules/users/services/AuthenticateUserService';

export default class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticateUser = container.resolve(AuthenticateUserSeervice);

    const { user, token } = await authenticateUser.execute({ email, password });
    delete user.password;
    return res.json({ user: classToClass(user), token });
  }
}
