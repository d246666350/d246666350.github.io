### Request

- 封装请求引入

```
import service from "@/server/request";

export const getError = (data) =>
  service({
   method: "post",
   data
  });
```

- 处理 Form 传参 引入 qs

```

import qs from "qs";

export const getError = (data) =>
  service({
    method: "post",
    data: qs.stringify(data),
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
```

- Query String Parameters 形式

```
import qs from "qs";

export const getError = (data) =>
  service({
    method: "get",
    url: "/admin/index/getError?"qs.stringify(data),
  });

```
