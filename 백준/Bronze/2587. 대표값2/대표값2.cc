#include<bits/stdc++.h>
using namespace std;

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);

	int numbers[5] = { 0 };
	int sum = 0;

	for (int i = 0; i < 5; i++)
	{		
		cin >> numbers[i];
		sum += numbers[i];
	}

	sort(numbers, numbers + 5);
	
	cout << sum / 5 << '\n';
	cout << numbers[2];

	return 0;
}