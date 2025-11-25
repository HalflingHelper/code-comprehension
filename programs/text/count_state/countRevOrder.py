a = 0
b = 0 
i = 0

while i < len(ls):
  if ls[i] < a:
    a = ls[i]
    b = b + 1
  i = i + 1

print(b)