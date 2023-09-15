import java.util.Scanner;
import java.util.Vector;

class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in); 
        System.out.print("Enter a Number: ");
        int n = input.nextInt();
        Vector<Integer> vec = new Vector<Integer>();
        if (n >= 1) { 
            vec.add(0);
        }
        if (n >= 2) {
            vec.add(1);
        }

        while (vec.size() < n) {
            int lastIndex = vec.size();
            int nextFibonacci = vec.get(lastIndex - 1) + vec.get(lastIndex - 2);
            vec.add(nextFibonacci);
        }

        System.out.println("First " + n + " Fibonacci numbers:");
        for (int num : vec) {
            System.out.print(num + " ");
        }
    }
}