import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in); 
        System.out.print("Input: ");
        String str = input.nextLine();
        System.out.print("Output: ");
        for (int i=str.length() - 1; i >= 0; i--){
            System.out.print(str.charAt(i));
        }
    }
}