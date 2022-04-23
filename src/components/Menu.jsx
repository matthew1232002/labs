import {Link} from "react-router-dom";
import {AppLink} from "./AppLink";

const LINKS = [
  // {
  //   to: '/lab-1',
  //   text: 'Лабораторна робота №1'
  // },
  // {
  //   to: '/lab-2',
  //   text: 'Лабораторна робота №2'
  // },
  {
    to: '/lab-3',
    text: 'Лабораторна робота №3'
  },
  // {
  //   to: '/lab-4',
  //   text: 'Лабораторна робота №4'
  // },
  {
    to: '/lab-5',
    text: 'Лабораторна робота №5'
  },
]

export const Menu = () => (
  <>
    <aside className="fixed h-full bg-gray-100 py-4 border-gray-300 border-r-2 min-w-[200px] overflow-y-auto">
      <h2 className="text-center mt-2 mb-4 font-bold tracking-wider">Лабораторні роботи</h2>
      <nav>
        {LINKS.map(item => <AppLink
            className="mt-2 w-full block px=4"
            to={item.to}
            key={item.to}
          >
            {item.text}
          </AppLink>
        )}
      </nav>
    </aside>
    <div className="min-w-[300px] h-screen" />
  </>
)
