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
      window.alert("checkpoint 1);
      user = new Person(document.getElementById("newFirstName").value,document.getElementById("newLastName").value,
             document.getElementById("newUsername").value,document.getElementById("newPassword").value);
      people.push(user);
      window.alert("checkpoint 2");
      location.assign("index.html");
}


function loginAttempt()
{
      var people = [];
      people.push(new Person("A","m","s","s"), new Person("f","d","t","t"));
      var username = document.getElementById("username").value;
      var password =  document.getElementById("password").value;
      window.alert("checkpoint 3");
      for (var i=0; i<people.length; i++)
      {
            if (username == people[i].username && password == people[i].password)
            {
                  window.alert("checkpoint 4");
                  if (people[i].what == "student") 
                        {location.assign("studenthome.html");}
                  if (people[i].what == "teacher") 
                        {location.assign("teacherhome.html");}
                  return;
             }
      }
      location.assign("error.html");
}
