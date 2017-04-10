//Biograpy object
var bio = {
    "name": "Kensuke Shibata",
    "role": "SYSTEMS ADMINISTRATOR",
    "contacts": {
        "mobile": "021-041-8158",
        "email": "kensukeshibata@gmail.com",
        "github": "keshibat",
        "location": "New Zealand",
    },
    "welcomeMessage": "",
    "skills": [
        "UNIX", "Bash", "Python", "JavaScript"
    ],
    "biopic": "images/biopic.jpg"
};

/*
 *Responsible for displaying the biographical information of the resume.
 *function is encapsulated in the .display property of the bio object
 */
bio.display = function() {
    //adding name, role
    var formattedName = HTMLheaderName.replace("%data%", "Kensuke Shibata");
    var formattedRole = HTMLheaderRole.replace("%data%", "SYSTEMS ADMINISTRATOR");
    $("#topContacts, #footerContacts").before(formattedRole, formattedName);

    //adding contact info
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioInfo = formattedMobile + formattedEmail + formattedGithub + formattedLocation + formattedBioInfo;
    $("#topContacts, #footerContacts").append(formattedBioInfo);

    //adding bio picture
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);

    //Welcome message
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);


    //Adding skills to the resume
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
};




//Create work object with properties defining a job position , employer, years worked and the city using dot notation



var work = {
    "jobs": [{
        "employer": "NOKIA",
        "title": "Systems Administrator",
        "location": "Tokyo, Japan",
        "dates": "August 2014 – May 2016",
        "description": "Operation and maintenance Online Charging System (Unix based) which consists of massive traffics and millions of live subscribers. \n Reproduce identified problems in the Lab and provide information for debugging software if necessary. \n Document root cause and fix procedure for the external customer. \n Test fix approach at the lab then implement and deploy fixes on the commercial site. \n The team works shift 24/7"
    }, {
        "employer": "NOKIA",
        "title": "Test Engineer",
        "location": "Tokyo, Japan",
        "dates": "September 2013 – August 2014",
        "description": "Gained the test know-how from the Development Engineer and applied to Nokia Japan test case scenario for the very first Online Charging System in Japan. \n Performed testing for the design. \n Analyzed and concluded on findings, then provide feedback for the consultation with Development Engineer. \n Remedy and optimize the system of device being tested to meet the defined performance criteria."
    }, ]
};


/*
 *Responsible for displaying the work information of the resume.
 *function is encapsulated in the .display property of the work object
 */

work.display = function() {
    for (var count = 0; count < work.jobs.length; count++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[count].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[count].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[count].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[count].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[count].description);
        $(".work-entry:last").append(formattedEmployer);
        $(".work-entry:last").append(formattedTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
};




//Create project object with properties defining a title , dates, description and image

var projects = {
    "projects": [{
        "title": "Fill-in-the-Blanks Quiz",
        "dates": "June 2016 - November 2016",
        "description": "One of the Intro to Programming Nanodegree projects which creates fill-in-the-blanks quiz in python. \n Quiz will prompt a user with a sentence containing several blanks. \n The user should then be asked to fill in each blank appropriately to complete the sentence.",
        "images": ["images/madlib_quiz.png"]
    }, {
        "title": "Movie Website",
        "dates": "June 2016 - November 2016",
        "description": "One of the Intro to Programming Nanodegree projects which creates Movie Website in python. \n Store a list of your favorite movies, including box art imagery and a movie trailer URL. \n Generate a static web page allowing visitors to browse their movies and watch the trailer.",
        "images": ["images/favorite_movie.png"]
    }, ]
};

/*
 * Responsible for displaying the project related information of the resume.
 * The function is encapsulated in the .display property of the project object
 */
projects.display = function() {
    for (var count = 0; count < projects.projects.length; count++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[count].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[count].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[count].description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        for (var image = 0; image < projects.projects[count].images.length; image++) {
            if (projects.projects[count].images.length > 0) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[count].images[image]);
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
};



//Education object
var education = {
    "schools": [{
        "name": "De Anza College",
        "location": "Cupertino, CA",
        "degree": "A.A.",
        "majors": ["Liberal Arts"],
        "dates": "2009",
        "url": "https://www.deanza.edu/",
    }],
    "onlineCourses": [{
        "title": "Intro to Programming Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }]
};


/*
 * Responsible for displaying education related information of the resume.
 * Using forEach loop The function is encapsulated in the .display property of the education object
 */
education.display = function() {
    if (education.schools.length > 0) {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedMajor);
            $(".education-entry:last").append(formattedSchoolDates);
        });
    }
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineCourse) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            $(".education-entry:last").append(formattedOnlineTitle);
            $(".education-entry:last").append(formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        });
    }
};



// bio.display function call; Diplays Bio Data
bio.display();
// work.display function call; Diplays Work Experience
work.display();
// project.display function call; Displays Projects
projects.display();
// education.display function call; Diplays education
education.display();
//here's map where I lived and worked
$("#mapDiv").append(googleMap);