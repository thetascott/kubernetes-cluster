# Options Pricing & Volatility Analysis with Kubernetes 

This project sets up a home lab environment for options pricing and volatility analysis, leveraging Kubernetes for scalability and monitoring tools for system observability.

**Technology Stack**

This project utilizes the following tools and services:
- Minikube – Local Kubernetes cluster for development and testing
- CloudNativePG – PostgreSQL operator for database management
- Helm – Kubernetes package manager for deploying and managing applications
- Prometheus – Metrics collection and alerting system
- Grafana – Data visualization and monitoring dashboard

## Deployment Overview
This Kubernetes cluster runs the following components:

✅ Node.js Pods – Handle options pricing and volatility analysis
✅ PostgreSQL Database – Managed by CloudNativePG for data persistence
✅ Monitoring Stack – Prometheus collects metrics and triggers alerts, while Grafana visualizes system performance  
<img width="1116" alt="Infrastructure" src="https://github.com/user-attachments/assets/6e36210f-56e2-48bb-930b-5a4557ce4be5" />

## Prometheus Alerts
<img width="1408" alt="Screenshot 2025-03-08 at 8 06 09 PM" src="https://github.com/user-attachments/assets/d4978344-d746-448e-a5c3-f9834a3ad2fa" />

## Grafana Dashboard
<img width="1607" alt="Screenshot 2025-03-08 at 8 22 59 PM" src="https://github.com/user-attachments/assets/bf2cd02f-2b91-44de-a718-f769f0372897" />
