a = 0
i = 0

while i < len(ls):
  if ls[i] > a and a % 2 == 1:
    a = ls[i]
  i = i + 1

print(a)