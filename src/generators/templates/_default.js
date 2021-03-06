module.exports = JSON.stringify({
    "serverName" : "CompoSR",
    "bodylimit" : "50mb",
    "port": 3000,
    
    "rabbitmq": {
        "host": "",
        "port": "",
        "username": "",
        "password": "",
        "reconntimeout": 10000,
        "event": "class com.bq.corbel.event.ResourceEvent",
        "forceconnect": false,
        "heartbeat" : 30
    },

    "bootstrap.retrytimeout": 10000,

    "services": {
        "timeout": 5000,
        "retries": 30,
        "time": 1000
    },

    "corbel": {
        "credentials": {
            "clientId": "",
            "clientSecret": "",
            "scopes": "composr:comp:base"
        },
        "options": {
            "urlBase": ""
        }
    },

    "redis": {
        "host": "localhost",
        "port": 6379,
        "user": "",
        "password": ""
    },

    "bunyan": {
        "log" : true,
        "syslog" : true,
        "stdout": false,
        "streamServer": false
    },

    "composrLog": {
        "accessLog" : true,
        "accessLogFile" : "logs/access.log",
        "logLevel": "error",
        "logFile": "logs/composr.log",
        "syslog" : false
    },

    "newrelic": {
        "enabled": false,
        "name": "",
        "key": ""
    },

    "keymetrics": true,

    "execution": {
        "vm": false,
        "gc": false,
        "timeout": 40000,
        "local": true
    }
}, null, 2)
