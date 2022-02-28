const Navbar = (props) => {
  return (
    <nav className="bg-slate-100 dark:bg-slate-900 dark:text-white h-10">
      {props.children}
    </nav>
  )
}

export default Navbar
