const MobileMenu = (props) => {
  return (
    <div
      className={`${props.display} fixed w-full mt-12 flex flex-col justify-center items-center bg-fountain-blue dark:bg-slate-900 dark:text-white`}
    >
      {props.children}
    </div>
  )
}

export default MobileMenu
