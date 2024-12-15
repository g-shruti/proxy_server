# Proxy Server Assignment

## About the Project
This project is a simple API Proxy Server built using Node.js and Express.js. It proxies requests to a public API and includes features such as rate limiting, caching, logging, and error handling. The server is designed to handle high traffic efficiently while ensuring security and performance.

---

## Features
1. **API Proxy**: Forwards requests to a public API (e.g., [JSONPlaceholder](https://jsonplaceholder.typicode.com)).
2. **Rate Limiting**: Restricts each IP to a maximum of 5 requests per minute.
3. **Caching**: Stores successful responses for 5 minutes to reduce load on the external API.
4. **Logging**: Logs request details, including timestamps and IP addresses.
5. **Error Handling**: Handles errors from the external API gracefully.
6. **Authentication (Bonus)**: Provides basic token-based authentication for the proxy endpoint.
7. **Configurable Options (Bonus)**: Allows rate limit and cache duration to be configured via environment variables.

---

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/g-shruti/proxy-server.git
   cd proxy-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```plaintext
   RATE_LIMIT_MAX=5
   CACHE_TTL=300
   PORT=3000
   AUTH_TOKEN=your-secret-token
   ```
   - `RATE_LIMIT_MAX`: Maximum requests per minute per IP.
   - `CACHE_TTL`: Cache duration in seconds.
   - `PORT`: Port number for the server.
   - `AUTH_TOKEN`: Token for basic authentication.

### Running the Server
Start the server using:
```bash
npm start
```
The server will be available at `http://localhost:3000`.

---

## API Usage

### Endpoints
#### **GET /proxy/:path**
- Proxies requests to the public API.
- Example: `GET /proxy/posts` will fetch posts from the proxied API.

### Authentication
- Add the `Authorization` header with the token from the `.env` file:
  ```
  Authorization: Bearer your-secret-token
  ```

---

## Folder Structure
```
proxy-server/
├── controllers/
│   └── proxyController.js   # Handles proxy logic
├── middlewares/
│   ├── auth.js              # Authentication middleware
│   ├── cache.js             # Cache middleware
│   └── rateLimiter.js       # Rate limiting middleware
├── routes/
│   └── proxyRoutes.js       # Defines proxy routes
├── .env                     # Environment variables (not included in repo)
├── .gitignore               # Specifies files to ignore in Git
├── package.json             # Project metadata and dependencies
├── server.js                # Entry point of the application
└── README.md                # Documentation
```

---

## Key Dependencies
| Package             | Description                                           |
|---------------------|-------------------------------------------------------|
| `express`           | Web framework for building HTTP servers.             |
| `dotenv`            | Manages environment variables.                       |
| `axios`             | Handles external API requests.                       |
| `express-rate-limit`| Implements request rate limiting.                    |
| `node-cache`        | Provides in-memory caching.                          |
| `morgan`            | Logs HTTP requests for debugging and monitoring.     |

---

## Contributing
Feel free to fork the repository and create a pull request if you want to contribute or report issues.

---

## License
This project is licensed under the MIT License.

