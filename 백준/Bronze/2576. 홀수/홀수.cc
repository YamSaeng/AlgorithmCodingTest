#include<bits/stdc++.h>
using namespace std;

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);

	int sum = 0;
	int min = 99999999999;

	for (int i = 0; i < 7; i++)
	{
		int num;
		cin >> num;

		if (num % 2 != 0)
		{
			sum += num;

			if (min > num)
			{
				min = num;
			}
		}
	}

	if (sum == 0)
	{
		cout << "-1";
	}
	else
	{
		cout << sum << "\n";
		cout << min;
	}

	return 0;
}