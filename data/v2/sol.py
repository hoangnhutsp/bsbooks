import json
import random

file_name = 'data.json'

with open(file_name) as json_file:
    books = json.load(json_file)

key0 = [
    "id",
    "id_category",
    "name",
    "short_description",
    "price",
    "discount",
    "discount_rate",
    "rating_average",
    "review_count",
    "thumbnail_url",
    "inventory_status",
    "day_ago_created",
]

key1 = {
    "id",
    "description",
    "specifications",
}



s1 = u'ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯưẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵỶỷỸỹ'
s0 = u'AAAAEEEIIOOOOUUYaaaaeeeiioooouuyAaDdIiUuOoUuAaAaAaAaAaAaAaAaAaAaAaAaEeEeEeEeEeEeEeEeIiIiOoOoOoOoOoOoOoOoOoOoOoOoUuUuUuUuUuUuUuYyYyYyYy'
def remove_accents(input_str):
	s = ''
	input_str.encode('utf-8')
	for c in input_str:
		if c in s1:
			s += s0[s1.index(c)]
		else:
			s += c
	return s


# "publisher",
# "author_name",
# index_name
# index_author_name
url = 'http://localhost:5000/upload/images/'

img_down = []
product = []
product_details = []
for book in books:

    newProduct = {}
    newProductDetails = {}
    for key in key0:
        if key in book:
            newProduct[key] = book[key]
    if 'authors' in book:
        x = book['authors'][0]
        if 'name' in x:
            newProduct['author_name'] = x['name']
        else:
            newProduct['author_name'] = ''
            
        # newProduct['author_name'] = book['authors'][0]['name']
    else:
        newProduct['author_name'] = ''
    newProduct['sell'] = random.randrange(10, 50)

    idx_name = remove_accents(newProduct['name']).lower()
    idx_author_name = remove_accents(newProduct['author_name']).lower()
    newProduct['idx_name'] = idx_name
    newProduct['idx_author_name'] = idx_author_name

    arrImg = book['thumbnail_url'].split("/")
    imgname = url + arrImg[len(arrImg)-1]
    newProduct['thumbnail_url'] = imgname
    # product details
    for key in key1:
        newProductDetails[key] = book[key]

    images = []
    for img in book['images']:
        img_down.append(img['large_url'])
        arrImg = img['large_url'].split("/")
        imgname = url + arrImg[len(arrImg)-1]
        
        images.append(imgname)
    newProductDetails['images'] = images
    product.append(newProduct)
    product_details.append(newProductDetails)


with open("product.json", "w") as txt_file:
   txt_file.write(json.dumps(product)) 
with open("product_details.json", "w") as txt_file:
   txt_file.write(json.dumps(product_details)) 

with open("img_down.json", "w") as txt_file:
   txt_file.write(json.dumps(img_down)) 
   