function scrollToSection(sectionId) {
    console.log("HEY WE MADE IT HERE")
    const section = document.getElementById(sectionId);
    console.log(section)
    section.scrollIntoView({
        behavior: "smooth"
    });
}