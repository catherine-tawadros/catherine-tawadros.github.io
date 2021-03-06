let users = [new User("A","m","s","1","student"), new User("f","d","t","t","teacher")];

function User(a,b,c,d,e)
      {
            this.firstName = a;
            this.lastName = b;
            this.username = c;
            this.password = d;
            this.what = e;
      }


function Student(a,b,c,d,e)
      {
           User.call(this,a,b,c,d,e);
           this.teacher;
           this.library = [];
      }

function Teacher(a,b,c,d,e)
      {
            User.call(this,a,b,c,d,e);
            this.students = [];
            this.library = [];
      }

function getRadioValue(theRadioGroup)
{
    var elements = document.getElementsByName(theRadioGroup);
    for (var i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            return elements[i].value;
        }
    }
}

function createAccount()
{
    users.push(new Student("a","a","a","a","student"));
    for (let i=0; i<users.length; i++)
    {
        if (users[i].username == document.getElementById("newUsername").value)
        { window.alert("this username is taken"); return; }
        if (users[i].password == document.getElementById("newPassword").value)
        { window.alert("this password is taken"); return; }
    }
    if (document.getElementById("newPassword").value.length < 5)
        {window.alert("please enter a password that is at least 5 characters long"); return; }
    if (getRadioValue("type")=="student")
        {let user = new Student(document.getElementById("newFirstName").value, document.getElementById("newLastName").value,
             document.getElementById("newUsername").value, document.getElementById("newPassword").value, 
                        getRadioValue("type"));}
    if (getRadioValue("type")=="teacher")
        {let user = new Teacher(document.getElementById("newFirstName").value, document.getElementById("newLastName").value,
             document.getElementById("newUsername").value, document.getElementById("newPassword").value, 
                        getRadioValue("type"));}
    window.alert("checkpoint1");
    users.push(user);
    window.alert("checkpoint2");
    location.assign("index.html");
}


function loginAttempt()
{
      let username = document.getElementById("username").value;
      let password =  document.getElementById("password").value;
      for (let i=0; i<users.length; i++)
      {
            if (username == users[i].username && password == users[i].password)
            {
                  if (users[i].what == "student") 
                        {location.assign("studenthome.html");}
                  if (users[i].what == "teacher") 
                        {location.assign("teacherhome.html");}
                  return;
             }
      }
      location.assign("error.html");
}

function Time(m,s)
{
      this.minute = m;
      this.second = s;
}

function Video(ti,st,t)
{
      this.time = ti;
      this.student = st;
      this.teacher = t;
      this.comments = [];
}

function Comment(sti,eti,te,u)
{
      this.user = u;
      this.start_time = sti;
      this.end_time = eti;
      this.text = te;
}
