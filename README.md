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