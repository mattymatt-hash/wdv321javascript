// JavaScript Document
/*
	This file will:
	
	- Create a Javascript object including an array
	- Convert the Javascript object into a JSON object
	- Store the JSON object into local storage
	
	Goal: Provide an example of how to create JSON objects in Javascript
	Goal: Provide an example of how to consume JSON objects in Javascript

	Use the following data for your JSON object

		student_id = 332443
		student_gpa = 3.6
		student_courses = ["WDV101","WDV131","WDV105"]

		student_id = 545467
		student_gpa = 2.7
		student_courses = ["WDV101","WDV131","WDV105","WDV221","WDV205"]	
		
		student_id = 128574
		student_gpa = 3.4
		student_courses = ["WDV101","WDV131","WDV105","WDV221","WDV205","WDV341"]	



*/

// Three dinstinct student objects
let student1 = {
	student_id: 332443,
	student_gpa: 3.6,
	student_courses: ["WDV101", "WDV131", "WDV105"]
};


let student2 = {
	student_id: 545467,
	student_gpa: 2.7,
	student_courses: ["WDV101", "WDV131", "WDV105", "WDV221", "WDV205"]
};


let student3 = {
	student_id: 128574,
	student_gpa: 3.4,
	student_courses: ["WDV101", "WDV131", "WDV105", "WDV221", "WDV205", "WDV341"]
};

// Convert the JavaScript object to a JSON string and store it in localStorage
localStorage.setItem("student1", JSON.stringify(student1));
localStorage.setItem("student2", JSON.stringify(student2));
localStorage.setItem("student3", JSON.stringify(student3));
