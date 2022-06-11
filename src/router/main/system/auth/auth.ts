const auth = () => import('@/views/main/system/auth/auth.vue')
export default {
  path: '/auth/toAuthPage',
  name: 'auth',
  component: auth,
  children: []
}
