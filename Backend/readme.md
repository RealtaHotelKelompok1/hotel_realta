# Guide

## Package Installation
Install package yang digunakan pada project ini
```bash
$ npm install babel-node @babel/core @babel/node @babel/plugin-transform-runtime @babel/preset-env @babel/runtime dotenv express nodemon pg bcrypt jsonwebtoken
```

### Babel
Babel merupakan compiler JavaScript yang biasa digunakan dengan webpack dan alat build lainnya untuk mengompilasi kode JavaScript modern untuk digunakan di browser lama atau lingkungan runtime yang tidak mendukung fitur bahasa terbaru.
File `.babelrc` menentukan plugin dan preset Babel yang harus digunakan untuk mengubah kode.

Buat file konfigurasi `.babelrc` yang berisikan object di bawah ini.
```
{
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "regenerator": true
            }
        ]
    ]
}
```

### Nodemon
Package ini memungkinkan untuk tidak melakukan perhentian pada running server setiap kali codingan ada perubahan, server akan otomatis restart ulang sesudah save file.

Tambahkan value `start` pada object `scripts` di `package.json`, dimana `server.js` merupakan nama file untuk server.
```json
{
  ...
  "scripts": {
    "start": "nodemon --exec babel-node server.js",
    ...
  },
  ...
}
``` 

### Sequelize
Install sequelize-auto untuk generate model dari tiap tabel pada database yang ada ke file `.js`.
```bash
$ npm i -D sequelize-auto
```
Tambahkan value `reverse:db` pada object `scripts` di `package.json` dan sesuaikan valuenya.
```json
{
  ...
  "scripts": {
    "reverse:db": "sequelize-auto -o ./models -d database_name -h localhost -u user_name -p database_port -x database_password -e postgres",
    ...
  },
  ...
}
```
Buat directory baru untuk model database.
```bash
$ mkdir models
```
Jalankan `reverse:db` untuk generate database ke dalam model.
```bash
$ npm run reverse:db
```
Pada file `init-models.js`, tambahkan beberapa syntax sehingga menjadi seperti di bawah ini.
```javascript
import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)

...
...
...

const models = initModels(sequelize);
export default models;
export { sequelize }
```

### dotenv
`dotenv` adalah library Node.js untuk memuat environment variables dari file `.env` ke objek `process.env` di Node.js.
Environment variables adalah nilai yang dapat diteruskan ke sistem operasi komputer atau aplikasi saat runtime, digunakan untuk menyimpan informasi sensitif seperti password, API key, dan kredensial lain yang tidak boleh disimpan dalam kode itu sendiri.

Buat file `.env` yang berisikan value di bawah ini.
```
PORT = yourdatabaseport
DATABASE = yourdatabasename
DATABASE_USER = yourdatabaseusername
DATABASE_PASSWORD = yourdatabasepassword
```
