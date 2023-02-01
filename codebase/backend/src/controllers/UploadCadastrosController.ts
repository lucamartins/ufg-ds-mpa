import { Request, Response } from 'express';

class UploadCadastrosController {
  static async handler(request: Request, response: Response) {
    console.log(request.body.base64);

    return response.status(200).send();
  }
}

export { UploadCadastrosController }
