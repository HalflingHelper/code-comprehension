a = 0
b = 0 
i = 0

while i < len(ls):
  if ls[i] < a:
    b = b + 1
  a = ls[i]
  i = i + 1

print(b)