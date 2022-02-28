const Navbar = (props) => {
  return (
    <nav
      className="flex flex-row justify-evenly items-center
    bg-fountain-blue dark:bg-slate-900 dark:text-white h-14"
    >
      {props.children}
    </nav>
  )
}

export default Navbar
