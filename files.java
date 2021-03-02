import java.io;
import java.util;

public class Time{
  private int min;
  private int second;
  public Time(m, s) {minute=m; second=s;}
  public Time getTime() {return m+":"+s;}
}

public class Comment{
 private Time starttime;
 private Time endtime;
 private String commenter;
 private String feedback;
 private String owner;
 private String videotitle;
 public Comment(Time st, Time et, String c, String o, String fb, String vt)
 {
   starttime = st;
   endtime = et;
   commenter = c;
   owner = o;
   feedback = fb;
   videotitle = vt;
 }
}

public class FileThings{
  public static String[] getThings()
  {
    FileReader in1 = new FileReader("stuff.txt");
    Scanner s1 = new Scanner(in1);
    ArrayList<String> nouns = new ArrayList<String>();
    String currentLine = s1.nextLine();

  }
}
