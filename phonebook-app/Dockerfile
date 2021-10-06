#First command to build a docker image
#docker build -t phone-app .

#Second command to run the docker image
#docker run –-rm -it -p 8080:8080 phone-app

FROM openjdk:8-jdk-alpine
COPY ./target/phonebook-app-0.1-SNAPSHOT.jar phonebook-app-0.1-SNAPSHOT.jar
COPY ./target/classes/sample.db sample.db
ENTRYPOINT ["java","-jar","phonebook-app-0.1-SNAPSHOT.jar"]
