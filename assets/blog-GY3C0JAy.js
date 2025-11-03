import{a as p,b as t,d as g}from"./button-D5wCDLcs.js";import{a as s,p as a}from"./chunk-B7RQU5TL-BtaKt0sU.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],E=p("arrow-right",h);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],P=p("calendar",f);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],q=p("clock",y),v=s.forwardRef(({className:r,...n},e)=>a.jsx("div",{ref:e,className:t("rounded-lg border bg-card text-card-foreground shadow-sm",r),...n}));v.displayName="Card";const b=s.forwardRef(({className:r,...n},e)=>a.jsx("div",{ref:e,className:t("flex flex-col space-y-1.5 p-6",r),...n}));b.displayName="CardHeader";const S=s.forwardRef(({className:r,...n},e)=>a.jsx("h3",{ref:e,className:t("text-2xl font-semibold leading-none tracking-tight",r),...n}));S.displayName="CardTitle";const C=s.forwardRef(({className:r,...n},e)=>a.jsx("p",{ref:e,className:t("text-sm text-muted-foreground",r),...n}));C.displayName="CardDescription";const x=s.forwardRef(({className:r,...n},e)=>a.jsx("div",{ref:e,className:t("p-6 pt-0",r),...n}));x.displayName="CardContent";const w=s.forwardRef(({className:r,...n},e)=>a.jsx("div",{ref:e,className:t("flex items-center p-6 pt-0",r),...n}));w.displayName="CardFooter";const T=g("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function N({className:r,variant:n,...e}){return a.jsx("div",{className:t(T({variant:n}),r),...e})}const m=[{id:"building-scalable-apis-with-expressjs",title:"Building Scalable APIs with Express.js",excerpt:"Brief description of your blog post...",content:`# Building Scalable APIs with Express.js

Write your blog post content here using Markdown syntax.

## Introduction

Start with an engaging introduction that hooks your readers.

## Main Content

Add your main content sections here.

### Subsection

You can use various markdown features:

- **Bold text**
- *Italic text*
- \`inline code\`
- [Links](https://example.com)

### Code Examples

\`\`\`javascript
// Add code examples
function example() {
  console.log('Hello, World!');
}
\`\`\`

### Lists

1. Numbered lists
2. Are also supported
3. Like this

## Conclusion

Wrap up your post with a strong conclusion.
`,author:"Rohit Soni",publishedAt:"2025-11-03",readTime:5,tags:["Tag1","Tag2","Tag3"],featured:!1,image:"optional-image.jpg"},{id:"getting-started-with-react-native",title:"Getting Started with React Native: A Complete Guide",excerpt:"Learn how to build your first React Native app from scratch. This comprehensive guide covers setup, navigation, and best practices for mobile development.",content:`# Getting Started with React Native: A Complete Guide\r
\r
React Native has revolutionized mobile app development by allowing developers to build native mobile applications using JavaScript and React. In this comprehensive guide, we'll walk through everything you need to know to get started with React Native development.\r
\r
## What is React Native?\r
\r
React Native is an open-source framework developed by Facebook that enables developers to build mobile applications using React and JavaScript. Unlike hybrid apps that run in a WebView, React Native apps compile to native code, providing near-native performance and user experience.\r
\r
## Setting Up Your Development Environment\r
\r
Before we start building our first React Native app, we need to set up our development environment. Here's what you'll need:\r
\r
### Prerequisites\r
- Node.js (version 14 or higher)\r
- npm or yarn package manager\r
- Android Studio (for Android development)\r
- Xcode (for iOS development - macOS only)\r
\r
### Installation Steps\r
\r
1. **Install React Native CLI**\r
   \`\`\`bash\r
   npm install -g react-native-cli\r
   \`\`\`\r
\r
2. **Create a new React Native project**\r
   \`\`\`bash\r
   npx react-native init MyFirstApp\r
   cd MyFirstApp\r
   \`\`\`\r
\r
3. **Run your app**\r
   \`\`\`bash\r
   # For Android\r
   npx react-native run-android\r
   \r
   # For iOS (macOS only)\r
   npx react-native run-ios\r
   \`\`\`\r
\r
## Understanding the Project Structure\r
\r
When you create a new React Native project, you'll see several important files and folders:\r
\r
- **App.js**: The main component of your application\r
- **android/**: Contains Android-specific code and configuration\r
- **ios/**: Contains iOS-specific code and configuration\r
- **node_modules/**: Contains all the npm packages\r
- **package.json**: Lists dependencies and scripts\r
\r
## Building Your First Component\r
\r
Let's create a simple component to understand React Native basics:\r
\r
\`\`\`javascript\r
import React from 'react';\r
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';\r
\r
const WelcomeScreen = () => {\r
  const handlePress = () => {\r
    alert('Hello React Native!');\r
  };\r
\r
  return (\r
    <View style={styles.container}>\r
      <Text style={styles.title}>Welcome to React Native</Text>\r
      <TouchableOpacity style={styles.button} onPress={handlePress}>\r
        <Text style={styles.buttonText}>Press Me</Text>\r
      </TouchableOpacity>\r
    </View>\r
  );\r
};\r
\r
const styles = StyleSheet.create({\r
  container: {\r
    flex: 1,\r
    justifyContent: 'center',\r
    alignItems: 'center',\r
    backgroundColor: '#f5f5f5',\r
  },\r
  title: {\r
    fontSize: 24,\r
    fontWeight: 'bold',\r
    marginBottom: 20,\r
    color: '#333',\r
  },\r
  button: {\r
    backgroundColor: '#007AFF',\r
    paddingHorizontal: 20,\r
    paddingVertical: 10,\r
    borderRadius: 8,\r
  },\r
  buttonText: {\r
    color: 'white',\r
    fontSize: 16,\r
    fontWeight: '600',\r
  },\r
});\r
\r
export default WelcomeScreen;\r
\`\`\`\r
\r
## Navigation in React Native\r
\r
Navigation is crucial for mobile apps. React Navigation is the most popular navigation library:\r
\r
\`\`\`bash\r
npm install @react-navigation/native @react-navigation/stack\r
npm install react-native-screens react-native-safe-area-context\r
\`\`\`\r
\r
## Best Practices\r
\r
1. **Use TypeScript**: Adds type safety and better development experience\r
2. **Follow naming conventions**: Use PascalCase for components, camelCase for functions\r
3. **Optimize performance**: Use FlatList for large lists, avoid unnecessary re-renders\r
4. **Test on real devices**: Simulators don't always reflect real device behavior\r
5. **Handle different screen sizes**: Design responsive layouts\r
\r
## Common Challenges and Solutions\r
\r
### Performance Issues\r
- Use \`React.memo\` for expensive components\r
- Implement proper list virtualization\r
- Optimize images and assets\r
\r
### Platform Differences\r
- Use Platform.OS to handle platform-specific code\r
- Test thoroughly on both iOS and Android\r
- Consider platform-specific design guidelines\r
\r
## Conclusion\r
\r
React Native offers an excellent way to build mobile applications with a single codebase. While there's a learning curve, the benefits of code reusability and faster development cycles make it an attractive choice for many projects.\r
\r
Start with simple projects, gradually add complexity, and don't hesitate to dive into native code when needed. The React Native community is vibrant and helpful, so you'll find plenty of resources and support along your journey.\r
\r
Happy coding!`,author:"Rohit Soni",publishedAt:"2024-01-15",readTime:8,tags:["React Native","Mobile Development","JavaScript","Tutorial"],featured:1,image:"react-native-guide.jpg"},{id:"mern-stack-best-practices",title:"MERN Stack Best Practices for Scalable Applications",excerpt:"Discover essential best practices for building scalable MERN stack applications. Learn about project structure, security, performance optimization, and deployment strategies.",content:`# MERN Stack Best Practices for Scalable Applications\r
\r
The MERN stack (MongoDB, Express.js, React, Node.js) has become one of the most popular choices for building modern web applications. However, building scalable and maintainable MERN applications requires following certain best practices. In this post, we'll explore the essential practices that will help you build robust applications.\r
\r
## Project Structure and Organization\r
\r
A well-organized project structure is the foundation of any scalable application. Here's a recommended structure for MERN applications:\r
\r
\`\`\`\r
project-root/\r
├── client/                 # React frontend\r
│   ├── public/\r
│   ├── src/\r
│   │   ├── components/\r
│   │   ├── pages/\r
│   │   ├── hooks/\r
│   │   ├── utils/\r
│   │   ├── services/\r
│   │   └── styles/\r
│   └── package.json\r
├── server/                 # Node.js backend\r
│   ├── controllers/\r
│   ├── models/\r
│   ├── routes/\r
│   ├── middleware/\r
│   ├── utils/\r
│   ├── config/\r
│   └── package.json\r
├── shared/                 # Shared utilities/types\r
└── README.md\r
\`\`\`\r
\r
## Backend Best Practices\r
\r
### 1. Environment Configuration\r
\r
Always use environment variables for configuration:\r
\r
\`\`\`javascript\r
// config/database.js\r
const mongoose = require('mongoose');\r
\r
const connectDB = async () => {\r
  try {\r
    const conn = await mongoose.connect(process.env.MONGODB_URI, {\r
      useNewUrlParser: true,\r
      useUnifiedTopology: true,\r
    });\r
    console.log(\`MongoDB Connected: \${conn.connection.host}\`);\r
  } catch (error) {\r
    console.error(error);\r
    process.exit(1);\r
  }\r
};\r
\r
module.exports = connectDB;\r
\`\`\`\r
\r
### 2. Error Handling Middleware\r
\r
Implement centralized error handling:\r
\r
\`\`\`javascript\r
// middleware/errorHandler.js\r
const errorHandler = (err, req, res, next) => {\r
  let error = { ...err };\r
  error.message = err.message;\r
\r
  // Log error\r
  console.error(err);\r
\r
  // Mongoose bad ObjectId\r
  if (err.name === 'CastError') {\r
    const message = 'Resource not found';\r
    error = { message, statusCode: 404 };\r
  }\r
\r
  // Mongoose duplicate key\r
  if (err.code === 11000) {\r
    const message = 'Duplicate field value entered';\r
    error = { message, statusCode: 400 };\r
  }\r
\r
  // Mongoose validation error\r
  if (err.name === 'ValidationError') {\r
    const message = Object.values(err.errors).map(val => val.message);\r
    error = { message, statusCode: 400 };\r
  }\r
\r
  res.status(error.statusCode || 500).json({\r
    success: false,\r
    error: error.message || 'Server Error'\r
  });\r
};\r
\r
module.exports = errorHandler;\r
\`\`\`\r
\r
### 3. Input Validation\r
\r
Use libraries like Joi or express-validator:\r
\r
\`\`\`javascript\r
const { body, validationResult } = require('express-validator');\r
\r
const validateUser = [\r
  body('email').isEmail().normalizeEmail(),\r
  body('password').isLength({ min: 6 }),\r
  body('name').trim().isLength({ min: 2 }),\r
  (req, res, next) => {\r
    const errors = validationResult(req);\r
    if (!errors.isEmpty()) {\r
      return res.status(400).json({ errors: errors.array() });\r
    }\r
    next();\r
  }\r
];\r
\`\`\`\r
\r
## Frontend Best Practices\r
\r
### 1. Component Organization\r
\r
Keep components small and focused:\r
\r
\`\`\`javascript\r
// components/UserCard/UserCard.jsx\r
import React from 'react';\r
import './UserCard.css';\r
\r
const UserCard = ({ user, onEdit, onDelete }) => {\r
  return (\r
    <div className="user-card">\r
      <img src={user.avatar} alt={user.name} />\r
      <h3>{user.name}</h3>\r
      <p>{user.email}</p>\r
      <div className="actions">\r
        <button onClick={() => onEdit(user.id)}>Edit</button>\r
        <button onClick={() => onDelete(user.id)}>Delete</button>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default UserCard;\r
\`\`\`\r
\r
### 2. State Management\r
\r
Use Context API for global state or Redux for complex applications:\r
\r
\`\`\`javascript\r
// context/AuthContext.js\r
import React, { createContext, useContext, useReducer } from 'react';\r
\r
const AuthContext = createContext();\r
\r
const authReducer = (state, action) => {\r
  switch (action.type) {\r
    case 'LOGIN_SUCCESS':\r
      return {\r
        ...state,\r
        user: action.payload,\r
        isAuthenticated: true,\r
        loading: false\r
      };\r
    case 'LOGOUT':\r
      return {\r
        ...state,\r
        user: null,\r
        isAuthenticated: false,\r
        loading: false\r
      };\r
    default:\r
      return state;\r
  }\r
};\r
\r
export const AuthProvider = ({ children }) => {\r
  const [state, dispatch] = useReducer(authReducer, {\r
    user: null,\r
    isAuthenticated: false,\r
    loading: true\r
  });\r
\r
  return (\r
    <AuthContext.Provider value={{ ...state, dispatch }}>\r
      {children}\r
    </AuthContext.Provider>\r
  );\r
};\r
\r
export const useAuth = () => useContext(AuthContext);\r
\`\`\`\r
\r
## Security Best Practices\r
\r
### 1. Authentication and Authorization\r
\r
Implement JWT-based authentication:\r
\r
\`\`\`javascript\r
// middleware/auth.js\r
const jwt = require('jsonwebtoken');\r
const User = require('../models/User');\r
\r
const protect = async (req, res, next) => {\r
  let token;\r
\r
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {\r
    token = req.headers.authorization.split(' ')[1];\r
  }\r
\r
  if (!token) {\r
    return res.status(401).json({ message: 'Not authorized to access this route' });\r
  }\r
\r
  try {\r
    const decoded = jwt.verify(token, process.env.JWT_SECRET);\r
    req.user = await User.findById(decoded.id);\r
    next();\r
  } catch (error) {\r
    return res.status(401).json({ message: 'Not authorized to access this route' });\r
  }\r
};\r
\r
module.exports = { protect };\r
\`\`\`\r
\r
### 2. Data Sanitization\r
\r
Sanitize user input to prevent XSS and injection attacks:\r
\r
\`\`\`javascript\r
const mongoSanitize = require('express-mongo-sanitize');\r
const xss = require('xss-clean');\r
const hpp = require('hpp');\r
\r
app.use(mongoSanitize());\r
app.use(xss());\r
app.use(hpp());\r
\`\`\`\r
\r
## Performance Optimization\r
\r
### 1. Database Optimization\r
\r
Use proper indexing and aggregation:\r
\r
\`\`\`javascript\r
// models/User.js\r
const userSchema = new mongoose.Schema({\r
  email: {\r
    type: String,\r
    required: true,\r
    unique: true,\r
    index: true\r
  },\r
  name: {\r
    type: String,\r
    required: true,\r
    index: true\r
  },\r
  createdAt: {\r
    type: Date,\r
    default: Date.now,\r
    index: true\r
  }\r
});\r
\r
// Compound index for common queries\r
userSchema.index({ email: 1, createdAt: -1 });\r
\`\`\`\r
\r
### 2. Frontend Optimization\r
\r
Implement code splitting and lazy loading:\r
\r
\`\`\`javascript\r
import React, { Suspense, lazy } from 'react';\r
\r
const Dashboard = lazy(() => import('./components/Dashboard'));\r
const Profile = lazy(() => import('./components/Profile'));\r
\r
function App() {\r
  return (\r
    <div className="App">\r
      <Suspense fallback={<div>Loading...</div>}>\r
        <Routes>\r
          <Route path="/dashboard" element={<Dashboard />} />\r
          <Route path="/profile" element={<Profile />} />\r
        </Routes>\r
      </Suspense>\r
    </div>\r
  );\r
}\r
\`\`\`\r
\r
## Testing Strategies\r
\r
### Backend Testing\r
\r
\`\`\`javascript\r
// tests/auth.test.js\r
const request = require('supertest');\r
const app = require('../app');\r
\r
describe('Auth Endpoints', () => {\r
  test('Should register a new user', async () => {\r
    const response = await request(app)\r
      .post('/api/auth/register')\r
      .send({\r
        name: 'Test User',\r
        email: 'test@example.com',\r
        password: 'password123'\r
      });\r
    \r
    expect(response.status).toBe(201);\r
    expect(response.body.success).toBe(true);\r
  });\r
});\r
\`\`\`\r
\r
### Frontend Testing\r
\r
\`\`\`javascript\r
// components/__tests__/UserCard.test.js\r
import { render, screen, fireEvent } from '@testing-library/react';\r
import UserCard from '../UserCard';\r
\r
test('renders user information', () => {\r
  const user = {\r
    id: 1,\r
    name: 'John Doe',\r
    email: 'john@example.com',\r
    avatar: 'avatar.jpg'\r
  };\r
\r
  render(<UserCard user={user} onEdit={jest.fn()} onDelete={jest.fn()} />);\r
  \r
  expect(screen.getByText('John Doe')).toBeInTheDocument();\r
  expect(screen.getByText('john@example.com')).toBeInTheDocument();\r
});\r
\`\`\`\r
\r
## Deployment Best Practices\r
\r
### 1. Environment Setup\r
\r
Use different configurations for different environments:\r
\r
\`\`\`javascript\r
// config/config.js\r
module.exports = {\r
  development: {\r
    database: process.env.DEV_DATABASE_URL,\r
    jwtSecret: process.env.DEV_JWT_SECRET,\r
  },\r
  production: {\r
    database: process.env.DATABASE_URL,\r
    jwtSecret: process.env.JWT_SECRET,\r
  }\r
};\r
\`\`\`\r
\r
### 2. Docker Configuration\r
\r
\`\`\`dockerfile\r
# Dockerfile\r
FROM node:16-alpine\r
\r
WORKDIR /app\r
\r
COPY package*.json ./\r
RUN npm ci --only=production\r
\r
COPY . .\r
\r
EXPOSE 5000\r
\r
CMD ["npm", "start"]\r
\`\`\`\r
\r
## Conclusion\r
\r
Building scalable MERN applications requires attention to detail in project structure, security, performance, and deployment. By following these best practices, you'll create applications that are maintainable, secure, and performant.\r
\r
Remember that these practices should be adapted to your specific use case and requirements. Start with the basics and gradually implement more advanced patterns as your application grows.`,author:"Rohit Soni",publishedAt:"2024-01-10",readTime:12,tags:["MERN Stack","Best Practices","Node.js","React","MongoDB"],featured:1,image:"mern-best-practices.jpg"},{id:"typescript-react-development",title:"Why TypeScript is Essential for Modern React Development",excerpt:"Explore the benefits of using TypeScript with React and learn how it can improve your development experience, catch bugs early, and make your code more maintainable.",content:`# Why TypeScript is Essential for Modern React Development\r
\r
TypeScript has become increasingly popular in the React ecosystem, and for good reason. In this post, we'll explore why TypeScript is essential for modern React development and how it can significantly improve your development experience.\r
\r
## What is TypeScript?\r
\r
TypeScript is a superset of JavaScript that adds static type definitions. It compiles to plain JavaScript and runs anywhere JavaScript runs. Think of it as JavaScript with superpowers – it provides all the features of JavaScript plus additional features like static typing, interfaces, and advanced IDE support.\r
\r
## Benefits of Using TypeScript with React\r
\r
### 1. Early Bug Detection\r
\r
One of the most significant advantages of TypeScript is its ability to catch errors at compile time rather than runtime:\r
\r
\`\`\`typescript\r
// Without TypeScript - Runtime error\r
function greetUser(user) {\r
  return \`Hello, \${user.name}!\`;\r
}\r
\r
greetUser(null); // Runtime error: Cannot read property 'name' of null\r
\r
// With TypeScript - Compile-time error\r
interface User {\r
  name: string;\r
  email: string;\r
}\r
\r
function greetUser(user: User): string {\r
  return \`Hello, \${user.name}!\`;\r
}\r
\r
greetUser(null); // TypeScript error: Argument of type 'null' is not assignable\r
\`\`\`\r
\r
### 2. Better IDE Support\r
\r
TypeScript provides excellent IntelliSense, auto-completion, and refactoring capabilities:\r
\r
\`\`\`typescript\r
interface Props {\r
  title: string;\r
  count: number;\r
  onIncrement: () => void;\r
  isLoading?: boolean;\r
}\r
\r
const Counter: React.FC<Props> = ({ title, count, onIncrement, isLoading = false }) => {\r
  // IDE will provide auto-completion for all props\r
  return (\r
    <div>\r
      <h2>{title}</h2>\r
      <p>Count: {count}</p>\r
      <button onClick={onIncrement} disabled={isLoading}>\r
        {isLoading ? 'Loading...' : 'Increment'}\r
      </button>\r
    </div>\r
  );\r
};\r
\`\`\`\r
\r
### 3. Self-Documenting Code\r
\r
TypeScript interfaces and types serve as documentation:\r
\r
\`\`\`typescript\r
interface ApiResponse<T> {\r
  data: T;\r
  status: 'success' | 'error';\r
  message?: string;\r
  timestamp: Date;\r
}\r
\r
interface User {\r
  id: number;\r
  name: string;\r
  email: string;\r
  role: 'admin' | 'user' | 'moderator';\r
  createdAt: Date;\r
  lastLogin?: Date;\r
}\r
\r
// The function signature tells you exactly what to expect\r
async function fetchUser(id: number): Promise<ApiResponse<User>> {\r
  // Implementation\r
}\r
\`\`\`\r
\r
## Setting Up TypeScript with React\r
\r
### 1. Create React App with TypeScript\r
\r
\`\`\`bash\r
npx create-react-app my-app --template typescript\r
\`\`\`\r
\r
### 2. Adding TypeScript to Existing Project\r
\r
\`\`\`bash\r
npm install --save-dev typescript @types/react @types/react-dom\r
\`\`\`\r
\r
### 3. TypeScript Configuration\r
\r
Create a \`tsconfig.json\` file:\r
\r
\`\`\`json\r
{\r
  "compilerOptions": {\r
    "target": "es5",\r
    "lib": ["dom", "dom.iterable", "es6"],\r
    "allowJs": true,\r
    "skipLibCheck": true,\r
    "esModuleInterop": true,\r
    "allowSyntheticDefaultImports": true,\r
    "strict": true,\r
    "forceConsistentCasingInFileNames": true,\r
    "module": "esnext",\r
    "moduleResolution": "node",\r
    "resolveJsonModule": true,\r
    "isolatedModules": true,\r
    "noEmit": true,\r
    "jsx": "react-jsx"\r
  },\r
  "include": [\r
    "src"\r
  ]\r
}\r
\`\`\`\r
\r
## Common TypeScript Patterns in React\r
\r
### 1. Component Props\r
\r
\`\`\`typescript\r
// Basic props interface\r
interface ButtonProps {\r
  children: React.ReactNode;\r
  onClick: () => void;\r
  variant?: 'primary' | 'secondary';\r
  disabled?: boolean;\r
}\r
\r
const Button: React.FC<ButtonProps> = ({ \r
  children, \r
  onClick, \r
  variant = 'primary', \r
  disabled = false \r
}) => {\r
  return (\r
    <button \r
      className={variant} \r
      onClick={onClick} \r
      disabled={disabled}\r
    >\r
      {children}\r
    </button>\r
  );\r
};\r
\`\`\`\r
\r
### 2. State Management\r
\r
\`\`\`typescript\r
// Typed useState\r
const [user, setUser] = useState<User | null>(null);\r
const [loading, setLoading] = useState<boolean>(false);\r
const [errors, setErrors] = useState<string[]>([]);\r
\r
// Typed useReducer\r
interface State {\r
  count: number;\r
  loading: boolean;\r
}\r
\r
type Action = \r
  | { type: 'INCREMENT' }\r
  | { type: 'DECREMENT' }\r
  | { type: 'SET_LOADING'; payload: boolean };\r
\r
const reducer = (state: State, action: Action): State => {\r
  switch (action.type) {\r
    case 'INCREMENT':\r
      return { ...state, count: state.count + 1 };\r
    case 'DECREMENT':\r
      return { ...state, count: state.count - 1 };\r
    case 'SET_LOADING':\r
      return { ...state, loading: action.payload };\r
    default:\r
      return state;\r
  }\r
};\r
\`\`\`\r
\r
### 3. Custom Hooks\r
\r
\`\`\`typescript\r
interface UseApiResult<T> {\r
  data: T | null;\r
  loading: boolean;\r
  error: string | null;\r
  refetch: () => void;\r
}\r
\r
function useApi<T>(url: string): UseApiResult<T> {\r
  const [data, setData] = useState<T | null>(null);\r
  const [loading, setLoading] = useState<boolean>(true);\r
  const [error, setError] = useState<string | null>(null);\r
\r
  const fetchData = useCallback(async () => {\r
    try {\r
      setLoading(true);\r
      const response = await fetch(url);\r
      const result = await response.json();\r
      setData(result);\r
    } catch (err) {\r
      setError(err instanceof Error ? err.message : 'An error occurred');\r
    } finally {\r
      setLoading(false);\r
    }\r
  }, [url]);\r
\r
  useEffect(() => {\r
    fetchData();\r
  }, [fetchData]);\r
\r
  return { data, loading, error, refetch: fetchData };\r
}\r
\`\`\`\r
\r
### 4. Event Handlers\r
\r
\`\`\`typescript\r
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {\r
  setValue(event.target.value);\r
};\r
\r
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {\r
  event.preventDefault();\r
  // Handle form submission\r
};\r
\r
const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {\r
  console.log('Button clicked', event.currentTarget);\r
};\r
\`\`\`\r
\r
## Advanced TypeScript Patterns\r
\r
### 1. Generic Components\r
\r
\`\`\`typescript\r
interface ListProps<T> {\r
  items: T[];\r
  renderItem: (item: T) => React.ReactNode;\r
  keyExtractor: (item: T) => string | number;\r
}\r
\r
function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {\r
  return (\r
    <ul>\r
      {items.map(item => (\r
        <li key={keyExtractor(item)}>\r
          {renderItem(item)}\r
        </li>\r
      ))}\r
    </ul>\r
  );\r
}\r
\r
// Usage\r
<List\r
  items={users}\r
  renderItem={(user) => <span>{user.name}</span>}\r
  keyExtractor={(user) => user.id}\r
/>\r
\`\`\`\r
\r
### 2. Utility Types\r
\r
\`\`\`typescript\r
interface User {\r
  id: number;\r
  name: string;\r
  email: string;\r
  password: string;\r
}\r
\r
// Pick specific properties\r
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;\r
\r
// Omit specific properties\r
type CreateUserRequest = Omit<User, 'id'>;\r
\r
// Make all properties optional\r
type PartialUser = Partial<User>;\r
\r
// Make all properties required\r
type RequiredUser = Required<User>;\r
\`\`\`\r
\r
### 3. Discriminated Unions\r
\r
\`\`\`typescript\r
type LoadingState = {\r
  status: 'loading';\r
};\r
\r
type SuccessState = {\r
  status: 'success';\r
  data: User[];\r
};\r
\r
type ErrorState = {\r
  status: 'error';\r
  error: string;\r
};\r
\r
type ApiState = LoadingState | SuccessState | ErrorState;\r
\r
const renderContent = (state: ApiState) => {\r
  switch (state.status) {\r
    case 'loading':\r
      return <div>Loading...</div>;\r
    case 'success':\r
      return <div>{state.data.length} users loaded</div>;\r
    case 'error':\r
      return <div>Error: {state.error}</div>;\r
  }\r
};\r
\`\`\`\r
\r
## Best Practices\r
\r
### 1. Start Strict\r
\r
Enable strict mode in your TypeScript configuration:\r
\r
\`\`\`json\r
{\r
  "compilerOptions": {\r
    "strict": true,\r
    "noImplicitAny": true,\r
    "strictNullChecks": true,\r
    "strictFunctionTypes": true\r
  }\r
}\r
\`\`\`\r
\r
### 2. Use Meaningful Names\r
\r
\`\`\`typescript\r
// Good\r
interface UserProfileProps {\r
  user: User;\r
  onEdit: (userId: number) => void;\r
  isEditable: boolean;\r
}\r
\r
// Avoid\r
interface Props {\r
  data: any;\r
  onClick: Function;\r
  flag: boolean;\r
}\r
\`\`\`\r
\r
### 3. Leverage Type Guards\r
\r
\`\`\`typescript\r
function isUser(obj: any): obj is User {\r
  return obj && typeof obj.id === 'number' && typeof obj.name === 'string';\r
}\r
\r
// Usage\r
if (isUser(data)) {\r
  // TypeScript knows data is User type here\r
  console.log(data.name);\r
}\r
\`\`\`\r
\r
## Common Pitfalls and Solutions\r
\r
### 1. Any Type Abuse\r
\r
\`\`\`typescript\r
// Avoid\r
const data: any = fetchData();\r
\r
// Better\r
interface ApiResponse {\r
  users: User[];\r
  total: number;\r
}\r
\r
const data: ApiResponse = fetchData();\r
\`\`\`\r
\r
### 2. Missing Null Checks\r
\r
\`\`\`typescript\r
// Risky\r
function getUserName(user: User | null) {\r
  return user.name; // Potential runtime error\r
}\r
\r
// Safe\r
function getUserName(user: User | null) {\r
  return user?.name ?? 'Unknown';\r
}\r
\`\`\`\r
\r
## Conclusion\r
\r
TypeScript brings significant benefits to React development by providing type safety, better tooling, and improved code maintainability. While there's a learning curve, the investment pays off quickly through reduced bugs, better refactoring capabilities, and improved developer experience.\r
\r
Start by adding TypeScript to a small project or component, and gradually expand its usage. The React and TypeScript communities have created excellent resources and type definitions that make the integration seamless.\r
\r
Remember, TypeScript is not about writing more code – it's about writing better, more reliable code that scales with your application.`,author:"Rohit Soni",publishedAt:"2024-01-05",readTime:10,tags:["TypeScript","React","JavaScript","Development"],featured:!1,image:"typescript-react.jpg"},{id:"nodejs-performance-optimization",title:"Node.js Performance Optimization: Tips and Techniques",excerpt:"Learn essential techniques to optimize your Node.js applications for better performance, including profiling, caching strategies, and database optimization.",content:`# Node.js Performance Optimization: Tips and Techniques\r
\r
Performance is crucial for any Node.js application, especially as your user base grows. In this comprehensive guide, we'll explore various techniques and strategies to optimize your Node.js applications for better performance, scalability, and user experience.\r
\r
## Understanding Node.js Performance\r
\r
Node.js is built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model. While this architecture provides excellent performance for I/O-intensive applications, there are still many ways to optimize your Node.js applications.\r
\r
## Profiling and Monitoring\r
\r
Before optimizing, you need to identify performance bottlenecks. Here are some tools and techniques for profiling Node.js applications:\r
\r
### 1. Built-in Profiler\r
\r
\`\`\`bash\r
# Run your application with profiling\r
node --prof app.js\r
\r
# Process the profiling data\r
node --prof-process isolate-0x*.log > processed.txt\r
\`\`\`\r
\r
### 2. Using Clinic.js\r
\r
\`\`\`bash\r
npm install -g clinic\r
\r
# Profile your application\r
clinic doctor -- node app.js\r
clinic bubbleprof -- node app.js\r
clinic flame -- node app.js\r
\`\`\`\r
\r
### 3. Application Performance Monitoring\r
\r
\`\`\`javascript\r
// Using New Relic\r
require('newrelic');\r
\r
// Using AppDynamics\r
require('appdynamics').profile({\r
  controllerHostName: 'your-controller',\r
  controllerPort: 443,\r
  accountName: 'your-account',\r
  accountAccessKey: 'your-key',\r
  applicationName: 'your-app'\r
});\r
\`\`\`\r
\r
## Memory Management\r
\r
### 1. Avoiding Memory Leaks\r
\r
\`\`\`javascript\r
// Bad: Global variables that grow indefinitely\r
let cache = {};\r
app.get('/user/:id', (req, res) => {\r
  cache[req.params.id] = userData; // Memory leak!\r
});\r
\r
// Good: Use proper caching with limits\r
const LRU = require('lru-cache');\r
const cache = new LRU({ max: 1000, ttl: 1000 * 60 * 10 });\r
\r
app.get('/user/:id', (req, res) => {\r
  cache.set(req.params.id, userData);\r
});\r
\`\`\`\r
\r
### 2. Proper Event Listener Management\r
\r
\`\`\`javascript\r
// Bad: Not removing event listeners\r
function createHandler() {\r
  const handler = () => { /* handle event */ };\r
  eventEmitter.on('data', handler);\r
  // Missing: eventEmitter.removeListener('data', handler);\r
}\r
\r
// Good: Clean up event listeners\r
function createHandler() {\r
  const handler = () => { /* handle event */ };\r
  eventEmitter.on('data', handler);\r
  \r
  return () => {\r
    eventEmitter.removeListener('data', handler);\r
  };\r
}\r
\`\`\`\r
\r
### 3. Stream Processing for Large Data\r
\r
\`\`\`javascript\r
const fs = require('fs');\r
const csv = require('csv-parser');\r
\r
// Bad: Loading entire file into memory\r
fs.readFile('large-file.csv', (err, data) => {\r
  const records = data.toString().split('\\n');\r
  // Process all records at once\r
});\r
\r
// Good: Stream processing\r
fs.createReadStream('large-file.csv')\r
  .pipe(csv())\r
  .on('data', (row) => {\r
    // Process one row at a time\r
    processRow(row);\r
  })\r
  .on('end', () => {\r
    console.log('CSV file successfully processed');\r
  });\r
\`\`\`\r
\r
## Database Optimization\r
\r
### 1. Connection Pooling\r
\r
\`\`\`javascript\r
// MongoDB with connection pooling\r
const { MongoClient } = require('mongodb');\r
\r
const client = new MongoClient(uri, {\r
  maxPoolSize: 10,\r
  serverSelectionTimeoutMS: 5000,\r
  socketTimeoutMS: 45000,\r
});\r
\r
// PostgreSQL with connection pooling\r
const { Pool } = require('pg');\r
const pool = new Pool({\r
  user: 'username',\r
  host: 'localhost',\r
  database: 'mydb',\r
  password: 'password',\r
  port: 5432,\r
  max: 20, // Maximum number of connections\r
  idleTimeoutMillis: 30000,\r
  connectionTimeoutMillis: 2000,\r
});\r
\`\`\`\r
\r
### 2. Query Optimization\r
\r
\`\`\`javascript\r
// Bad: N+1 query problem\r
async function getPostsWithAuthors() {\r
  const posts = await Post.find();\r
  for (let post of posts) {\r
    post.author = await User.findById(post.authorId);\r
  }\r
  return posts;\r
}\r
\r
// Good: Use joins or populate\r
async function getPostsWithAuthors() {\r
  return await Post.find().populate('author');\r
}\r
\r
// Or with raw SQL\r
async function getPostsWithAuthors() {\r
  const query = \`\r
    SELECT p.*, u.name as author_name \r
    FROM posts p \r
    JOIN users u ON p.author_id = u.id\r
  \`;\r
  return await db.query(query);\r
}\r
\`\`\`\r
\r
### 3. Indexing\r
\r
\`\`\`javascript\r
// MongoDB indexing\r
db.users.createIndex({ email: 1 });\r
db.posts.createIndex({ authorId: 1, createdAt: -1 });\r
\r
// Compound index for complex queries\r
db.products.createIndex({ \r
  category: 1, \r
  price: -1, \r
  rating: -1 \r
});\r
\`\`\`\r
\r
## Caching Strategies\r
\r
### 1. In-Memory Caching\r
\r
\`\`\`javascript\r
const NodeCache = require('node-cache');\r
const cache = new NodeCache({ stdTTL: 600 }); // 10 minutes TTL\r
\r
app.get('/api/users/:id', async (req, res) => {\r
  const userId = req.params.id;\r
  const cacheKey = \`user_\${userId}\`;\r
  \r
  // Check cache first\r
  let user = cache.get(cacheKey);\r
  \r
  if (!user) {\r
    // Fetch from database\r
    user = await User.findById(userId);\r
    \r
    // Store in cache\r
    cache.set(cacheKey, user);\r
  }\r
  \r
  res.json(user);\r
});\r
\`\`\`\r
\r
### 2. Redis Caching\r
\r
\`\`\`javascript\r
const redis = require('redis');\r
const client = redis.createClient();\r
\r
async function getCachedData(key) {\r
  try {\r
    const cached = await client.get(key);\r
    return cached ? JSON.parse(cached) : null;\r
  } catch (error) {\r
    console.error('Cache error:', error);\r
    return null;\r
  }\r
}\r
\r
async function setCachedData(key, data, ttl = 3600) {\r
  try {\r
    await client.setex(key, ttl, JSON.stringify(data));\r
  } catch (error) {\r
    console.error('Cache error:', error);\r
  }\r
}\r
\r
app.get('/api/products', async (req, res) => {\r
  const cacheKey = 'products_list';\r
  \r
  let products = await getCachedData(cacheKey);\r
  \r
  if (!products) {\r
    products = await Product.find();\r
    await setCachedData(cacheKey, products, 1800); // 30 minutes\r
  }\r
  \r
  res.json(products);\r
});\r
\`\`\`\r
\r
### 3. HTTP Caching\r
\r
\`\`\`javascript\r
const express = require('express');\r
const app = express();\r
\r
// Cache static assets\r
app.use('/static', express.static('public', {\r
  maxAge: '1d', // Cache for 1 day\r
  etag: true\r
}));\r
\r
// Cache API responses\r
app.get('/api/config', (req, res) => {\r
  res.set('Cache-Control', 'public, max-age=3600'); // 1 hour\r
  res.json(config);\r
});\r
\r
// Conditional requests\r
app.get('/api/data', (req, res) => {\r
  const etag = generateETag(data);\r
  \r
  if (req.headers['if-none-match'] === etag) {\r
    return res.status(304).end();\r
  }\r
  \r
  res.set('ETag', etag);\r
  res.json(data);\r
});\r
\`\`\`\r
\r
## Asynchronous Programming Best Practices\r
\r
### 1. Avoid Blocking the Event Loop\r
\r
\`\`\`javascript\r
// Bad: Blocking operation\r
function heavyComputation() {\r
  let result = 0;\r
  for (let i = 0; i < 10000000; i++) {\r
    result += Math.random();\r
  }\r
  return result;\r
}\r
\r
app.get('/compute', (req, res) => {\r
  const result = heavyComputation(); // Blocks event loop\r
  res.json({ result });\r
});\r
\r
// Good: Use worker threads or break into chunks\r
const { Worker, isMainThread, parentPort } = require('worker_threads');\r
\r
if (isMainThread) {\r
  app.get('/compute', (req, res) => {\r
    const worker = new Worker(__filename);\r
    worker.postMessage('start');\r
    worker.on('message', (result) => {\r
      res.json({ result });\r
    });\r
  });\r
} else {\r
  parentPort.on('message', () => {\r
    const result = heavyComputation();\r
    parentPort.postMessage(result);\r
  });\r
}\r
\`\`\`\r
\r
### 2. Proper Error Handling\r
\r
\`\`\`javascript\r
// Bad: Unhandled promise rejection\r
app.get('/user/:id', (req, res) => {\r
  User.findById(req.params.id)\r
    .then(user => res.json(user));\r
  // Missing .catch()\r
});\r
\r
// Good: Proper error handling\r
app.get('/user/:id', async (req, res) => {\r
  try {\r
    const user = await User.findById(req.params.id);\r
    if (!user) {\r
      return res.status(404).json({ error: 'User not found' });\r
    }\r
    res.json(user);\r
  } catch (error) {\r
    console.error('Error fetching user:', error);\r
    res.status(500).json({ error: 'Internal server error' });\r
  }\r
});\r
\`\`\`\r
\r
### 3. Concurrent Operations\r
\r
\`\`\`javascript\r
// Bad: Sequential operations\r
async function fetchUserData(userId) {\r
  const user = await User.findById(userId);\r
  const posts = await Post.find({ authorId: userId });\r
  const comments = await Comment.find({ authorId: userId });\r
  \r
  return { user, posts, comments };\r
}\r
\r
// Good: Concurrent operations\r
async function fetchUserData(userId) {\r
  const [user, posts, comments] = await Promise.all([\r
    User.findById(userId),\r
    Post.find({ authorId: userId }),\r
    Comment.find({ authorId: userId })\r
  ]);\r
  \r
  return { user, posts, comments };\r
}\r
\`\`\`\r
\r
## HTTP Optimization\r
\r
### 1. Compression\r
\r
\`\`\`javascript\r
const compression = require('compression');\r
\r
app.use(compression({\r
  level: 6,\r
  threshold: 1024,\r
  filter: (req, res) => {\r
    if (req.headers['x-no-compression']) {\r
      return false;\r
    }\r
    return compression.filter(req, res);\r
  }\r
}));\r
\`\`\`\r
\r
### 2. Request Rate Limiting\r
\r
\`\`\`javascript\r
const rateLimit = require('express-rate-limit');\r
\r
const limiter = rateLimit({\r
  windowMs: 15 * 60 * 1000, // 15 minutes\r
  max: 100, // Limit each IP to 100 requests per windowMs\r
  message: 'Too many requests from this IP',\r
  standardHeaders: true,\r
  legacyHeaders: false,\r
});\r
\r
app.use('/api/', limiter);\r
\`\`\`\r
\r
### 3. Keep-Alive Connections\r
\r
\`\`\`javascript\r
const http = require('http');\r
\r
const server = http.createServer(app);\r
\r
// Enable keep-alive\r
server.keepAliveTimeout = 65000;\r
server.headersTimeout = 66000;\r
\r
// For outgoing requests\r
const agent = new http.Agent({\r
  keepAlive: true,\r
  keepAliveMsecs: 1000,\r
  maxSockets: 50,\r
  maxFreeSockets: 10\r
});\r
\r
const options = {\r
  hostname: 'api.example.com',\r
  port: 80,\r
  path: '/data',\r
  agent: agent\r
};\r
\`\`\`\r
\r
## Production Optimizations\r
\r
### 1. Clustering\r
\r
\`\`\`javascript\r
const cluster = require('cluster');\r
const numCPUs = require('os').cpus().length;\r
\r
if (cluster.isMaster) {\r
  console.log(\`Master \${process.pid} is running\`);\r
\r
  // Fork workers\r
  for (let i = 0; i < numCPUs; i++) {\r
    cluster.fork();\r
  }\r
\r
  cluster.on('exit', (worker, code, signal) => {\r
    console.log(\`Worker \${worker.process.pid} died\`);\r
    cluster.fork(); // Restart worker\r
  });\r
} else {\r
  // Workers can share any TCP port\r
  app.listen(3000, () => {\r
    console.log(\`Worker \${process.pid} started\`);\r
  });\r
}\r
\`\`\`\r
\r
### 2. Process Management with PM2\r
\r
\`\`\`javascript\r
// ecosystem.config.js\r
module.exports = {\r
  apps: [{\r
    name: 'my-app',\r
    script: 'app.js',\r
    instances: 'max',\r
    exec_mode: 'cluster',\r
    env: {\r
      NODE_ENV: 'production',\r
      PORT: 3000\r
    },\r
    error_file: './logs/err.log',\r
    out_file: './logs/out.log',\r
    log_file: './logs/combined.log',\r
    time: true\r
  }]\r
};\r
\`\`\`\r
\r
### 3. Environment Variables\r
\r
\`\`\`javascript\r
// Use environment variables for configuration\r
const config = {\r
  port: process.env.PORT || 3000,\r
  dbUrl: process.env.DATABASE_URL,\r
  redisUrl: process.env.REDIS_URL,\r
  nodeEnv: process.env.NODE_ENV || 'development',\r
  logLevel: process.env.LOG_LEVEL || 'info'\r
};\r
\r
// Validate required environment variables\r
const requiredEnvVars = ['DATABASE_URL', 'REDIS_URL'];\r
requiredEnvVars.forEach(envVar => {\r
  if (!process.env[envVar]) {\r
    console.error(\`Missing required environment variable: \${envVar}\`);\r
    process.exit(1);\r
  }\r
});\r
\`\`\`\r
\r
## Monitoring and Alerting\r
\r
### 1. Health Checks\r
\r
\`\`\`javascript\r
app.get('/health', async (req, res) => {\r
  const health = {\r
    status: 'OK',\r
    timestamp: new Date().toISOString(),\r
    uptime: process.uptime(),\r
    memory: process.memoryUsage(),\r
    version: process.version\r
  };\r
\r
  try {\r
    // Check database connection\r
    await db.ping();\r
    health.database = 'connected';\r
  } catch (error) {\r
    health.database = 'disconnected';\r
    health.status = 'ERROR';\r
  }\r
\r
  try {\r
    // Check Redis connection\r
    await redis.ping();\r
    health.redis = 'connected';\r
  } catch (error) {\r
    health.redis = 'disconnected';\r
    health.status = 'ERROR';\r
  }\r
\r
  const statusCode = health.status === 'OK' ? 200 : 503;\r
  res.status(statusCode).json(health);\r
});\r
\`\`\`\r
\r
### 2. Performance Metrics\r
\r
\`\`\`javascript\r
const promClient = require('prom-client');\r
\r
// Create metrics\r
const httpRequestDuration = new promClient.Histogram({\r
  name: 'http_request_duration_seconds',\r
  help: 'Duration of HTTP requests in seconds',\r
  labelNames: ['method', 'route', 'status']\r
});\r
\r
const httpRequestsTotal = new promClient.Counter({\r
  name: 'http_requests_total',\r
  help: 'Total number of HTTP requests',\r
  labelNames: ['method', 'route', 'status']\r
});\r
\r
// Middleware to collect metrics\r
app.use((req, res, next) => {\r
  const start = Date.now();\r
  \r
  res.on('finish', () => {\r
    const duration = (Date.now() - start) / 1000;\r
    const labels = {\r
      method: req.method,\r
      route: req.route?.path || req.path,\r
      status: res.statusCode\r
    };\r
    \r
    httpRequestDuration.observe(labels, duration);\r
    httpRequestsTotal.inc(labels);\r
  });\r
  \r
  next();\r
});\r
\r
// Metrics endpoint\r
app.get('/metrics', (req, res) => {\r
  res.set('Content-Type', promClient.register.contentType);\r
  res.end(promClient.register.metrics());\r
});\r
\`\`\`\r
\r
## Conclusion\r
\r
Optimizing Node.js applications requires a holistic approach that includes profiling, memory management, database optimization, caching, and proper deployment strategies. Start by identifying bottlenecks through profiling, then apply the appropriate optimization techniques.\r
\r
Remember that premature optimization can be counterproductive. Focus on measuring performance, identifying real bottlenecks, and then applying targeted optimizations. Regular monitoring and performance testing should be part of your development workflow to ensure your applications continue to perform well as they scale.\r
\r
The key to successful Node.js performance optimization is understanding your application's specific requirements and bottlenecks, then applying the right combination of these techniques to achieve optimal performance.`,author:"Rohit Soni",publishedAt:"2023-12-28",readTime:15,tags:["Node.js","Performance","Optimization","Backend"],featured:!1,image:"nodejs-performance.jpg"}];function c(){return m}function R(r){return m.find(n=>n.id===r)||null}function U(){return c()}function A(r){return R(r)||void 0}function D(){return c().filter(n=>n.featured)}function I(r){return c().filter(e=>e.tags.includes(r))}function M(r,n=3){return c().filter(o=>o.id!==r.id&&o.tags.some(i=>r.tags.includes(i))).sort((o,i)=>{const d=o.tags.filter(l=>r.tags.includes(l)).length,u=i.tags.filter(l=>r.tags.includes(l)).length;return d!==u?u-d:new Date(i.publishedAt).getTime()-new Date(o.publishedAt).getTime()}).slice(0,n)}function B(r){return new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}export{E as A,N as B,v as C,x as a,b,P as c,q as d,S as e,B as f,D as g,C as h,I as i,U as j,A as k,M as l};
