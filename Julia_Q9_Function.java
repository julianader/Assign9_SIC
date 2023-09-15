import java.util.Scanner;
import java.util.Vector;

public class HelloWorld {
    public static void main(String[] args) {
        int ans = 0, i = 0;
        Scanner input = new Scanner(System.in);
        Vector<Integer> vec = new Vector<Integer>();

        do {
            System.out.print("Input " + (i + 1) + ": ");
            vec.add(input.nextInt());
            i++;
            System.out.print("To add more = 1, To print = 0: ");
            ans = input.nextInt();
        } while (ans == 1);

        printEvenNumbers(vec);
        printOddNumbers(vec);
    }

    public static void printEvenNumbers(Vector<Integer> vec) {
        System.out.println("Even Numbers:");
        for (Integer num : vec) {
            if (num % 2 == 0) {
                System.out.println(num);
            }
        }
    }

    public static void printOddNumbers(Vector<Integer> vec) {
        System.out.println("Odd Numbers:");
        for (Integer num : vec) {
            if (num % 2 != 0) {
                System.out.println(num);
            }
        }
    }
}
