#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

vector<double> linearRegression(const vector<pair<double, double>> &data) {
    double sumx = 0.0, sumy = 0.0, sumx2 = 0.0, sumxy = 0.0;
    int n = data.size();
    for (int i = 0; i < n; i++) {
        sumx += data[i].first;
        sumy += data[i].second;
        sumx2 += data[i].first * data[i].first;
        sumxy += data[i].first * data[i].second;
    }
    double a = (n * sumxy - sumx * sumy) / (n * sumx2 - sumx * sumx);
    double b = (sumy - a * sumx) / n;
    return {a, b};
}

int main() {
    vector<pair<double, double>> data = {{1, 2}, {2, 3}, {3, 4}, {4, 5}};
    auto result = linearRegression(data);
    cout << "y = " << result[0] << "x + " << result[1] << endl;
    return 0;
}
