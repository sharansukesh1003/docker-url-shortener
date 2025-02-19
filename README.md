# 🚀 Node.js URL Shortener with Docker & MongoDB

A simple URL shortener built with **Node.js**, **Express**, and **MongoDB**, fully containerized using **Docker** and **Docker Compose**.

## 📌 Features
✅ Shorten long URLs  
✅ Redirect using the short URL  
✅ Fully containerized with Docker  
✅ Uses MongoDB as the database  

## 🛠️ Getting Started

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### 2️⃣ Start the Containers  
Make sure you have **Docker** and **Docker Compose** installed. Then, run:  
```sh
docker-compose up --build
```

### 3️⃣ Test the API  
Use **cURL** or Postman to shorten a URL:  
```sh
curl -X POST http://localhost:5000/shorten-url \
     -H "Content-Type: application/json" \
     -d '{"fullUrl": "https://example.com"}'
```

Expected Response:  
```json
{
  "shortUrl": "http://localhost:5000/65d2f3c4a1b2c3d4e5f67890"
}
```

To visit the shortened URL, run:  
```sh
curl -L http://localhost:5000/65d2f3c4a1b2c3d4e5f67890
```

---

## 📖 Read the Full Guide  
For a detailed guide on **containerizing Node.js with Docker & MongoDB**, check out the blog post:  

👉 [**Beginner's Guide to Node.js Containerization**](#)  

---

Happy coding! 🚀✨

