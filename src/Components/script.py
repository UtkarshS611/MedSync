import math
import numpy as np

def main():
    print("Welcome to the Advanced Calculator!")
    while True:
        print("\nChoose an option:")
        print("1. Basic Arithmetic")
        print("2. Trigonometric Functions")
        print("3. Logarithmic Functions")
        print("4. Exponential Functions")
        print("5. Factorial")
        print("6. Matrix Operations")
        print("7. Quit")
        
        choice = input("Enter your choice: ")
        
        if choice == "1":
            basic_arithmetic()
        elif choice == "2":
            trigonometry()
        elif choice == "3":
            logarithmic_functions()
        elif choice == "4":
            exponential_functions()
        elif choice == "5":
            factorial_function()
        elif choice == "6":
            matrix_operations()
        elif choice == "7":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

def basic_arithmetic():
    print("\nBasic Arithmetic")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    choice = input("Enter your choice: ")
    a = float(input("Enter the first number: "))
    b = float(input("Enter the second number: "))
    if choice == "1":
        print(f"Result: {a} + {b} = {a + b}")
    elif choice == "2":
        print(f"Result: {a} - {b} = {a - b}")
    elif choice == "3":
        print(f"Result: {a} * {b} = {a * b}")
    elif choice == "4":
        if b != 0:
            print(f"Result: {a} / {b} = {a / b}")
        else:
            print("Error: Division by zero!")
    else:
        print("Invalid choice.")

def trigonometry():
    print("\nTrigonometric Functions")
    print("1. Sine")
    print("2. Cosine")
    print("3. Tangent")
    choice = input("Enter your choice: ")
    angle = float(input("Enter the angle in degrees: "))
    radians = math.radians(angle)
    if choice == "1":
        print(f"sin({angle}) = {math.sin(radians)}")
    elif choice == "2":
        print(f"cos({angle}) = {math.cos(radians)}")
    elif choice == "3":
        print(f"tan({angle}) = {math.tan(radians)}")
    else:
        print("Invalid choice.")

def logarithmic_functions():
    print("\nLogarithmic Functions")
    print("1. Natural Logarithm (ln)")
    print("2. Base-10 Logarithm (log10)")
    choice = input("Enter your choice: ")
    num = float(input("Enter the number: "))
    if num > 0:
        if choice == "1":
            print(f"ln({num}) = {math.log(num)}")
        elif choice == "2":
            print(f"log10({num}) = {math.log10(num)}")
        else:
            print("Invalid choice.")
    else:
        print("Error: Logarithm of non-positive numbers is undefined!")

def exponential_functions():
    print("\nExponential Functions")
    base = float(input("Enter the base: "))
    exponent = float(input("Enter the exponent: "))
    print(f"{base}^{exponent} = {math.pow(base, exponent)}")

def factorial_function():
    print("\nFactorial Function")
    num = int(input("Enter a non-negative integer: "))
    if num >= 0:
        print(f"{num}! = {math.factorial(num)}")
    else:
        print("Error: Factorial of a negative number is undefined!")

def matrix_operations():
    print("\nMatrix Operations")
    print("1. Matrix Addition")
    print("2. Matrix Multiplication")
    print("3. Transpose")
    choice = input("Enter your choice: ")
    
    if choice in ["1", "2", "3"]:
        rows = int(input("Enter the number of rows: "))
        cols = int(input("Enter the number of columns: "))
        print("Enter the elements of the first matrix:")
        matrix1 = [[float(input(f"Element [{i+1}][{j+1}]: ")) for j in range(cols)] for i in range(rows)]
        matrix1 = np.array(matrix1)
        
        if choice != "3":
            print("Enter the elements of the second matrix:")
            matrix2 = [[float(input(f"Element [{i+1}][{j+1}]: ")) for j in range(cols)] for i in range(rows)]
            matrix2 = np.array(matrix2)
        
        if choice == "1":
            result = matrix1 + matrix2
            print("Result of Matrix Addition:")
        elif choice == "2":
            result = np.dot(matrix1, matrix2)
            print("Result of Matrix Multiplication:")
        elif choice == "3":
            result = matrix1.T
            print("Transpose of the Matrix:")
        print(result)
    else:
        print("Invalid choice.")

if __name__ == "__main__":
    main()
