import java.util.Scanner;
class Main
{
	public static void main (String args[])
	{
		Scanner kb=new Scanner(System.in);

		System.out.print("Enter how many number you want to print : ");
		double n=kb.nextDouble();

		int first=0;
		int second=1;
		int temp=0;

		System.out.print("fibonacci sereies :    ");

		for(int i=1;i<=n;i++)
		{
			System.out.print(first+"     ");
			temp=first;
			first=second;
			second=temp+second;
		}

		
	}
}