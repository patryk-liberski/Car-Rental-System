https://patryk-liberski.github.io/car-rental-system/

### Car Rental System
This project is a Car Rental System developed using React, Redux, and TypeScript. It allows users to reserve different types of cars (sedan, SUV, van), manage rental history, and perform key actions related to a car rental service.

### Features
Car Reservation: Users can select a car type and reserve it for a specific number of days.
Car Availability: Displays available cars dynamically based on current rentals.
Rental History Management: Shows a list of rented cars with the ability to return them.
Responsive Design: Optimized for both desktop and mobile devices.
State Management: Uses Redux to manage state across the app.
Form Validation: Ensures valid input before submission, including preventing rentals for 0 days or in the past.

### Technologies Used
React: Frontend framework for building the user interface.
Redux: For global state management.
TypeScript: Ensures type safety across the project.
SCSS: For better and structured styling.
Jest: For unit testing.

### Folder Structure
/src/components: Contains React components such as CarList, ReservationForm, and RentalHistory.
/src/store: Contains Redux setup and slices for managing car and rental states.
/src/styles: SCSS styles for the application.

### Installation
To run this project locally, follow these steps:

## Clone the repository:
git clone https://github.com/your-repo-url

## Install dependencies:
npm install

## Start the development server:
npm start
The app will be available at http://localhost:3000.

### Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
