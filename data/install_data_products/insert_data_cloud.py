from pymongo import MongoClient
import json


_key = ['products', 'product_details', 'categorys', 'configs']


client = MongoClient("mongodb+srv://hoangnhutsp:Nhutsp240420@bsbooks.utegf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

db=client.get_database('bsbooks_db')

for key in _key:
    with open(key + '.json') as json_file:
        data = json.load(json_file)

    peo = db[key]
    for _data in data:
        peo.insert_one(_data)


