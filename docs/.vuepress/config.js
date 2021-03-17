module.exports = {
    theme: 'reco',
    title: "TDSCore",
    head: [
        // ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
        // ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
        // ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
        // ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
        // ['script', { src: 'https://embed.runkit.com' }]
    ],
    plugins: [
        // 'demo-block'
    ],
    themeConfig: {
        // 博客配置
        blogConfig: {
            // category: {
            //     location: -1,     // 在导航栏菜单中所占的位置，默认2
            //     text: '文章分区' // 默认文案 “分类”
            // },
            // tag: {
            //     location: 3,     // 在导航栏菜单中所占的位置，默认3
            //     text: 'Tag'      // 默认文案 “标签”
            // }
        },
        logo: '/icon.png',
        noFoundPageByTencent: false,
        evergreen: false,
        // logo: 'icon.png',
        nav: [
            {
                text: '主页',
                icon: "reco-home",
                link: '/'
            },
            { text: '文档', link: '/docs/guide/introduction/', icon: "reco-document" },
            { text: '论文', link: '/paper/', icon: "reco-document" },
            {
                text: '关于',
                icon: "reco-eye",
                items: [
                    { text: '关于', link: '/about/' },
                    // { text: '无偿捐赠', link: '/donate/' },
                ]
            },
            {
                text: '开源',
                icon: 'reco-api',
                items: [
                    { text: '开放源代码', link: '/open-source/', icon: "reco-github" },
                    { text: '开发动态', link: 'https://zsh2401.top/categories/tdscore/' },
                ]
            }
        ],
        sidebar: {
            "/docs": [
                {
                    title: '入门',   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/docs/guide/introduction/',
                        '/docs/guide/quick-start/',
                        '/docs/guide/installation/',
                    ]
                },
                {
                    title: '基建',   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/docs/infrastructure/',
                        '/docs/infrastructure/dsHashCode/',
                    ]
                },
                {
                    title: '数据结构',   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/docs/data-structure/',
                    ]
                },
                {
                    title: '算法',   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/docs/algorithms/',
                    ]
                },
                {
                    title: '数学',   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/docs/mathematics/',
                    ]
                }
            ]
        }
    }
}