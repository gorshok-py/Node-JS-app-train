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
                stage('Build Container') {
                agent {
                docker {
                    image 'nodejsapp'
                    args '-p 5000:5000'
                }
            }
            steps {
                sh "node --version"
            }
        }
     }
         post {
            always {
                step([$class: "WsCleanup"])
                cleanWs()
        }
    }

}
