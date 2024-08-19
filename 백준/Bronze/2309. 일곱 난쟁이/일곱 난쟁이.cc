#include <cstring>
#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
	int Sum = 0;
	bool Flag = false;

	int* Array = (int*)malloc(sizeof(int) * 9);

	for (int i = 0; i < 9; i++)
	{
		cin >> Array[i]; 
		//키 총합을 구해둔다.
		Sum += Array[i];
	}

	//미리 정렬해둔다.		
	sort(Array, Array + 9);

	//9명중 7명의 키가 100이 되는 말은 
	//9명의 총합 키에서 2명의 키를 뺏을때 그 값이 100이 된다는 말과 같다.
	for (int i = 0; i < 8; i++)
	{
		for (int j = 1; j < 9; j++)
		{
			//총합키에서 2 항목의 값을 뺏을때 100이 되면
			//해당 인덱스를 제외하고 출력해준다.
			if (Sum - (Array[i] + Array[j]) == 100)
			{
				Flag = true;
				for (int k = 0; k < 9; k++)
				{
					if (k != i && k != j)
					{
						cout << Array[k] << '\n';
					}
				}
				break;
			}
		}

		if (Flag == true)
		{
			break;
		}
	}	
	
	return 0;
}