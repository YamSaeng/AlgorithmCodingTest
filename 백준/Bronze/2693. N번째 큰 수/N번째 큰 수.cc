#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
	int TestNumber;
	int Array[10];

	cin >> TestNumber;

	int AnswerPrint = TestNumber;

	int* AnswerArray = (int*)malloc(sizeof(int) * TestNumber);
	int AnswerCount = 0;
	
	for (; TestNumber > 0; TestNumber--)
	{		
		for (int i = 0; i < 10; i++)
		{
			cin >> Array[i];
		}
		
		sort(Array, Array + 10); // 오름차순으로 정렬
		
		AnswerArray[AnswerCount] = Array[7];
		AnswerCount++;
	}
	
	for (int i = 0; i < AnswerPrint; i++)
	{
		cout << AnswerArray[i] << '\n';
	}

	free(AnswerArray);			
	
	return 0;
}