import json

file_name = 'data.json'

with open(file_name) as json_file:
    data = json.load(json_file)
with open('category_v0.json') as json_file:
    category_v0 = json.load(json_file)
def find_id_category(_cate):
    #print(_cate)
    path = _cate.split('/')
    _cate = path[len(path) - 1]
    for ca in category_v0:
        if (_cate == ca['name']):
            return ca['_id']

    
category = []
file = open('raw_category.txt')
for line in file:
    category.append(line.replace("\n", ""))

_key = ['name', 'url_key', 'short_description'
, 'price', 'list_price', 'discount', 'discount_rate'
, 'rating_average', 'review_count', 'thumbnail_url'
, 'has_ebook', 'inventory_status', 'description'
, 'publisher', 'authors', 'specifications']

def format_id(id):
    _id = str(id)
    while (len(_id) < 5):
        _id = "0" + _id
    return _id

tmp = 0
data = data['product_detail']
group_name = []

books = []
_id = 0
for book in data:

    productset_group_name = "/".join(book['productset_group_name'].replace('Tiki', 'BSBooks').split("/")[0:3])
    group_name.append(productset_group_name)

    if (group_name.count(productset_group_name) >= 5):
        continue

    new_book = {}

    new_book['_id'] = _id
    new_book['id_category'] = find_id_category(productset_group_name)

    for key in _key:
        if key in book:
            new_book[key] = book[key]
        else:
            new_book[key] = 'null'
    #new_book['productset_group_name'] = productset_group_name
    

    path = new_book['url_key'].split("-")
    path = path[0:len(path)-1]
    path = '-'.join(path)
    new_book['url_key'] = path

    new_book['thumbnail_url'] = format_id(_id) + '_00_thumbnail_url' + '.png'

    # sol sku


    
    new_book['publisher'] = new_book['publisher']['name']
    new_book['authors'] = new_book['authors']['name']

    # ...
    books.append(new_book)

    _id = _id + 1
    

    break


print(len(books))
with open("books_v0.json", "w") as txt_file:
  txt_file.write(json.dumps(books)) 