module.exports = {
    theme: 'reco',
    title: "TDSCore",
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
        noFoundPageByTencent: false,
        evergreen: false,
        // logo: 'icon.png',
        nav: [
            {
                text: '主页',
                icon: "reco-home",
                link: '/'
            },
            { text: '下载', link: '/download/', icon: "reco-other" },
            { text: '开发文档', link: '/docs/', icon: "reco-document" },
            { text: '论文', link: '/paper/', icon: "reco-document" },
            {
                text: '关于',
                icon: "reco-eye",
                items: [
                    { text: '关于', link: '/about/' },
                    { text: '无偿捐赠', link: '/donate/' },
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
                    title: '入门手册',   // 必要的
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/docs/',
                        // '/dev/docs/beginner/',
                        // '/dev/docs/beginner/project-structure/',
                        // '/dev/docs/beginner/install-dev-env/',
                        // '/dev/docs/beginner/getting-started/',
                        // '/dev/docs/beginner/extinfo/',
                        // '/dev/docs/beginner/awesome-api/',
                        // '/dev/docs/beginner/with-device/',
                        // '/dev/docs/beginner/leaf-extension/',
                        // '/dev/docs/beginner/leaf-ui/',
                        // '/dev/docs/beginner/example-extensions/'
                    ]
                }
            ]
        }
    }
}