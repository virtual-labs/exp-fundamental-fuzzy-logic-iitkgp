#  Introduction

Fuzzy logic was developed by Lotfi A. Zadeh in the 1960s in order to provide mathematical rules and functions which permitted natural language queries. Fuzzy logic provides a means of calculating intermediate values between absolute true and absolute false with resulting values ranging between 0.0 and 1.0. With fuzzy logic, it is possible to calculate the degree to which an item is a member. For example, if a person is .83 of tallness, they are " rather tall. " Fuzzy logic calculates the shades of gray between black/white and true/false.

Fuzzy logic is a super set of conventional (or Boolean) logic and contains similarities and differences with Boolean logic. Fuzzy logic is similar to Boolean logic, in that Boolean logic results are returned by fuzzy logic operations when all fuzzy memberships are restricted to 0 and 1. Fuzzy logic differs from Boolean logic in that it is permissive of natural language queries and is more like human thinking; it is based on degrees of truth.

The graphical representation of fuzzy and boolean sets are different as well.

#  Theory

## **Fuzzy Sets**

A fuzzy set is a pair (A,m) where A is a set and m : A -->[0,1].

For each x ε A, m(x) is called the grade of membership of x in (A,m). For a finite set A = {x1,...,xn}, the fuzzy set (A,m) is often denoted by {m(x1) / x1,...,m(xn) / xn}.

Let x ε A. Then x is called not included in the fuzzy set (A,m) if m(x) = 0, x is called fully included if m(x) = 1, and x is called a fuzzy member if 0 < m(x) < 1.The set { x ε A | m(x) > 0 } is called the support of (A,m) and the set { x ε A | m(x) =1 } is called its kernel.

## **Fuzzy Set Operations:**

### ***Fuzzy Addition***

Let us consider A1 = [a,b] and A2 = [c,d]

The addition of A1 and A2 is: [a,b] + [c,d] = [a+c, b+d]

### ***Fuzzy Substraction***

Let us consider A1 = [a,b] and A2 = [c,d]

The substraction of A1 and A2 is: [a,b] - [c,d] = [a-d, b-c]

### ***Fuzzy Complement***

The degree to which you believe something is not in the set is 1.0 minus the degree to which you believe it is in the set.

### ***Fuzzy Intersection***

If you have x degree of faith in statement A, and y degree of faith in statement B, how much faith do you have in the statement A and B?

Eg: How much faith in "that person is about 6' high and tall"

### ***Fuzzy Union***

If you have x degree of faith in statement A, and y degree of faith in statement B, how much faith do you have in the statement A or B?

Eg: How much faith in "that person is about 6' high or tall"