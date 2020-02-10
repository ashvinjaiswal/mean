# MeanCourse

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.
This application demponstrated how you create the MEAN application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Steps to follow creating through command line

#### Install material
```
ng add @angular/material@7.3.7
```
#### Create module
```
ng generate module app-material
```

#### Create Component
```
ng g c posts/post-create -d
```

#### create header Component
```
ng g c header/header -d
```

#### create list Component
```
ng g c posts/post-list
```

#### Generate model 
```
ng generate interface <name> <type>
ng generate i posts/post model -d
Output: src/app/posts/post.model.ts 
```

#### Generate Service
```
ng generate service <name of service>
ng generate service posts/posts -d
Output: src/app/posts/posts.service.ts 
```

#### Subject In Rxjs
Subjects can multicast. Multicasting basically means that one Observable execution is shared among multiple subscribers.

Subjects are like EventEmitters, they maintain a registry of many listeners

Below is simple example of rxjs subject. We used in our post service for emitting posts data when new post is created.

```
import * as Rx from "rxjs";

const subject = new Rx.Subject();

// subscriber 1
subject.subscribe((data) => {
    console.log(data); // 0.24957144215097515 (random number)
});

// subscriber 2
subject.subscribe((data) => {
    console.log(data); // 0.24957144215097515 (random number)
});

subject.next(Math.random());
```
