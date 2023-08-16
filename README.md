# Agrigistics :blossom: :seedling:

### This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Clone

```$xslt
git clone https://github.com/IanvanZyl636/argrigistics.git
cd argrigistics
```

## Libraries

### Production dependencies

<a href="https://github.com/FortAwesome/angular-fontawesome">angular-fontawesome</a> - Official Angular component for Font Awesome 5+ to add any free font awesome icon

### Development and CI/CD dependencies

<a href="https://prettier.io/">prettier</a> - An opinionated code formatter

<a href="https://eslint.org/">eslint</a> - ESLint statically analyzes your code to quickly find problems.

<a href="https://typicode.github.io/husky/#/">husky</a> - Allows to run package scripts when commiting to repo. For this project I use husky to run prettier and eslint when committing the repo

<a href="https://github.com/angular-schule/angular-cli-ghpages">angular-cli-ghpages</a> - Deploy your Angular app to GitHub pages directly from the Angular CLI. (ng deploy)

## Approach

With any new project it takes time to do the initial setup with this project I spent time setting up the CI/CD and material controls.

I did not focus on unit tests because it was not a requirement of the assignment but normally I follow TDD (Test driven development). You will also find in the CI/CD section that I spent time getting the foundation of the pipeline correct to run through all unit tests once the code is committed to the codebase.

Please check the formula one project in my GitHub to see how I would normally approach testing a web project

For this assignment, I spend most of my time to get the design almost identical to the design.

### CI/CD

In the project, I added automatic linting and code formatting each time code is committed to the codebase via Huskey to keep the code for all team members consistent.

I also added a pipeline on GitHub to install the project, run tests and build the production-ready project.

There is also a single command deployment where the project is deployed for free on GitHub pages.

### Material

I used Angular Material for pre-programmed components to make the development process faster. Usually, a project has one material lib and a lot of pre-existing components that can be reused to speed up the dev process

## Questions

#### How long did this assignment take you and where did you spend your time?

12 hours, spent the most time on design

#### What would you do differently or improve in your solution?

I would implement a ngrx store to standardize the API calls, state management and clean up the loading indicator.

I would also create cleaner more reusable code this usually makes the dev process a little longer, but you save much more time in the long run.

#### Do you have any feedback on this assignment? For example: What did you enjoy? What could be better? Which aspects were unclear?

#### What did you enjoy?

I approach every assignment to the best of my capabilities and also learn out of the experience this time I learned how to theme an angular material theme

#### Which aspects were unclear?

The mobile view design for multiple records to be displayed is unclear

## Development server

Run `npm i` to install dependencies needed to run the project.

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Deploy

Run `npm run deploy`
