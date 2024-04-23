## DOT Testing Fullstack
Simple example app create with Laravel and React JS

### Installation
#### 1. Install dependencies laravel and react
command install or update composer
```
composer install
```
command install or update npm
```
npm install
```
#### 2. Clone this repo
```
git clone https://github.com/farhanfatur/dot-testing.git
```

#### 3. Generate Key
```
php artisan key:generate
```
#### 4. Database configuration
copy and paste file ```.env.example``` to ```.env``` then 
configuration those file with your own database
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
#### 5. Migration table and seed data
```
php artisan migrate
```
```
php artisan db:seed
```

#### 6. Running app
Run laravel service
```
php artisan serve
```
Run react service
```
npm run watch
```
