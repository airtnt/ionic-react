import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Post from "../pages/Post";
import UserPosts from "../pages/user/Posts";
import UserProfile from "../pages/user/Profile";

import { planet, chatbubble, addCircle, bookmarks, person } from "ionicons/icons";

export default [
  {
    label: 'Home',
    name: 'home',
    path: '/home',
    component: Home,
    icon: planet,
  },
  {
    label: 'Chat',
    name: 'chat',
    path: '/chat',
    component: Chat,
    icon: chatbubble,
  },
  {
    label: 'Post',
    name: 'post-create',
    path: '/posts/create',
    component: Post,
    icon: addCircle,
  },
  {
    label: 'My Posts',
    name: 'user-posts',
    path: '/user/posts',
    component: UserPosts,
    icon: bookmarks,
  },
  {
    label: 'Profile',
    name: 'user-profile',
    path: '/user/profile',
    component: UserProfile,
    icon: person,
  },
];