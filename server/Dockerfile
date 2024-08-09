# Stage 1: Build the application
FROM node:18 as builder

WORKDIR /build

COPY package*.json .
RUN npm install

COPY src/ src/
COPY public/ public/  
COPY tsconfig.json tsconfig.json

RUN npm run build

# Stage 2: Run the application
FROM node:18 as runner

WORKDIR /app

COPY --from=builder /build/package*.json .
COPY --from=builder /build/node_modules node_modules/
COPY --from=builder /build/dist dist/
COPY --from=builder /build/public public/   

CMD [ "npm", "run", "start" ]
