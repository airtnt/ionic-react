import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Post from "../pages/Post";

import { ellipse, square, triangle } from "ionicons/icons";

export default [
  {
    label: 'Home',
    name: 'home',
    path: '/home',
    component: Home,
    icon: ellipse,
  },
  {
    label: 'Chat',
    name: 'chat',
    path: '/chat',
    component: Chat,
    icon: square,
  },
  {
    label: 'Post',
    name: 'post-create',
    path: '/posts/create',
    component: Post,
    icon: triangle,
  },
];