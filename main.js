let people = [];

class Person
{
      constructor(a,b,c,d)
      {
            this.firstName = a;
            this.lastName = b;
            this.username = c;
            this.password = d;
            this.what = "student";
      }
}


function createAccount()
{
    people.push(new Person("a","a","a","a"));
    for (let i=0; i<people.length; i++)
    {
        window.alert("in the for loop");
        if (people[i].username == document.getElementById("newUsername").value)
        { window.alert("this username is taken"); return; }
        if (people[i].username == document.getElementById("newPassword").value)
        { window.alert("this password is taken"); return; }
    }
    window.alert("after for loop");
    if (document.getElementById("password").value.length < 5)
        {window.alert("please enter a password that is at least 5 characters long"); return; }
    window.alert("almost there");
    user = new Person(document.getElementById("newFirstName").value, document.getElementById("newLastName").value,
             document.getElementById("newUsername").value, document.getElementById("newPassword").value);
    people.push(user);
    window.alert("end");
    location.assign("index.html");
}


function loginAttempt()
{
      people.push(new Person("A","m","s","s"), new Person("f","d","t","t"));
      let username = document.getElementById("username").value;
      let password =  document.getElementById("password").value;
      for (let i=0; i<people.length; i++)
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
