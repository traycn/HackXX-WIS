var config = {
  apiKey: "AIzaSyCEQR0qM-a_4bBt459h9Bvls4ke1axFGkg",
  authDomain: "hackxx-wis.firebaseapp.com",
  databaseURL: "https://hackxx-wis.firebaseio.com",
  projectId: "hackxx-wis",
  storageBucket: "hackxx-wis.appspot.com",
  messagingSenderId: "754230720319"
};

firebase.initializeApp(config);

var db = firebase.database();

/*
 * Defining a table
 * Use Bootstrap styling: jumbotron, container, media, border, p-3,  mr-3, mt-3, rounded-circle, media-body
 * Input: A person's name, major, hobbies, email, number, location
 * Processing: Calls writeNewUserData to store data into database
 * Output: Name and The saying using the innerHTML property
 */
function menteeInput() {
  //prompt the user name from the text field with nameInputBox id and store it
  var name = document.getElementById('nameInputBox').value;
  var major = document.getElementById('majorInputBox').value;
  var hobbies = document.getElementById('hobbiesInputBox').value;
  var email = document.getElementById('emailInputBox').value;
  var number = document.getElementById('numberInputBox').value;
  var location = document.getElementById('locationInputBox').value;
  var image = "https://cdn4.vectorstock.com/i/1000x1000/18/98/user-icon-female-person-symbol-profile-avatar-sign-vector-18991898.jpg";
  var status = "mentee";
  // use string concatenation to create a personalized saying
  var saying = "Here are some matches of possible mentors according to " + name + " " + major + " " + hobbies;

  //store data into database
  writeNewUserData(name, major, hobbies, email, number, location, image, status);

  //display the saying in the div that has the outputDiv
  document.getElementById('outputName').innerHTML = name + ",";
  document.getElementById('outputSaying').innerHTML = saying;
}
function mentorInput() {
  //prompt the user name from the text field with nameInputBox id and store it
  var name = document.getElementById('nameInputBoxM').value;
  var major = document.getElementById('majorInputBoxM').value;
  var hobbies = document.getElementById('hobbiesInputBoxM').value;
  var email = document.getElementById('emailInputBoxM').value;
  var number = document.getElementById('numberInputBoxM').value;
  var location = document.getElementById('locationInputBoxM').value;
  var image = "https://cdn4.vectorstock.com/i/1000x1000/18/98/user-icon-female-person-symbol-profile-avatar-sign-vector-18991898.jpg";
  var status = "mentor";
  // use string concatenation to create a personalized saying
  var saying = "Here are some matches of possible mentors according to " + name + " " + major + " " + hobbies;

  // store data into database
  writeNewUserData(name, major, hobbies, email, number, location, image, status);

  //display the saying in the div that has the outputDiv
  document.getElementById('outputNameM').innerHTML = name + ",";
  document.getElementById('outputSayingM').innerHTML = saying;
}


 //give us the similariry  (returning name of person)
function search(field) {
  var ref = db.ref("")
}


function writeNewUserData(name, major, hobbies, email, number, location, imageUrl, status) {
  var data = {
    Major: major,
    Hobbies: hobbies,
    Email: email,
    Number: number,
    Image: imageUrl,
    Location: location,
    Status: status
  };

   db.ref(name).set(data);
}
