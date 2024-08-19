#include <cstring>
#include<iostream>
using namespace std;

int main()
{
	int Number;
	int Data;

	int Max = -1000000;
	int Min = 1000000;

	scanf("%d", &Number);

	//Number만큼 반복하면서 최댓값, 최솟값을 구한다.
	for (int i = 0; i < Number; i++)
	{
		scanf("%d", &Data);

		if (Data > Max)
		{
			Max = Data;
		}

		if (Data < Min)
		{
			Min = Data;
		}
	}

	printf("%d %d", Min, Max);	

	return 0;
}