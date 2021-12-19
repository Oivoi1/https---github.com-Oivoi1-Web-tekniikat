
let courses = [];

document.querySelector("button").addEventListener("click", addCourse)
document.getElementById("show").addEventListener("click", showAll)
function addCourse(){
    // Haetaan tiedot kentistä
    let cname = document.getElementById("courseName").value
    let participants = document.getElementById("participants").value

    // Luodaan tiedoista olio
    let course = {
        course_name: cname,
        student_num: participants
}
// Lisätään olio taulukkoon
courses.push(course)

}
function showAll(){
    // Käydään läpi kaikki kurssit taulukosta
    courses.forEach ( course => {
        let li = document.createElement("li");
        //Lisätään itemiin kurssin tiedot oliosta
        li.textContent = "Course " + course.course_name + " Has " + course.student_num + " students registered. "
        // Lisätään list item domiin
        document.querySelector("ul").appendChild(li);
    } );
}
