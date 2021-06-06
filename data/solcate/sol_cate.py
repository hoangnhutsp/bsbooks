import json

file_name = 'categorys.json'

with open(file_name) as json_file:
    data = json.load(json_file)

 
res = {
    "id": 0,
    "name": "root",
    "subcategories": [],
}

print(res)

for cate in data:
    path = cate['id_path'].split("-")
    print(path)

    for p in path: {
        
    }


