# PlantPal-API 🌱📬

Welcome to **PlantPal-API**, the backend service powering **PlantPal: AI Grow & Care Assistant**! 🚀

PlantPal is your ultimate AI-powered assistant for plant care, helping diagnose plant diseases, provide treatment recommendations, and foster a thriving community of plant enthusiasts. This API is the core engine that drives all the intelligent features of the PlantPal mobile app.

---

## 🌟 Features

- **AI-Powered Diagnosis**: Identify plant diseases with the power of TensorFlow.js.
- **Care Recommendations**: Tailored solutions and step-by-step guides for plant health.
- **Plant Care Tips**: Get preventive measures and cultivation advice.
- **Community Forums**: Connect and interact with fellow plant lovers.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.x or later
- **npm**: v8.x or later
- **TensorFlow.js**: Included in the project dependencies

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
$ git clone https://github.com/PlantPal-C242-PS112/PlantPal-API.git
$ cd PlantPal-API
```

### 2️⃣ Install Dependencies

```bash
$ npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and specify the required environment variables:

```env
DATABASE_URL=
MODEL_PATH=
JWT_SECRET=
SMTP_HOST=
SMTP_PORT=
SMTP_EMAIL=
SMTP_PASSWORD=
```

You will also need to place the `service-account-key.json` file in the root directory to enable cloud storage and Firestore connection.

### 4️⃣ Migrate the Database

Run the following command to reset and migrate the database:

```bash
$ npx prisma migrate reset
```

### 5️⃣ Run the Server

Start the development server:

```bash
$ npm run dev
```

Or start the production server:

```bash
$ npm run start
```

The API will be available at `http://localhost:8080`. 🎉

---

## 🛠️ API Endpoint Documentation

For detailed API documentation, check out the **[API Docs](https://documenter.getpostman.com/view/31634961/2sAY55byEQ)**.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## 📃 Documentation

### Cloud Architecture
![Cloud Architecture drawio](https://github.com/user-attachments/assets/72bf4993-17b2-4c51-a844-0d5eaa4e6cff)

### ERD
![ERD drawio](https://github.com/user-attachments/assets/7dfe3ecf-f913-4de6-8e5a-b9993b6fe284)

---

Let PlantPal help you grow and care for your plants better than ever before! 🌿💚
