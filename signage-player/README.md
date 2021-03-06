# Telepark Client

## Overview

This ReactJS app runs on digital signage players in SSB parking lot at the University of Alabama in Huntsville (UAH). This repo contains the source code for displaying custom reserved parking messages on the displays. See [telepark-admin](#) for the scheduling interface for this system.

Telepark Client was built using ReactJS and [Firebase](firebase.google.com). Firebase provides the database (Cloud Firestore) and hosting. The Firebase SDK is used within this app to read from the reservations database. It only has read permission and cannot change any of the data.

### URL Scheme

`https://telepark-3df33.web.app?id=playerid`

where `playerid` is the ID for the parking space (see map below). These IDs can be expanded as needed without modifying this project.

### Map of Space IDs
```
   to Sparkman Drive
_____     ___     _____
|[8L]             [8R]|
|[7L]             [7R]|
|[6L]             [6R]|
|[5L]             [5R]|
|[4L]             [4R]|
|[3L]             [3R]|
|[2L]             [2R]|
|[1L]             [1R]|

|-------- SSB --------|
```

### Compatible Devices

This app has been tested on Raspberry Pi (chromium --kiosk), BrightSign XD230, BrightSign HD222, and BrightSign HD223. It should work on most devices with modern web browsers. A polyfill was added to support BrightSign players, as they were not familiar with new JS syntax.
