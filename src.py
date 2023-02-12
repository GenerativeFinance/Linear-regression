import numpy as np

def linear_regression(data):
    x = np.array([i[0] for i in data])
    y = np.array([i[1] for i in data])
    x_mean = np.mean(x)
    y_mean = np.mean(y)
    numerator = np.sum((x - x_mean) * (y - y_mean))
    denominator = np.sum((x - x_mean) ** 2)
    m = numerator / denominator
    b = y_mean - m * x_mean
    return m, b

if __name__ == "__main__":
    data = [(1, 2), (2, 3), (3, 4), (4, 5)]
    m, b = linear_regression(data)
    print("y = {0}x + {1}".format(m, b))
