pipeline {
    agent any

    stages {
        stage('Clonar el Repositorio'){
            steps {
                git branch: 'main', url: 'https://github.com/MagdaDuqueIUD/balanceoproydesacoplado.git'
            }
        }
        stage('Construir imagen de Docker'){
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        docker.build('proyectos-balanceo:v1', '--build-arg MONGO_URI=${MONGO_URI} .')
                    }
                }
            }
        }
        stage('Desplegar contenedores Docker'){
            steps {
                script {
                    withCredentials([
                            string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        sh 'docker-compose up -d'
                    }
                }
            }
        }
    }

    post {
        always {
            emailext (
                subject: "Status del build: ${currentBuild.currentResult}",
                body: "Se ha completado el build. Puede detallar en: ${env.BUILD_URL}",
                to: "maria.duquemr@est.iudigital.edu.co",
                from: "jenkins@iudigital.edu.co"
            )
        }
    }
}