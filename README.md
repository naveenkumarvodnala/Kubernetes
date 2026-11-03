# Node.js Application Deployment on Kubernetes & OpenShift

A hands-on DevOps project demonstrating containerization and deployment of a Node.js application on OpenShift, integration with a MySQL database, and application monitoring using Prometheus.

## Project Overview

This project demonstrates how to deploy a containerized Node.js application in a Kubernetes/OpenShift environment.

The application runs inside a container and communicates with a MySQL database. Kubernetes/OpenShift manifests manage application deployment, networking, database configuration, and persistent storage.

A Prometheus ServiceMonitor is configured to support application metrics collection.

## Architecture

```text
                 Developer
                     |
                     v
               Dockerfile
                     |
                     v
              Node.js App
                     |
                     v
              OpenShift Pod
                     |
              Application Service
                     |
                     v
                 MySQL
                     |
              Persistent Storage

       Application Metrics
                     |
                     v
               ServiceMonitor
                     |
                     v
                Prometheus
                     |
                     v
                  Grafana
```

## Technologies Used

| Category | Technologies |
|---|---|
| Application | Node.js |
| Containerization | Docker |
| Container Orchestration | Kubernetes |
| Container Platform | Red Hat OpenShift |
| Database | MySQL |
| Monitoring | Prometheus, ServiceMonitor |
| Visualization | Grafana |
| CLI Tools | oc, kubectl |

## Project Structure

```text
openShift/
│
├── project/
│   └── k8s/
│       ├── app-deploy.yaml
│       ├── app-service.yaml
│       ├── mysql-configMap.yaml
│       ├── mysql-deploy.yaml
│       ├── mysql-pvc.yaml
│       ├── mysql-secret.yaml
│       ├── mysql-service.yaml
│       └── service-monitor.yaml
│
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

## Implementation

### 1. Containerizing the Node.js Application

- Created a Dockerfile to package the Node.js application.
- Defined the application runtime and dependencies.
- Built a Docker image for deployment.

### 2. Deploying the Application on OpenShift

- Created Kubernetes deployment manifests.
- Deployed the Node.js application using `app-deploy.yaml`.
- Configured application networking through `app-service.yaml`.
- Managed the application inside an OpenShift project namespace.

### 3. MySQL Database Integration

- Created a MySQL deployment using `mysql-deploy.yaml`.
- Configured database settings using ConfigMap and Secret resources.
- Created a PersistentVolumeClaim for database storage.
- Exposed MySQL internally through a Kubernetes Service.
- Configured the Node.js application to communicate with MySQL.

### 4. Application Monitoring

- Configured application metrics collection.
- Created a ServiceMonitor resource named `app-monitor`.
- Integrated the application with the Prometheus monitoring setup.
- Used Grafana to visualize monitoring metrics in the OpenShift environment.

## Deployment Commands

Log in to your OpenShift cluster:

```bash
oc login <OPENSHIFT_API_URL>
```

Select your project:

```bash
oc project <PROJECT_NAME>
```

Apply the application and database manifests:

```bash
oc apply -f project/k8s/
```

Check deployed resources:

```bash
oc get all
```

Check running pods:

```bash
oc get pods
```

Check services:

```bash
oc get services
```

Check persistent volume claims:

```bash
oc get pvc
```

Check the ServiceMonitor:

```bash
oc get servicemonitor
```

View application logs:

```bash
oc logs deployment/app-deploy
```

Inspect a pod:

```bash
oc describe pod <POD_NAME>
```

## Key DevOps Concepts Demonstrated

- Docker image creation and containerization.
- Kubernetes Deployments and Services.
- OpenShift application deployment.
- ConfigMaps and Secrets management.
- Persistent storage using PVC.
- Node.js and MySQL integration.
- Prometheus ServiceMonitor configuration.
- Application monitoring with Grafana.
- Kubernetes resource management and troubleshooting.

## Project Outcome

Successfully deployed a containerized Node.js application and MySQL database on OpenShift, configured application networking and persistent storage, and integrated application monitoring using Prometheus and Grafana.

## Author

**Naveenkumar Vodnala**

- [LinkedIn](https://www.linkedin.com/in/naveenkumar-vodnala/)
- [GitHub](https://github.com/naveenkumarvodnala)

---

**Project Repository:** [Kubernetes](https://github.com/naveenkumarvodnala/Kubernetes)
