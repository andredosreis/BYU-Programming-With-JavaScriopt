function getGrades(inputSelector) {
    // get grades from the input box
    const gredes = document.getElementById('grades').value


    // split them into an array (String.split(','))
    const gradesArray = gredes.splits(",")
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    console.log(cleanGrades)
    // return grades
    return cleanGrades
    


  }
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it

    let point = 0

    if(grade === 'A'){
        point = 4;
    }else if (grade === 'B'){
        point = 3;
    }else if(grade === 'C'){
        point = 2;
    }else if(grade === 'D'){
        point = 1;
    }

    return point

  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    const gradePoints = grades.map((grade) => lookupGrade(grade));
    // calculates the GPA
    const gpa =  gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    // return the GPA

    return gpa.toFixed(2)
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
       
    const outputElement = document.querySelector(selector)
    outputElement.innerText = gpa
  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input

    const grades = getGrades()
   
    // calculate the gpa from the grades entered
    const gpa = calculateGpa()
    // display the gpa
    outputGpa(gpa, "#output");
  }

  document.querySelector("#submitButton").addEventListener("click", clickHandler)