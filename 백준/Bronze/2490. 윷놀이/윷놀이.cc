#include<bits/stdc++.h>
using namespace std;

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);

	string yut = "DCBAE";	

	for (int i = 0; i < 3; i++)
	{
		int sum = 0;
		for (int j = 0; j < 4; j++)
		{
			int value;
			cin >> value;

			sum += value;
		}

		cout << yut[sum] << '\n';
	}

	return 0;
}