import { CadastrosRepository } from '../repositories/CadastrosRepository.js'

export class ListCadastroService {
  async execute() {
    const cadastrosRepository = new CadastrosRepository();

    const cadastrosList = await cadastrosRepository.findAll();

    return cadastrosList;
  }
}