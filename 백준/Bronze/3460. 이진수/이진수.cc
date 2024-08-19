#include <cstring>
#include<iostream>
using namespace std;

int main()
{
	int TestNumber;
	int Number;
	int Remain;

	scanf("%d", &TestNumber);

	while (TestNumber > 0)
	{
		int i = 0;

		scanf("%d", &Number);

		TestNumber--;

		while (Number > 0)
		{
			Remain = Number % 2;
			if (Remain == 1) //나머지가 1이면 i위치를 출력해준다.
			{
				printf("%d ", i);
			}

			Number /= 2;
			i++;
		}

		printf("\n");
	}

	return 0;
}