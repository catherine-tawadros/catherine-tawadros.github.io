var people = [];

function Person(a,b,c,d)
{
      this.firstName = a;
      this.lastName = b;
      this.username = c;
      this.password = d;
      this.what = "student";
}


function createAccount()
{
      window.alert();
      user = new Person(document.getElementById("newFirstName").value,document.getElementById("newLastName").value,
             document.getElementById("newUsername").value,document.getElementById("newPassword").value);
      people.push(user);
      window.alert("h");
      location.assign("index.html");
}


function loginAttempt()
{
      people.push(new Person("A","m","s","s"), new Person("f","d","t","t"));
      var username = document.getElementById("username").value;
      var password =  document.getElementById("password").value;
      window.alert("checkpoint 1");
      for (var i=0; i<people.length; i++)
      {
            if (username == people[i].username && password == people[i].password)
            {
                  window.alert("checkpoint 2");
                  if (people[i].what == "student") 
                        {location.assign("studenthome.html");}
                  if (people[i].what == "teacher") 
                        {location.assign("teacherhome.html");}
                  return;
             }
      }
      location.assign("error.html");
}
