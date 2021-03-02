import java.io;
import java.util;

public class FileThings{
  public static String[] getThings()
  {
    FileReader in1 = new FileReader("stuff.txt");
    Scanner s1 = new Scanner(in1);
    ArrayList<String> nouns = new ArrayList<String>();
    String currentLine = s1.nextLine();

  }
}
