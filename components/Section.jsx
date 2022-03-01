const Section = (props) => {
  return (
    <section className="h-screen bg-desert-storm dark:bg-slate-800">
      {props.children}
    </section>
  )
}

export default Section
