#include<bits/stdc++.h>
using namespace std;

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);

	int Numbers[4];	

	for (int i = 0; i < 3; i++)
	{
		cin >> Numbers[i];		
	}

	sort(Numbers, Numbers + 3);

	for (int i = 0; i < 3; i++)
	{
		cout << Numbers[i] << " ";
	}		

	return 0;
}