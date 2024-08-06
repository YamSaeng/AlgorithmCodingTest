#include<iostream>
using namespace std;

int main()
{
    long long SumNumber = 0;
	long long AnswerNumber = 0;

	int NumberCount = 0;

	cin >> AnswerNumber;

	for (long long i = 1;; i++)
	{
		SumNumber += i;
		NumberCount++;
		if (SumNumber > AnswerNumber)
		{
			cout << NumberCount - 1;
			break;
		}
	}	
    
    return 0;
}