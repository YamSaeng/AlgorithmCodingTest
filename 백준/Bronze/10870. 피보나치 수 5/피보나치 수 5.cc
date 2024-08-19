#include <cstring>
#include <iostream>

using namespace std;

int main()
{
	int Number;

	cin >> Number;

	int* Array = (int*)malloc(sizeof(int) * (Number + 1));
	memset(Array, 0, sizeof(int) * (Number + 1));

	//첫번째와 두번째 피보나치 수 0 과 1 저장
	Array[0] = 0;
	Array[1] = 1;

	//3번째 부터 피보나치 수열을 구해주는데 전전과 전 값을 더해서 저장해준다.
	for (int i = 2; i < Number + 1; i++)
	{
		Array[i] = Array[i - 2] + Array[i - 1];
	}

	cout << Array[Number];

	free(Array);
	
	return 0;
}