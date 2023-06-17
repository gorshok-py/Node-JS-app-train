pipeline {
        options {
        buildDiscarder(
            logRotator(
                artifactDaysToKeepStr: "",
                artifactNumToKeepStr: "",
                daysToKeepStr: "",
                numToKeepStr: "10"
            )
        )
    }
    
    agent any
    
    stages {
        stage('Get NodeJs App') {
            steps {
                git branch: 'main', url: 'https://github.com/gorshok-py/Node-JS-app-train.git'
                  }
                                }   
        stage('Preparation build image') {
            steps {
            sh 'docker build -t nodejsapp .'
                                }
                                         }
        stage('Docker run Container') {
            steps {
            sh 'docker run -d --name nodejsapplet -p 5001:5000 nodejsapp:latest'
                  }
                                         }
        stage('Test Connection') {
            steps {
            sh 'curl localhost:5001'
                  }
                                         }
    }
            post {
            always {
                sh 'docker stop nodejsapplet'
                sh 'docker container rm nodejsapplet'
                cleanWs()
        }
    }
}
