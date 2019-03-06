const DOCS = '/docs/'
var fs = require('fs');

const getFileName = (name) => {
  let arr = []
  fs.readdirSync(`./docs/${name}`).filter(function(file) {
    return (/\.(js|md)$/i).test(file);
  }).map(function(file) {
    s1 = file.substring(0,file.indexOf("."))
    let res= ''
    if(s1 === 'readme' || s1 === 'README'){
      res = DOCS + name + '/'
    }else{
      res = DOCS + name + '/' + s1
    }
    arr.push(res)
  });
  console.log('arr',arr)
  return arr
}

const getNav = (name)=>{
  return DOCS + name + '/'
}
// console.log(getChildrenName('guide'))
// let file = getFileName('guide')
// console.log('file111',file)



const sidebar = {

}
module.exports = {
    base:'/',
    dest:'public', //指定 vuepress build 的输出目录
    title: '前端面试题',
    description: '前端面试题整理',
    // 为每个代码块显示行号
    markdown: {
      lineNumbers: false
    },
    themeConfig: {
        nav: [
          { text: '基础', link: getNav('base'),url: '/base.html' },
          { text: 'guide', link: getNav('guide') },
          { text: 'Blog', link: 'https://shudong.wang/' },
          { text: 'Github', link: 'https://github.com/wsdo/' },
        ],
        // sidebar: 'auto',
        sidebar: [
          {
            title: '基础',
            // collapsable: false,
            children: getFileName('base')
          },
          {
            title: 'guide',
            // collapsable: false,
            children: getFileName('guide')
          },
        ],
        lastUpdated: 'Last Updated',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'wsdo/fefaq',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: '/wsdo/fefaq',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'dev',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
      }
    }
