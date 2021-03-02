import java.io;
import java.util;


public class Time{
  private int min;
  private int second;
  public Time(m, s) {minute=m; second=s;}
  public Time getTime() {return m+":"+s;}
}


public class Comment{
 private String starttime;
 private String endtime;
 private String commenter;
 private String feedback;
 private String owner;
 private String videotitle;
 public Comment(String st, String et, String c, String o, String fb, String vt)
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
  public static ArrayList<Comment> getComments(String name) throws IOException
  {
    FileReader in1 = new FileReader("stuff.txt");
    Scanner s1 = new Scanner(in1);
    ArrayList<Comment> comments = new ArrayList<Comment>();
    while (s1.hasNextLine())
    {
      String currentComment = s1.nextLine().split(",");
      if (currentComment[3].equals(name))
      {comments += new Comment(currentComment[0], currentComment[1], currentComment[2], currentComment[3], currentComment[4], currentComment[5])}
    }
    return comments;
    s1.close();
  }
  
  public static void write(String st, String et, String c, String o, String fb, String vt) throws IOException
  {
      try {
      FileWriter myWriter = new FileWriter("stuff.txt");
      myWriter.write(st+","+et+","+c+","+o+","+fb+","vt);
      myWriter.close();
    } catch (IOException e) {
      System.out.println("An error occurred.");
    }

  }
}
