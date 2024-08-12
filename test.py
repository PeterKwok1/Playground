import re

# path = "hi/:test/bbbb"

# pattern = "^hi/[^/]+/bbbb$"

# str = "hi/oooo/bbbb"

# match = re.search(pattern, str)

# print(match)

# pattern = "a"
# str = "aaa"
# match = re.findall(pattern, str)
# print(match)

path = "hi/:test/nnnn"

pattern = re.compile(":[^/]+")

str = "[^/]+"

match = re.sub(pattern, str, path)

print(match)

match2 = re.search(match, "hi/oooo/nnnn")

print(match2)

iter = pattern.finditer(path)

for m in iter:
    print(m.start(), m.group())


pattern = re.compile("/public/(?!\\.\\.)+")
str = "/public/.d/if.."
match = re.search(pattern, str)
print(match)

l = [0, 1, 2]
new_list = [(i, j) for i, j in enumerate(l)]
print(new_list)
# for a, b in enumerate(l):
#     print(a, b)

print("hello".strip("h"))
