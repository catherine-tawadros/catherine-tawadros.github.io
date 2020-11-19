function loginAttempt()
{
      var username = document.getElementById("username").value;
      var password =  document.getElementById("password").value;
      if (username==1 && password==1)
            {location.assign('home.html');}
      else
            {location.assign('error.html');}
}
