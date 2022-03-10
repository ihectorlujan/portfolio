import Image from "next/image"

const Section = (props) => {
  return (
    <div>
      <section
        {...props}
        className="h-screen bg-white dark:bg-slate-800 dark:text-white px-2 lg:px-20 p-14 flex flex-row"
      >
        {props.children}
      </section>
      <div
        style={{
          clipPath:
            "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
          width: "100%",
          height: "100%",
        }}
      >
        <Image src="/cropped.jpeg" layout="fill" />
      </div>
    </div>
  )
}

export default Section
