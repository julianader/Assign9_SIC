import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in); 
        System.out.print("Enter a Number: ");
        int num = input.nextInt();
        if (num%2 ==0 ){
            System.out.println("This number is Even");
        }
        else{
            System.out.println("This number is Odd");
        }
    }
}