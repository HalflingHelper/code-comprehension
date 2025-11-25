a = 0
i = 0

while i < len(ls):
  if ls[i] % 2 == a % 2:
    a = a + 1
  i = i + 1

print(a)