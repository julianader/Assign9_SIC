import java.util.Scanner;
import java.util.Vector;

public class HelloWorld {
    public static void main(String[] args) {
        int ans = 0, i = 0, size = 0;
        Scanner input = new Scanner(System.in);
        Vector<Integer> vec = new Vector<Integer>();

        do {
            System.out.print("Input " + (i + 1) + ": ");
            vec.add(input.nextInt());
            i++;
            size++;
            System.out.print("To add more = 1, To print = 0: ");
            ans = input.nextInt();
        } while (ans == 1);

        if (vec.size() > 0) {
            int min = vec.get(0);
            int max = vec.get(0);

            System.out.println("Output:");
            for (int j = 0; j < vec.size(); j++) {
                int current = vec.get(j);
                if (current < min) {
                    min = current;
                }
                if (current > max) {
                    max = current;
                }
            }

            System.out.println("Smallest Number = " + min);
            System.out.println("Largest Number = " + max);
        } else {
            System.out.println("The vector is empty. No minimum or maximum.");
        }
    }
}
