#include<iostream>

using namespace std;

int main(void)
{
	string s;
	cin >> s;

	for (char alphabet = 'a'; alphabet <= 'z'; alphabet++)
	{
		int count = 0;

		for (auto c : s)
		{
			if (alphabet == c)
			{
				count++;
			}
		}

		cout << count << ' ';
	}

	return 0;
}