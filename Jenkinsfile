pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('parallel exec') {
            parallel {
                stage('Run tests in parallel A') {
                    steps {
                        sh 'npx cypress run --record --key 78a51fe1-0a00-4580-b645-e9314d39e035 --parallel'
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        sh 'npx cypress run --record --key 78a51fe1-0a00-4580-b645-e9314d39e035 --parallel'
                    }
                }
            }
        }
    }
}