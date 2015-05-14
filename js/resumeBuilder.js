
// personal details
var bio={
  "Contacts":{
  "Mobile":078-432-7374,
  "email": "sethuserge@gmail.com",
  "twitter":"@SethuB",
  "Github": "SethuBS",
  "blog" :"Sethu's blog",
  "Location": "Cape town",
},
"WelcomeMessage": "Welcome to my js project",
"skills" :[
  "Javascript","Css","Json", "JQuery","Php","C#","Java","Vb.net"
  ],
"biopic"    :"<img scr='images/fry.jpg alt='profile-image'>"
}
// education
var education={
  "schools":[
{
  "name":"Damelin College",
  "degree":"Information Technology",
  "year":"02-2012",
  "city":"Cape Town",
  "url" :"http://example.com",
  "major":["Software development","Software Engineering","Information Systems"]
},

{
  "name":"CPUT",
  "degree":"Information Technology",
  "year":"02-2014",
  "city":"Cape Town",
  "url" :"http://example.com",
  "major":["Software development","Software Engineering","Information Systems","Project management"]
}
],

"onlineCourses":[
  {
    "title":"javascript syntax",
    "school":"Udacity",
    "date": "02-2015",
    "url":"http://www.udacity.com/course/ud804"
  }
]
}

// work
var work={
  "jobs":[

    {
  "position":  "Code 08 Instructor",
  "employer":  "Mlamli's driving school",
  "dates"   :  "01-2010",
  "location":  "Cape Town",
  "description":  "Teaching people besics of k53"
},
{
"position":  "Hardware Maintainance",
"employer":  "ICG(head office of Intech college)",
"dates"   :  "01-2013",
"location":  "Cape Town",
"description":"Making sure that every computer and printer in a work station is working"
},
    {
  "position":  ".Net developer",
  "employer":  "ICT worx",
  "dates"   :  "08-2014",
  "location":  "Cape Town",
  "description":  "Developing software in C#"
},
{
"position":  ".Net developer",
"employer":  "EOHMC",
"dates"   : "03-2015",
"location":  "Cape Town",
"description":  "Developing software in C# and doing a bit of Bootstrap desing"
},
    {
  "position":  "Web developer",
  "employer":  "Skywalk innovations",
  "dates"   :  "04-2015",
  "location":  "Cape Town",
  "description":  "Developing software, web application and mobile application in js,Json,Css,html,Ajax,JQuery and Php"

}
]
}

//projects
var project={
  "projects":
  [
    {
      "employer":"ICT Worx",
      "title":"E-Pic Scanner",
      "dates":"02-2015",
      "biopic"    :["images/scanner.jpg"],
      "description":"software to scan and print documents and pictures"
    },


    {
      "employer":"Skywark innovations",
      "title":"Bootstrap development",
      "dates":"04-2015",
      "biopic"    :["images/bootstrap.jpg"],
      "description": "Website for Skywalk"
    }
  ]
}
//var name="Sethu Budaza";
//var role = "Junior Web Developer";
var formattedname=HTMLheaderName.replace("%data%","Sethu Budaza");
var formatteRole = HTMLheaderRole.replace("%data%", "Junior Web Developer");

$("#header").prepend(formattedname);
$("#header").append(formatteRole);
$("#main").append(bio.biopic);
// bio fuction
bio.display=function()
{
  if(bio.skills.length > 0)
  {
    $("#header").append(HTMLskillsStart);

    var formattedskills = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedskills);

     formattedskills=HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedskills);

     formattedskills=HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedskills);

     formattedskills=HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedskills);

     formattedskills=HTMLskills.replace("%data%",bio.skills[4]);
    $("#skills").append(formattedskills);

     formattedskills=HTMLskills.replace("%data%",bio.skills[5]);
    $("#skills").append(formattedskills);

     formattedskills=HTMLskills.replace("%data%",bio.skills[6]);
    $("#skills").append(formattedskills);

     formattedskills=HTMLskills.replace("%data%",bio.skills[7]);
    $("#skills").append(formattedskills);
  }
}
// calling bio fuction
bio.display();

//work
function displyaWork(){
  for(job in work.jobs)
  {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTile = HTMLworkTitle.replace("%data%",work.jobs[job].employer);
    var formattedEmployerTitle= formattedEmployer + formattedTile ;
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formatteddescription =HTMLworkDescription.replace("%data%",work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployerTitle,formattedDates,formatteddescription);

  }
}
//calling display function.
displyaWork();
//x and y location
$(document).click(function (loc){
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
}
);
//location function
function locationizer(work_pram) {
var localArray=[];
    for(job in work_pram.jobs){
        var newLocation = work_pram.jobs[job].location;
        localArray.push(newLocation);
    }
    return localArray;
}
// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

// finction inName.
function inName(name){
  name = name.trim().split("");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0]+" "+name[1];
}
//
$("#main").append(internationalizeButton);
//call inName function
inName(name);

//finction to display projects
projects.display=function()
{
  for(proj in project.projects)
  {
    $("#projects").append(HTMLprojectStart);

  var formattedProjectTitle = HTMLprojectTitle.replace("%data%",project.projects[proj].title);
  $(".project-entry:last").append(formattedProjectTitle);

  var formattedDates = HTMLprojectDates.replace("%data%",project.projects[proj].dates);
  $(".project-entry:last").append(formattedDates);

  var formatteddescription =HTMLprojectDescription.replace("%data%",project.projects[proj].description);
  $(".project-entry:last").append(formatteddescription);

if(project.projects[proj].biopic.length > 0){
  for(image in project.projects[proj].biopic)
  var formattedProjecImage = HTMLprojectImage.replace("%data%",project.projects[proj].biopic[image]);
    $(".project-entry:last").append(formattedProjecImage);
   }
 }
}
//call the project function
projects.display();
//education
education.display=function()
{
  for(studentStudies in education.schools)
  {
  $("#education").append(HTMLschoolStart);
 var formattedschoolname = HTMLschoolName.replace("%data%",education.schools[studentStudies].name);
 $(".education-entry:last").append(formattedschoolname);
 var formattedqualification = HTMLschoolDegree.replace("%data%",education.schools[studentStudies].degree);
 $(".education-entry:last").append(formattedqualification);
 var formattedschooldates = HTMLschoolDates.replace("%data%",education.schools[studentStudies].year);
 $(".education-entry:last").append(formattedschooldates);
 var formattedmajorsubjecjs = HTMLschoolMajor.replace("%data%",education.schools[studentStudies].major);
 $(".education-entry:last").append(formattedmajorsubjecjs);

  }
  for(onlineStudies in education.onlineCourses){
    $("#education").append(HTMLonlineClasses);
  var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineStudies].title);
  $(".education-entry:last").append(formattedTitle);
  var formattedschool =  HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineStudies].school);
  $(".education-entry:last").append(formattedschool);
  var formatteddate = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineStudies].date);
  $(".education-entry:last").append(formatteddate);
  var formattedurl =  HTMLonlineURL.replace("%data%",education.onlineCourses[onlineStudies].url);
  $(".education-entry:last").append(formattedurl);
  }
}

// function of education
education.display();
//online courses
