a = 0
b = 0
c = 0
i = 0

while i < len(ls):
  b = a
  a = ls[i]
  c = b - a
  
  i = i + 1

print(c)