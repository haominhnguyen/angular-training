

# Enrich Skills Angular

This project was generated using [Nx](https://nx.dev).

Build command

```
npm install
```

Start Frontend code

```
npm run start:fe
```

Angular app start at here: http://localhost:4200

Start Backend code

```
npm run start:be
```

Swagger Site: http://localhost:3333/apidocs

Backend URI: http://localhost:3333/api


## Tạo một Angular project sử dụng Nx CLI (https://nx.dev/latest/angular/getting-started/nx-setup)
	
  Tham khảo mẫu project sau đây (https://github.com/UITrainingTeam/enrich-skills-angular)
## Yêu cầu của mock project:

### Sử dụng angular material để develop các UI component (https://material.angular.io/)
1. Add thành công angular material vào project
2. Sử dụng các component của material cho project (button, form, field...)
### Chức năng chính của project
	
  1. Login function
        * Sử dụng CanActivate(https://angular.io/api/router/CanActivate) cho phép khi chưa đăng nhập user chỉ có thể vào đc trang landing page.
		* Thông tin đăng nhập cần có username, password.
		* Khi đăng nhập thành công thì lưu token trong angular service hoặc dùng NgRx để quản lý state.
		* Dùng token đó để call api user profile trong yêu cầu tiếp theo.
	
  2. Hiển thị thông tin user sau khi login thành công
		* Sử dụng HttpModule để lấy danh sách user từ phía backend API đã có sẵn trong source.
		* Hiển thị danh sách user trong hệ thống sử dụng table material hỗ trợ search và sorting.
