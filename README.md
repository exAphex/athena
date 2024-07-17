# Project Athena
This is a proof of concept for calling PingOne Protect directly from a backend (nodejs in this case) with an integration of the frontend SDK in Angular.
The frontend will call the PingOne Protect SDK, which will deliver a risk payload and send it to the backend. The backend will call the risk evaluation API of PingOne Protect and proxy the response back to the UI.

# Abstract
While PingOne Protect is embedded into the PingOne Platform and can be integrated into PingOne DaVinci flows like described [here](https://docs.pingidentity.com/r/en-us/pingone/pingone_protect_building_custom_flow_davinci), you can use the product as a standalone solution for evaluating risk in your web application.
This can be done via REST API integration in your backend and later be handled accordingly (block user or add friction to the authentication step).

# Architecture
![Architecture](/assets/architecture.png)

# Functionalities
* Evaluate risk
* Show risk indicators

# Prerequisites
* PingOne Environment with PingOne Protect enabled
* NodeJS 18
* Angular 18

# Setup
The PingOne Protect API is secured by authentication, therefore you will need to create a worker app in the PingOne Admin Interface and store the credentials in the backend. For convenience purposes we will store them in environment variables, you might want to use a secure storage or vault for them in a productive system.

## Create worker app in PingOne
1. Open/Create a PingOne environment.
2. Navigate to Applications -> Applications
3. Create new Application
![WorkerApp_Step1](/assets/Create_Worker_1.png)
4. Set Application Name, select Application Type **Worker** and press Save
![WorkerApp_Step2](/assets/Create_Worker_2.png)
5. Activate Application and open **Grant Roles**
![WorkerApp_Step3](/assets/Create_Worker_3.png)
6. Set **Environment Admin** and **Identity Admin** Role. Attach only your current environment to the roles.
![WorkerApp_Step4](/assets/Create_Worker_4.png)


7. Switch to **Overview** Tab to see details like EnviromentID,ClientID and ClientSecret
![WorkerApp_Step6](/assets/Create_Worker_6.png)

## Setup repository
You will need to clone the repository and install the node dependencies.

```
git clone https://github.com/exAphex/athena.git
cd athena
npm install
```

Now set up the credentials from the worker app in the environment file. We provide a template for in in the **.env.example** file.

```
cp .env.example .env
```

Open the **.env** file in you code editor and add your individual worker app credentials into it.

Example:
```
PORT=3000
envId=7f40730h-2c52-4986-b64f-f89bdc9a87g1
clientId=54923baa-82fh-549e-ac1e-a03642748504
clientSecret=sIHJurYHEtrgK3cO9Uh70mxv8QvI9hBdWRcJz9MOpmGvXVHM239HvcZn
```

## Start application
The launch configuration is stored in the package.json file. It will launch a node instance for the backend and a second ng instance for the angular frontend.

```
npm start
```

The frontend will run at port 4200, you can call it with your browser: **http://localhost:4200**



