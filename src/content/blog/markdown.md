---
title: "Markdown"
description: "Support for markdown in Verve theme."
pubDate: "Jul 13 2023"
featured: true
updatedDate: "14 January 2024"
---

Below is a simple Java program to calculate Fibonacci numbers using both iterative and recursive approaches:

```java
public class Fibonacci {

    // Iterative approach
    public static long fibonacciIterative(int n) {
        if (n <= 1) {
            return n;
        }

        long fib = 0;
        long prev = 1;
        long temp;

        for (int i = 2; i <= n; i++) {
            temp = fib;
            fib = fib + prev;
            prev = temp;
        }

        return fib;
    }

    // Recursive approach
    public static long fibonacciRecursive(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }

    public static void main(String[] args) {
        int n = 10;

        System.out.println("Java program to find Fibonacci using Iterative approach:");
        for (int i = 0; i <= n; i++) {
            System.out.print(fibonacciIterative(i) + " ");
        }

        System.out.println("\nFibonacci using Recursive approach:");
        for (int i = 0; i <= n; i++) {
            System.out.print(fibonacciRecursive(i) + " ");
        }
    }
}
```

This program defines a `Fibonacci` class with two methods: `fibonacciIterative` and `fibonacciRecursive`. The `main` method demonstrates the usage of both methods to calculate Fibonacci numbers up to a specified value (in this case, `n = 10`). You can adjust the value of `n` to calculate Fibonacci numbers for a different range.
