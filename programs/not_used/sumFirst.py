a = 0
b = 0
c = 0
i = 0

while i < len(ls):
  if a == 0:
    a = ls[i]
  elif b == 0:
    b = ls[i]
  
  c = a + b
  
  i = i + 1

print(c)