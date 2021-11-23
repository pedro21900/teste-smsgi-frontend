FROM node AS api-smsgi-backend

RUN mkdir -p ./home/teste-smsgi-frontend

WORKDIR ./home/teste-smsgi-frontend

COPY / .

RUN npm i

#FROM adoptopenjdk/openjdk11:alpine-jre

#COPY --from=api-smsgi-backend /home/teste-smsgi-frontend/target/*.jar api-smsgi-backend-0.0.1-SNAPSHOT.jar

CMD ["npx", "ng", "s"]

