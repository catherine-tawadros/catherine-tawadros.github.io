var people = [];

function Person(a,b,c,d)
{
      this.firstName = a;
      this.lastName = b;
      this.username = c;
      this.password = d;
      this.what = "student";
      people.push(this)
      location.assign("index.html");
}

function Person()
{
      window.alert();
      this.firstName = document.getElementById("newFirstName").value;
      this.lastName = document.getElementById("newLastName").value;
      this.username = document.getElementById("newUsername").value;
      this.password = document.getElementById("newPassword").value;
      this.what = "student";
      people.push(this);
      location.assign("index.html");
}

people=new Person("A","m","s","s");
people += new Person("f","d","t","t");


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
