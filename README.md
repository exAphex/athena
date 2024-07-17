# Project Athena
This is a proof of concept for calling PingOne Protect directly from a backend (nodejs in this case) with an integration of the frontend SDK in Angular.
The frontend will call the PingOne Protect SDK, which will deliver a risk payload and send it to the backend. The backend will call the risk evaluation API of PingOne Protect and proxy the response back to the UI.

# Abstract
While PingOne Protect is embedded into the PingOne Platform and can be integrated into PingOne DaVinci flows like described here, you can use the product as a standalone solution for evaluating risk in your web application.
This can be done via REST API integration in your backend and later be handled accordingly (block user or add friction to the authentication step).

# Architecture


# Setup
The PingOne Protect API is secured by authentication, therefore you will need to create a worker app in the PingOne Admin Interface and store the credentials in the backend. For convenience purposes we will store them in environment variables, you might want to use a secure storage or vault for them in a productive system.

## Create worker app in PingOne
tbd

## Setup repository
tbd

## Start application
tbd

# Functionalities

