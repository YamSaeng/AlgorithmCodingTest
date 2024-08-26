#include <cstring>
#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main()
{
	vector<int> A;

	int N, X, ANumber;

	cin >> N >> X;


	for (int i = 0; i < N; i++)
	{
		cin >> ANumber;
		A.push_back(ANumber);
	}

	for (int j = 0; j < A.size(); j++)
	{
		if (A[j] < X)
		{
			cout << A[j] << " ";
		}
	}

	return 0;
}