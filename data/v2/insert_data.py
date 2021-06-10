from pymongo import MongoClient
from random import randint
import json


_key = ['products', 'product_details']


client = MongoClient(port=27017)
db=client["bsbooks"]


for key in _key:
    with open(key + '.json') as json_file:
        data = json.load(json_file)

    peo = db[key]
    for _data in data:
        peo.insert_one(_data)


