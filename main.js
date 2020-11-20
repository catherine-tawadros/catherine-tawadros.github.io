var people;

function Person()
{
      this.firstName = document.getElementById("firstName").value;
      this.lastName = document.getElementById("lastName").value;
      this.username = document.getElementById("username").value;
      this.password = document.getElementById("password").value;
      this.what = "student";
      people = people + this;
      location.assign("index.html");
}

people += new Person("A","m","1","1","student");
people += new Person("f","d","2","2","teacher");

function loginAttempt()
{
      var username = document.getElementById("username").value;
      var password =  document.getElementById("password").value;
      for (var i=0; i<people.length; i++)
      {
            if (username == people[i].username && password == people[i].password)
            {
                  if (people[i].what == "student") 
                        {location.assign("studenthome.html");}
                  if (people[i].what == "teacher") 
                        {location.assign("teacherhome.html");}
                  return;
             }
      }
      location.assign("error.html");
}
