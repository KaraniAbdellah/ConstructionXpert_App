# 👷‍♂️ ConstructionXpert_App
A construction project management application to help teams organize projects, tasks, and resources efficiently.

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![React.js](https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)


<img src="main.png">
<img src="auth.png">
<img src="home.png">


### ✨ Features

#### Project Management

<ul>
    <li>Create new projects (name, description, start/end dates, budget) </li>
    <li>View list of existing projects</li>
    <li>Update project details</li>
    <li>Delete projects</li>
</ul>

#### Task Management

<ul>
    <li> Create new tasks for projects (description, start/end dates, required resources) </li>
    <li>View tasks for each project</li>
    <li>Update task details</li>
    <li>Delete tasks</li>
</ul>

#### Resource Management

<ul>
    <li>Add new resources (name, type, quantity, supplier information)</li>
    <li>View available resources</li>
    <li>Update resource details</li>
    <li>Delete resources</li>
</ul>

### 👨‍💻 Getting Started 

<b>1. Clone the repository</b>

```bash
git clone https://github.com/KaraniAbdellah/ConstructionXpert_App.git
```

<b>2. Install backend dependencies</b>

```bash
cd ConstructionXpert_App/backend
npm install
```

<b>3. Install frontend dependencies</b>

```bash
cd ../ConstructionXpert_App/frontend
npm install
```


<b>4. Configure environment variables Create a .env file in the backend folder with:</b>

```bash
PORT=3000
URI_DB=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

<b>5. Start the application</b>

```bash
# Start backend
cd backend && nodemon server.js
# Start frontend
cd frontend && npm run dev
```

### 👥 Author

**<a href="https://www.linkedin.com/in/abdellah-karani-965928294/">Abdellah Karani</a>**
