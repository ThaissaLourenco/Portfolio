public class Kata
{
  public static string Rgb(int r, int g, int b) 
  {
    string[] hex = {"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B","C", "D", "E", "F"};
    
    string rs = toHex(r);
    string gs = toHex(g);
    string bs = toHex(b);
    
    string toHex(int dec){
    int i2 = dec % 16;
    int i1 = dec / 16;
    if (dec < 0){
      return "00";
    }
    if (dec > 255){
      return "FF";
    }
    return hex[i1] + hex[i2]; 
    }

    return rs + gs + bs;
    
  }
}
