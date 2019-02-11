import axios from 'axios'

export default {
  getSiteData: () => ({
    meta: {
      title: 'Scrum Rituals Anti-patterns and tips to avoid them by Victor Ribero',
      description: 'Quick explanation of each Scrum Ritual, its most common anti-patterns and tips to avoid them',  
    },
    socials: [
      {
        path: 'https://twitter.com/JS_TUREEY',
        label: '@JS_TUREEY',
        social_media: 'twitter'
      },
      {
        path: 'https://www.linkedin.com/in/victorribero',
        label: '/victorribero',
        social_media: 'linkedin'
      },
      {
        path: 'https://github.com/tureey',
        label: '/tureey',
        social_media: 'github'
      }
    ]
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return [
      {
        path: '/',
        getData: (() => ({
          title: 'Scrum Rituals🧙',
          slogan: 'The most common anti-patterns🙅 and tips to avoid them👨‍🏫',
          callToAction: 'Let\'s start',
        }))
      },
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
}
