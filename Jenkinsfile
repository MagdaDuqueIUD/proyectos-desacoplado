pipeline {
    agent any

    stages {
        stage('Clonar el Repositorio'){
            steps {
                git branch: 'main', url: 'https://github.com/MagdaDuqueIUD/proyectos-desacoplado.git'
            }
        }
        stage('Construir imagen de Docker'){
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGODB_URI', variable: 'MONGODB_URI')
                    ]) {
                        docker.build('proyectos-balanceo:v1', '--build-arg MONGODB_URI=${MONGODB_URI} .')
                    }
                }
            }
        }
        stage('Desplegar contenedores Docker'){
            steps {
                script {
                    withCredentials([
                            string(credentialsId: 'MONGODB_URI', variable: 'MONGODB_URI')
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