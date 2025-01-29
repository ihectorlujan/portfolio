const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 50,
      behavior: "smooth",
    });
  }
};

export default scrollToSection;
