const SectiionTwo = (props) => {
  return (
    <section
      {...props}
      className="lg:h-screen bg-antique-white dark:bg-slate-900  dark:text-white px-2 lg:px-20 p-14"
    >
      {props.children}
    </section>
  )
}

export default SectiionTwo
