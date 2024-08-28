#include<bits/stdc++.h>
using namespace std;

int main()
{
	ios::sync_with_stdio(0);
	cin.tie(0);

	int N;	

	cin >> N;

	int* callTimes = new int[N];

	memset(callTimes, 0, sizeof(int) * N);
	
	int callTime = 0;

	for (int i = 0; i < N; i++)
	{
		cin >> callTime;
		callTimes[i] = callTime;
	}

	int ySumMoney = 0;
	for (int i = 0; i < N; i++)
	{
		int yTime = callTimes[i];
		ySumMoney += ((yTime / 30) + 1) * 10;		
	}	

	int mSumMoney = 0;
	for (int i = 0; i < N; i++)
	{
		int mTime = callTimes[i];
		mSumMoney += ((mTime / 60) + 1) * 15;		
	}	

	if (ySumMoney > mSumMoney)
	{
		cout << "M " << mSumMoney;
	}
	else if (mSumMoney > ySumMoney)
	{
		cout << "Y " << ySumMoney;
	}
	else
	{
		cout << "Y M " << ySumMoney;
	}	

	delete[] callTimes;

	return 0;
}