import { RouteObject } from "react-router-dom";

const homeRoutes: RouteObject[] = [
  {
    index: true,
    element: <h1>Listagem de Processos Seletivos</h1>,
  },
  {
    path: "create",
    element: <h1>Criar Processo Seletivo</h1>,
  },
];

export default homeRoutes;
