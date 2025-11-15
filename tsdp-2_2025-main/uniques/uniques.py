def get_uniques(numbers):
    if len(numbers) <= 1:
        return numbers
    
    j = 1
    
    for i in range(1, len(numbers)):
        if numbers[j - 1] != numbers[i]:
            numbers[j] = numbers[i]
            j += 1

    for i in range(j, len(numbers)):
        numbers[i] = "_"
    
    return numbers

if __name__ == "__main__":
    num1 = [1, 1, 2]
    num2 = [1, 2, 2]
    num3 = [1, 1, 1, 2]
    num4 = [7, 7, 8, 9]
    num5 = [0, 1, 1, 1, 2, 2, 3]

    print(get_uniques(num1)) # [1, 2, _]
    print(get_uniques(num2)) # [1, 2, _]
    print(get_uniques(num3)) # [1, 2, _, _]
    print(get_uniques(num4)) # [7, 8, 9, _]
    print(get_uniques(num5)) # [0, 1, 2, 3, _, _, _]