var people;

function Person(f, l, u, p, t)
{
      this.firstName = f;
      this.lastName = l;
      this.username = u;
      this.password = p;
      this.what = t;
      people = people + this;
}

people = [new Person("A", "m", "1","1","student"), new Person("f", "d","2","2","teacher")];

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
