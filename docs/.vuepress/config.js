module.exports = {
    theme: 'reco',
    title: "TDSCore",
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }],
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'mask-icon', href: '/icon-154x154.svg', color: '#92CEF7' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icon-512x512.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }]
    ],
    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "文档有更新",
                buttonText: "立刻更新！"
            }
        }
    },

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
        valineConfig: {
            appId: 'qaSn1lMJlYsX4v3eb9u8lFD4-gzGzoHsz',// your appId
            appKey: 't6NmGFxNT0mbeUHwVRTK0nKc', // your appKey
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
            { text: '研究', link: '/study/paper/', icon: "reco-document" },
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
            "/study": [
                {
                    collapsable: false,
                    title: `论文`,   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/study/paper/',
                    ]
                },
                {
                    collapsable: false,
                    title: `参考`,   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/study/ref/',
                        '/study/ref-material/'
                    ]
                },
            ],
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
                        '/docs/infrastructure/dsHashCode/',
                        '/docs/infrastructure/dsEquals/',
                        '/docs/infrastructure/DSObject/',
                        '/docs/infrastructure/DSArray/',
                        '/docs/infrastructure/IArrayLike/',
                        '/docs/infrastructure/DSNumber/',
                        '/docs/infrastructure/DSEvent/',
                        '/docs/infrastructure/ActionFunc/',
                        '/docs/infrastructure/Lazy/',
                    ]
                },
                {
                    title: '数据结构',   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1

                    children: [
                        {
                            collapsable: false,
                            title: "接口定义",
                            children: [
                                '/docs/data-structure/interfaces/ICollection/',
                                '/docs/data-structure/interfaces/IList/',
                            ]
                        },
                        {
                            collapsable: false,
                            title: "线性结构",
                            children: [
                                '/docs/data-structure/linear/ArrayList/',
                                '/docs/data-structure/linear/LinkedList/',
                                '/docs/data-structure/linear/GList/',
                                '/docs/data-structure/linear/BitSpan/',
                                '/docs/data-structure/linear/UngrowableArrayList/',
                            ]
                        },
                        {
                            collapsable: false,
                            title: "非线性结构",
                            children: [
                                '/docs/data-structure/map/HashMap/',
                                '/docs/data-structure/tree/',
                                '/docs/data-structure/graph/',
                            ]
                        },
                        {
                            collapsable: false,
                            title: "迭代",
                            children: [
                                '/docs/data-structure/iterating/',
                            ]
                        },
                    ]
                },
                {
                    title: '算法',   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [

                        '/docs/algorithms/',
                        '/docs/algorithms/sort/',
                        {
                            collapsable: false,
                            title: "树相关算法",
                            children: [
                                '/docs/algorithms/tree/basic/',
                                '/docs/algorithms/tree/avltree/',
                                '/docs/algorithms/tree/rbtree/',
                            ]
                        },
                        {
                            collapsable: false,
                            title: "图",
                            children: [
                                '/docs/algorithms/graph/travel/',
                                '/docs/algorithms/graph/minimum-spanning-tree/',
                                '/docs/algorithms/graph/shortest-path/',
                            ]
                        },
                        {
                            collapsable: false,
                            title: "特殊问题",
                            children: [
                                '/docs/algorithms/special/',
                            ]
                        }
                    ]
                },
                {
                    title: '数学',   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/docs/mathematics/',
                        '/docs/mathematics/fn/',
                        '/docs/mathematics/martix/',
                    ]
                }
            ]
        }
    }
}