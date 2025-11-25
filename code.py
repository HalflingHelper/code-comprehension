# Here's what I'm doing:
"""
4x2 design, list programs & number programs x N

Each person does 16 programs... (32??)

To allot for typing time difference, multiple choice?
Random order of the programs
    - split into numbers & list type?
    - or divide based on N?


Simple loop body: maps / filters / on one condition
(More) complex loop body: Some sort of state, more conditions



Programs should iterate from 1 to N and create? a list

Loop bodies should be "roughly the same", and randomize which are which size between subjects

"""

"""
Rejects: (RIP)

countEqual
countBetween
length
listMax
listMin
firstElement
lastElement
countIndexMod
countMax
countMin
countGreaterIndex
"""


# I'm going to have 4 programs of each type - just slightly diff

# 4 sets where I assign randomly 1, 5, 10, 20 to each  of the 4 in each type
# Then shuffle the presentation order of the types


# 5 * 4 = 20 * 4 trials is 80

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

[9, 1, 3, 2, 4]

a = 0
i = 0
while i < len(ls):
    if ls[i] % 2 == i % 2:
        a = a + 1
    i = i + 1

# Same as above, but with an extra variable
a = 0
b = 0
i = 0
while i < len(ls):
    if ls[i] % 2 == b:
        a = a + 1
    b = (b + 1) % 2
    i = i + 1


# This is interesting and maybe more difficult
# I think this is inductable

a = 0
i = 0
while i < len(ls):
    if ls[i] > a:
        a = a + 1
    else:
        a = a - 1
    i = i + 1

print(a)


# sums? 

# What is the output?
pass

# Loops on lists vs. loops for numeric operations (with and without closed form solutions)



