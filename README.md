# BSBOOKS E-COMMERCE WEBSITE

## Cài đặt Backend 

---

1. Cài đặt [NodeJS](https://nodejs.org/en/download/)
2. Cài đặt [Yarn](https://classic.yarnpkg.com/latest.msi)
3. Tạo một file .env với path: /bsbooks/server/.env thêm vào nội dung:

   ```shell
URL_MONGODB=mongodb+srv://hoangnhutsp:Nhutsp240420@bsbooks.utegf.mongodb.net/bsbooks_db?retryWrites=true&w=majority
DOMAIN_MAIL_GUN=sandboxdf9cca1a0e21488e94280e08ef32f592.mailgun.org
API_KEY_MAIL_GUN=cf562be2b445515ac21fd946ec3651dc-90ac0eb7-6f9584c5
CLIENT_ID=551410903005-ev094ec2i9f5j9p2sqmaqv65ic81eg68.apps.googleusercontent.com
CLIENT_SECRET=AC6CUSWFSQW0Zrxm7fUdwnE-
URL_MONGODB_LOCAL=mongodb://localhost:27017/bsbooks
   ```

4. cd vào /bsbooks/server và run:

   ```shell
    yarn install
    yarn start
   ```

## Cài đặt Frontend

---

1. Cd vào /books/client

2. Chạy command sau:

   ```shell
   yarn install
   yarn start
   ```

Chú ý: Frontend sẽ chạy trên: http://localhost:3000/

## Kết nối với Database (MongoDB)

---
1. Cài đặt [MongoDB](https://www.mongodb.com/try/download/community)
2. Cài đặt [Robo3T](https://robomongo.org/)
3. Cài đặt [Python](https://www.python.org/downloads/)

4. cd vào /bsbooks

5. Cài đặt pymongo. Chạy command sau:

   ```shell
   py -m pip install pymongo
   ```

6. Vào Robo3T kết nối với localhost:27017

