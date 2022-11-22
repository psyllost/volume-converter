FROM nginx:1.17.1-alpine
COPY dist/volume-converter /usr/share/nginx/html
