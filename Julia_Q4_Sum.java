import java.util.Scanner;
import java.util.Vector;
class HelloWorld {
    public static void main(String[] args) {
        int ans=0, i=0, size =0;
        Scanner input = new Scanner(System.in); 
        Vector<Integer> vec = new Vector<Integer>(size);
        do{
            vec.setSize(size);
            System.out.print("Input " + (i+1) +": ");
            vec.add(input.nextInt());
            i++;
            size++;
            System.out.print("To add more = 1, To print = 0: ");
            ans = input.nextInt();
        }while(ans==1);
        System.out.println("Array Output:");
        for (Integer num : vec) {         
            System.out.println("Number = " + num);
        }       
    }
}