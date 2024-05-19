import Index from '../pages/Index/Index'
import Profile from '../pages/Profile/Profile'

export const routes = [
	{ path: '/MusicStore-React/', element: <Index />, exact: true },
	{ path: '/MusicStore-React/profile', element: <Profile />, exact: true },
]
