import {Outlet} from "react-router-dom";
import {AppLink} from "../../components/AppLink";

export const Lab1 = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl">Лабораторна робота № 1</h1>

      <p className="mt-2"><strong>Тема:</strong> «Поняття алгоритму. Задавання алгоритмів у вигляді блок-схем»</p>
      <p className="mt-2"><strong>Варіант №8</strong></p>

      <div className="flex gap-20 mt-4 justify-center">
        <AppLink to="linear">Лінійний</AppLink>
        <AppLink to="branched">Що розгалужується</AppLink>
        <AppLink to="circular">Циклічний</AppLink>
      </div>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  )
}
