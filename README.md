# BSBOOKS E-COMMERCE WEBSITE

## Cài đặt Backend 

---

1. Cài đặt [NodeJS](https://nodejs.org/en/download/)
2. Cài đặt [Yarn](https://classic.yarnpkg.com/latest.msi)

3. cd vào /bsbooks/server và chạy:

   ```shell
    yarn install
    yarn start
   ```

## Cài đặt Frontend 

---

1. cd vào /bsbooks/client

2. Chạy đoạn command sau:

   ```shell
   yarn install
   yarn start
   ```

Chú ý: Front chạy trên : http://localhost:3000/

## Kết nối với Database (MongoDB)

---

1. Cài đặt [MongoDB](https://www.mongodb.com/try/download/community)
2. Cài đặt [Python](https://www.python.org/downloads/)

3. Cài đặt pymongo, chạy command sau:

   ```shell
   py -m pip install pymongo
   ```
4. Thêm dữ liệu vào database tại /bsbooks/data/v2 chạy command sau: 
    (Dùng để thêm products và product_details)
   ```shell
   py insert_data.py
   ```
5. Thêm dữ liệu vào database tại /bsbooks/data/install_data_products chạy command sau: 
    (Dùng để thêm categorys)
   ```shell
   py insert_data.py
   ```
6. Thêm dữ liệu vào database tại /bsbooks/data/permission chạy command sau:  
   ```shell
   py install_permission.py
   ```




