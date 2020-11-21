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
      user = new Person(document.getElementById("newFirstName").value,document.getElementById("newLastName").value,
             document.getElementById("newUsername").value,document.getElementById("newPassword").value);
      people.push(user);
      location.assign("index.html");
}


people += new Person("A","m","s","s");
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
