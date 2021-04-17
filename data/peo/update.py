import json


file_name = 'product_detail.json'

with open(file_name) as json_file:
    books = json.load(json_file)

new_books = []
for book in books:
    new_book = {}
    for x in book:
        if (x == '_id'):
            new_book['id'] = book[x]
            continue
        new_book[x] = book[x]

    new_books.append(new_book)


with open('product_detail_1.json', "w") as txt:
    txt.write(json.dumps(new_books))