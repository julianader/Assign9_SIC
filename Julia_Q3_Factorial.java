import java.util.Scanner;

class HelloWorld {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in); 
        System.out.print("Input: ");
        int number = input.nextInt(), fact =1;
        for(int i=1;i<=number;i++){    
            fact=fact*i;    
        }
        System.out.print("Output: " + fact);
    }
}