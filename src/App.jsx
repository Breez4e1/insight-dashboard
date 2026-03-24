import { RouterProvider } from 'react-router-dom'
import router from './router'

// App 是整个应用的根组件，只负责挂载路由
function App() {
  return <RouterProvider router={router} />
}

export default App
