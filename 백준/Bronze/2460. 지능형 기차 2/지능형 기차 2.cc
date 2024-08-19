#include <iostream>

using namespace std;

int main()
{
	int Sum = 0;
	int LetDownPeople;
	int ToRidePeople;
	int Max = -999999;

	//10번 반복하면서 내린사람, 탄사람의 합을 구하고 그 중 가장 큰 합을 구해준다.
	for (int i = 0; i < 10; i++)
	{
		cin >> LetDownPeople >> ToRidePeople; 

		Sum = Sum - LetDownPeople + ToRidePeople;

		if (Sum > Max)
		{
			Max = Sum;
		}
	}

	cout << Max;	

	return 0;
}