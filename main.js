function Person(u, p, t)
{
      this.username=u;
      this.password=p;
      this.type=t;
}

function loginAttempt()
{
      var people = [new Person("1","1","student"), new Person("2","2","teacher")];
      var username = document.getElementById("username").value;
      var password =  document.getElementById("password").value;
      for (i=0; i<people.length; i++)
      {
            if (username==people[i].username && password==people[i].password)
            {
                  if (people[i].what == "student") 
                        {location.assign("studenthome.html");}
                  if (people[i].what == "teacher") 
                        {location.assign("teacherhome.html");}
             }
            else
                  {location.assign("error.html");}
                                         
}                                                                 
