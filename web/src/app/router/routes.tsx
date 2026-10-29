import { createBrowserRouter } from 'react-router'
import App from '../layout/App'
import ActivitiesDashboard from '../../features/activities/dashboard/ActivitiesDashboard'
import ActivityForm from '../../features/activities/form/ActivityForm'
import HomePage from '../../features/home/HomePage'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'activities', element: <ActivitiesDashboard /> },
      { path: 'createActivity', element: <ActivityForm /> },
    ],
  },
])
