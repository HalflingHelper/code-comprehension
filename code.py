# Here's what I'm doing:
"""
4x2 design, list programs & number programs x N

Each person does 16 programs... (32??)

To allot for typing time difference, multiple choice?
Random order of the programs
    - split into numbers & list type?
    - or divide based on N?

Numeric:
  Factorial
  Sum 1..N
  Sum odds
  Sum powers of 2
  Log/exponent Calculation (weird)
  Multiplication Calculation (weird)
  Compounding interest (with reasonable rate?)

List
  map (+ 1) / (* 2)
  reverse
  map-if
  filter (even / odds)
  cumsum (tracking an additional variable)

Programs should iterate from 1 to N and create? a list

Loop bodies should be "roughly the same", and randomize which are which size between subjects

"""

# MCQ with good distractors:
    # Off by one
    # Different operation
    # 

# Potential problem - once you "see" what the loop is doing,
# Calculation time could be super different?
# Especially for lists, you could use some heuristic (with multiple choice?)
# What about weirder iteration (not starting at 0, etc.)

# Also the operation we do could be dependent / not on i

# Every program - looks like this

N = 5
i = 0
a = [1, 2, 3, 4, 5]
while i < N:
    a[i] = a[i] * 2
    i = i + 1

print(a)


N = 10
i = 0
s = 0
while i < N:
    s = s + i
    i = i + 1

print(s)


# partial sort - easy to see what it does
ls = [4, 1, 9, 2, 3]
a = 0
r = 0 
i = 0
while i < len(ls):
    if ls[i] > a:
        a = ls[i]
        r = r + 1
    i = i + 1

print(r)

# numerical average - I worry the math is very hard
a = 0
i = 0
while i < len(ls):
    a = a + ls[i]
    i = i + 1

r = a / i
print(r)


# counting even numbers
a = 0
i = 0
while i < len(ls):
    if ls[i] % 2 == 0:
        a = a + 2
    i = i + 1

print(a)

# sums? 

# What is the output?
pass

# Loops on lists vs. loops for numeric operations (with and without closed form solutions)



