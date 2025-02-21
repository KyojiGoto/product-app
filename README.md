# ProductApp

Welcome to my mock [Uniqlo](https://www.uniqlo.com/ca/en/) store! You will find a selection of 5 different items found in the real store, along with it's name, price, and description in the list view, and an image of the product when on the details page.

## Running the App

To run this project, ensure that [Node.js](https://nodejs.org/en/download) and npm are installed.

Then, download the Angular framework through npm, by following this [guide](https://angular.dev/installation).

The following versions of the above software were used on my machine:

```bash
Angular CLI: 19.1.7
Node: 22.14.0
Package Manager: npm 10.9.2
```

Once these packages are installed, please clone this repository, then run:
```bash
npm install
```
in the project directory, and start the server using:
```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`.

## App Overview

```
PRODUCT-APP
│   README.md
└───src
│   │   
│   └───product
│       │   
│       └───components
│       │   │*.css
│       │   │*.ts
│       │   │*.spec.ts
│       │
│       │services   
│       │interfaces
│       │
│       │...

```

All required files were added by following the above folder structure. Each component can be found within it's own folder, while the services and interfaces are found within the product folder. This ensures that all components that make up the product module of the app are contained in a single folder.

Images were added to the `src/assets` folder.

The rest of the files were boiler-plate files added by running the 
```bash
ng new product-app
``` 
command provided by the Angular ClI.

## App Details

The product interface provides a JSON structure for the product object. 

This is used by the product service to store hardcoded product objects in a list. This list is served to various components through two public methods - one to serve all products, and another to serve a single product identified by id number. The service uses RxJS to simulate async fetch requests.

The product list component is responsible for querying the service to get all products, display its contents through the product card component, and handle routing to the details page.

The product card component provides structure to populate the product object into. It also has an EventEmitter to notify the product list that it should handle routing.

The details page simply renders the product object in more detail. It queries the product service to receive the specific product's information. This product id is retrieved through the active route.
