
# `Scenario And Vehicle CRUD Application

## About the project

In this project directory, there is an end-to-end CRUD application made with ReactJS. Users can add scenarios and vehicles, and each scenario can have multiple vehicles. Users can read, create, update, and delete scenarios and vehicles. When a scenario is deleted, all vehicles under it will also be deleted.

The application can create, display, update, and delete scenarios and vehicles. A scenario can have multiple vehicles, and vehicles will move when the user clicks a button based on the scenario and vehicle parameters.

On the Home page, users can select the scenarios they have created and start the simulation. When the user clicks the play button, vehicles starts moving based on the direction and speed until the scenario time is over.

The scenario has the following fields:
- Scenario id
- Scenario name
- Time

The Vehicle has the following fields:
- Vehicle id
- Vehicle name
- Initial Position X
- Initial Position Y
- Speed 
- Direction (can have only Towards, Backwards, Upwards, and Downwards).

json-server is used for storing data used.

For animation, I have used the Framer motion library.

## Live project link

[https://scenario-vehicle-debz.netlify.app/](https://64d23326e2bffa0351ee4edb--vechileishwer.netlify.app/)


## Preview

![Screenshot (471)](https://github.com/ishwersharma13/senerio-vechile/assets/103954615/57a5dcd8-50d6-45ec-b80b-abdd7d0d344b)
![Screenshot (472)](https://github.com/ishwersharma13/senerio-vechile/assets/103954615/ea595488-c3c1-4726-b431-180c125c9b1b)
![Screenshot (473)](https://github.com/ishwersharma13/senerio-vechile/assets/103954615/1e5793f4-61ad-4578-82a0-138c053cf482)
![Screenshot (471)](https://github.com/ishwersharma13/senerio-vechile/assets/103954615/70555fb5-888d-4c1b-b53c-7a4f96979a09)

## `Tools Used`

### FRONTEND
- React
- CSS
- Framer motion
### BACKEND
- npm install
- json server
