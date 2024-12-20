# Указываем базовый образ Node.js
FROM node:alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файл package.json
COPY package.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код приложения
COPY src ./src

# Указываем порт, который будет слушать контейнер
EXPOSE 3000

# Команда запуска приложения
CMD ["node", "src/app.js"]

