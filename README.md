# gatsby-blog-graphql-wordpress

> Gatsby JS Build PWA Blog With GraphQL And React + WordPress

## 记录

* pages的页面，会自动加载路由
* 前端路由

```js
import { Link } from 'gatsby'
<Link to='/test/'>Link to test</Link>

import { navigate } from "gatsby"
<button onClick={() => navigate("/")}>Navigate to home</button>
```
* CSS Global Styles
  * src/styles/global.css
  * 在/gatsby-browser.js 引入 `import "./src/styles/global.css"`
  * 这样全局就生效了
* Module CSS
  * header.module.css
  * 和 create-react-app 一样
* bootstrap响应式里，不要固定的设置某个主体承载容器的宽高