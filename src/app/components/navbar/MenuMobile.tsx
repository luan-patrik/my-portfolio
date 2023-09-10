// 'use client'

// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'
// import { motion } from 'framer-motion'
// import { NavItem } from '../Links'

// export const MenuMobile = () => {
//   const [open, setOpen] = useState(false)

//   const variants = {
//     open: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         y: { stiffness: 1000, velocity: -100 },
//       },
//     },
//     closed: {
//       y: 50,
//       opacity: 0,
//       transition: {
//         y: { stiffness: 1000 },
//       },
//     },
//   }

//   const handleOpenMenu = () => {
//     setOpen((opened) => !opened)
//   }

//   const handleCloseMenu = () => {
//     setOpen(false)
//   }

//   return (
//     <>
//       <div className="sm:hidden flex items-center justify-end">
//         <button
//           onClick={handleOpenMenu}
//           tabIndex={0}
//           className="hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md transition focus:bg-neutral-200 dark:focus:bg-neutral-800 p-2"
//           title={open ? 'Fechar Menu' : 'Abrir Menu'}
//         >
//           {open === true ? <X /> : <Menu />}
//         </button>
//       </div>
//       {open && (
//         <motion.nav
//           // className={`flex flex-col h-screen w-screen mt-[4.5rem] items-center absolute top-0 right-0 left-0 dark:bg-neutral-900 bg-neutral-100 -z-10`}
//           initial={{ x: '100%', opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.2 }}
//           exit={{background: '#ff0000'}}
          
//         >
//           <NavItem
//             href="/"
//             title="Inicio"
//             label="Inicio"
//             onCloseMenu={handleCloseMenu}
//           />
//           <NavItem
//             href="/about"
//             title="Sobre"
//             label="Sobre"
//             onCloseMenu={handleCloseMenu}
//           />
//           <NavItem
//             href="/curriculum"
//             title="Curriculo"
//             label="Curriculo"
//             onCloseMenu={handleCloseMenu}
//           />
//         </motion.nav>
//       )}
//     </>
//   )
// }
