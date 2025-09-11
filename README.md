# 🎬 MovieBox Application

A modern React-based movie application built with TypeScript, using Material-UI and RTK/RTK Query for state
management.

![](/src/assets/demo-images/movies-list.png)


## Demo Images

Welcome to watch more demo images:
[https://github.com/anastasiia-ostrovska/movies/tree/master/src/assets/demo-images](https://github.com/anastasiia-ostrovska/movies/tree/master/src/assets/demo-images)
## 🧱 Architecture

The application follows a clean architecture pattern (FSD) with the following structure:

```
/  
├── src/              # Source code  
│   ├── app/          # Application entry point and providers (e.g. store, routing, init)  
│   ├── pages/        # Top-level route-based components  
│   ├── widgets/      # Reusable UI blocks composed of multiple features/entities  
│   ├── features/     # Business logic and user interactions (feature-level logic)  
│   ├── entities/     # Core business entities (e.g., users, session, movies, )  
│   └── shared/       # Reusable utilities, components, constants etc. 
│  
├── public/           # Static assets (e.g., images, icons, favicon)  
```

### 🛠 Key Technologies

- React 19.1.0
- TypeScript 5.8.3
- Redux Toolkit 2.8.2
- Material-UI 7.1.1
- React Router 7.6.2
- React Hook Form 7.58.0
- Vite 6.3.5

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Docker (for containerized deployment)

### Server

Run docker image as server:
```
  https://hub.docker.com/r/webbylabhub/movies
``` 

### Local Development

1. Clone the repository:

```
git clone https://github.com/anastasiia-ostrovska/movies.git
cd movies
``` 

2. Install dependencies:

```
npm install
``` 

3. Create a `.env` file in the root directory:

```
VITE_API_URL=http://localhost:8000/api/v1
``` 

4. Start the development server:

```
npm run dev
``` 

The application will be available at `http://localhost:3000`

## 🐳 Docker

### Using Pre-built Image

The application is available as a Docker image on DockerHub:
[https://hub.docker.com/r/anastasiiaostrovska/movie-box-webapp](https://hub.docker.com/r/anastasiiaostrovska/movie-box-webapp)

1. Docker Pull Command:

```
docker pull anastasiiaostrovska/movie-box-webapp
``` 

2. Starting instance:

```
docker run --name movies-container -p 3000:3000 -e API_URL=http://localhost:8000/api/v1 anastasiiaostrovska/movie-box-webapp
``` 

(You can change API_URL as an environment variable)

### Building Docker Image Locally

1. Create a `.env.production` file in the root directory:

```
VITE_API_URL=API_URL
``` 

2. Build the image:

```

docker build -t movies-box-webapp .

``` 

3. Run the container:

```
docker run --name movies-container -p 3000:3000 -e API_URL=http://localhost:8000/api/v1 movies-box-webapp
``` 

## ⚙️ Configuration

The application is configured using environment variables:

| Variable | Description          | Default                      |
|----------|----------------------|------------------------------|
| API_URL  | Backend API endpoint | http://localhost:8000/api/v1 |

### Environment Variables

- In development: Use `.env` file (VITE_API_URL)
- In production: Pass through Docker environment variables (API_URL)

## 🔗 Links

- GitHub Repository: [https://github.com/anastasiia-ostrovska/movies](https://github.com/anastasiia-ostrovska/movies)
- Docker
  Image: [https://hub.docker.com/r/anastasiiaostrovska/movie-box-webapp](https://hub.docker.com/r/anastasiiaostrovska/movie-box-webapp)



