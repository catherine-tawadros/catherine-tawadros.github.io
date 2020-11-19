function loginAttempt()
{
      var username = document.getElementById("username").value;
      var password =  document.getElementById("password").value;
      if (username==student.username && password==student.password)
            {location.assign('home.html');}
      else
            {location.assign('error.html');}
}

var people;
function Person(u, p)
{
      this.username=u;
      this.password=p;
      people.push(this)
}
