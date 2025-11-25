a = 9
i = 0

while i < len(ls):
  if ls[i] < a:
    a = a - 1
  i = i + 1

print(a)