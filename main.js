let people = [];
//window.alert("is this a thing?");

class Person
{
      constructor(a,b,c,d)
      {
            window.alert("the constructor works");
            this.firstName = a;
            this.lastName = b;
            this.username = c;
            this.password = d;
            this.what = "student";
      }
}


function createAccount()
{
    window.alert("checkpoint a");
    let people = [];
    for (let prsn of people)
    {
        if (prsn.username == document.getElementById("username").value)
        { window.alert("this username is taken"); return; }
        if (prsn.username == document.getElementById("password").value)
        { window.alert("this password is taken"); return; }
    }
    window.alert("check");
    if (document.getElementById("password").value.length < 5)
        {window.alert("please enter a password that is at least 5 characters long"); return; }
    window.alert("checkpoint b");
    user = new Person(document.getElementById("newFirstName").value, document.getElementById("newLastName").value,
             document.getElementById("newUsername").value, document.getElementById("newPassword").value);
    people.push(user);
    window.alert("checkpoint c");
    location.assign("index.html");
}


function loginAttempt()
{
      //window.alert("checkpoint 1");
      //window.alert("checkpoint 2");
      people.push(new Person("A","m","s","s"), new Person("f","d","t","t"));
      //window.alert("checkpoint 3");
      let username = document.getElementById("username").value;
      let password =  document.getElementById("password").value;
      //window.alert("checkpoint 4");
      for (let i=0; i<people.length; i++)
      {
            if (username == people[i].username && password == people[i].password)
            {
                  //window.alert("checkpoint 5");
                  if (people[i].what == "student") 
                        {location.assign("studenthome.html");}
                  if (people[i].what == "teacher") 
                        {location.assign("teacherhome.html");}
                  return;
             }
      }
      location.assign("error.html");
}
