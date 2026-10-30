import java.util.Scanner;
class Main
{

	public static boolean isPrime(int n)
	{
		if(n<=1)
		{
		    return false;
		}
		int x=(int)Math.sqrt(n);

		int count=0;

		for(int i=2;i<=x;i++)
		{
			if(n%i==0)
			{
				count++;
				break;
			}
		}

		if(count>0)
		{
			return false;
		}
		else
			return true;
	}
	public static void main (String args[])
	{
		Scanner kb=new Scanner(System.in);

		System.out.print("Enter first number : ");
		int x=kb.nextInt();
		System.out.print("Enter second number : ");
		int y=kb.nextInt();

		System.out.println("Check how many number is prime between them : ");


		int count =0;

		for(int i=x;i<=y;i++)
		{
			boolean check=isPrime(i);

			if(check==true)
			{
				System.out.println("The number "+i+"is prime ");
				count++;
			}
		}

		System.out.println("The total prime number between them : "+count);

	}
}