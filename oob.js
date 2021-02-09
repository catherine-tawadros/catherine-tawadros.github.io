function oob()
{
  word = document.getElementById("word");
  let new_word = "";
  for (let i=0; i<word.length(); i++)
    if (isVowel(word.substring(i,i+1)))
      new_word+="oob";
    else new_word+=word.substring(i,i+1);
  console.log(new_word);
  return new_word;
}

function isVowel(a)
{
   let vowls="aeiou";
   for (let i=0; i<5; i++)
    if (vowels.substring(i,i+1).toLowerCase().equals(a))
      return true;
   return false;
}
