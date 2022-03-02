const Navbar = (props) => {
  return (
    <nav
      className="fixed z-50 w-full flex flex-row justify-evenly items-center
    bg-columbia-blue dark:bg-slate-900 dark:text-white h-14"
    >
      {props.children}
    </nav>
  )
}

export default Navbar
