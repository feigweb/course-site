### API 路由

授权

#### /auth/signin: 登录

Request:

```json
{    phoneNumber: string,    password: string}
```

Response:

```json
{
	ok: boolean,
	token: string
}
```

#### /auth/signup: 注册


Request:

```json
{    phoneNumber: string }
```

Response:

```json
{
	ok: boolean,
	id: string
}
```

#### /auth/signup/v-code/:id 提交注册验证码


Request:

```json
{  
	phoneNumber: string, 
	code: string
}
```

Response:

```json
{
	ok: boolean,
	token: string
}
```


#### /auth/forgot-password: 忘记（重置）密码


Request:

```json
{    phoneNumber: string }
```

Response:

```json
{
	ok: boolean,
	id: string
}
```


#### /auth/forgot-password/v-code/:id 忘记（重置）密码

Request:

```json
{    phoneNumber: string, code: string, password: string }
```

Response:

```json
{
	ok: boolean,
	token: string
}
```


#### /auth/delete: 删除账户


Request:

```json
{    phoneNumber: string, password: string}
```

Response:

```json
{
	ok: boolean
}
```
