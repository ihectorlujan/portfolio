const Section = (props) => {
  return (
    <section
      {...props}
      className="h-screen bg-desert-storm dark:bg-slate-800 dark:text-white px-2 lg:px-20 p-14"
    >
      {props.children}
    </section>
  )
}

export default Section