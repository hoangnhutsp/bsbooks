import json
import requests
import os


file_name = 'img_down.json'

with open(file_name) as json_file:
    imgs = json.load(json_file)


print(len(imgs))
path = 'img/'
# for img in imgs:
#     print(img)
#     arrImg = img.split('/')
#     name = (arrImg[len(arrImg)-1])    
#     response = requests.get(img)
#     file = open(path + name, "wb")
#     file.write(response.content)
#     file.close()
#     print("____OK_____")
