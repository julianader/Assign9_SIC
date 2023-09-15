import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        int flag=0;
        Scanner input = new Scanner(System.in); 
        System.out.print("Input: ");
        String str = input.nextLine();
        for (int i=str.length() - 1; i >= 0; i--){
            for (int j=0; j<str.length(); j++){
                if (str.charAt(i) == str.charAt(j)){
                    flag=1;
                }
                else{
                    flag=0;
                }
            }
        }
        if (flag==1){System.out.println("This word/Phrase is Palindrome!");}
        else{System.out.println("This word/Phrase isn't Palindrome :(");}
    }
}