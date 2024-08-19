#include <cstring>
#include<iostream>
using namespace std;

int main()
{
	int Array[10000];
	int Index = 0;
	int Position;

	memset(Array, 0, sizeof(Array));
	int Number;

	scanf("%d", &Number);
	scanf("%d", &Position);

	for (int i = 1; i <= Number; i++)
	{
		//입력받은 Number를 i(1) 부터 나눳을때 0으로 떨어지면 약수로 판단해준다.
		if (Number % i == 0)
		{
			// Array에 약수 i 를 저장
			Array[Index] = i;
			Index++;
		}
	}

	if (Index != 0)
	{
		printf("%d", Array[Position - 1]);
	}
	else
	{
		printf("0");
	}	

	return 0;
}