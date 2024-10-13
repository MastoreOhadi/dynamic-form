# DynamicFormApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# **Dynamic Form Application**

This project is a dynamic form application built with **Angular** that leverages **Material Design** for a beautiful UI and supports **multi-language translation (i18n)**. This document covers the installation, configuration, and usage of the project in detail.

## 🚀 **Features**
- Dynamic form generation with configuration files
- Multi-language support (default: Persian)
- Beautiful design with Angular Material components
- Reactive Forms for managing form state
- Unit and integration tests with **Jasmine** and **Karma**

## 📋 **Prerequisites**
- **Node.js** (version 18 or higher)
- **Angular CLI** (version 18+)
- Installed `npm` and `git`

---

## ⚙️ **Installation and Setup**

Follow these steps to get the project running locally:

1. **Clone the project:**
   ```bash
   git clone https://github.com/username/dynamic-form-app.git
   cd dynamic-form-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the project:**
   ```bash
   ng serve
   ```

4. **Access the application:**  
   Open your browser and go to:
   ```
   http://localhost:4200
   ```

---

## 🧪 **Running Tests**

To execute tests and generate coverage reports, run the following command:
```bash
ng test --code-coverage
```
The coverage report will be saved in the `/coverage` directory.

---

## 🛠️ **Build and Deployment**

To create a production build, use:
```bash
ng build --prod
```

---

## 🌐 **Internationalization (i18n)**

To change the default language, navigate to the `assets/i18n` folder and modify the relevant JSON files. Example:
```json
{
  "submit": "Submit",
  "name": "Name"
}
```

---

## 📂 **Project Structure**

```
dynamic-form-app/
├── src/
│   ├── app/
│   │   ├── components/  # Angular components
│   │   ├── services/    # Angular services
│   │   └── models/      # Data models
│   ├── assets/          # Static assets (e.g., translations)
│   └── environments/    # Environment-specific configurations
```

---

## 📝 **API Documentation**

The project retrieves form configurations from the `/assets/form-config.json` file. You can modify the structure to fit your requirements.

---

## 👥 **Contributors**

- **Mastoureh Ohadi**

---

## 📄 **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## 💡 **How to Contribute**

If you'd like to contribute, please fork the repository, create a new branch, and submit a pull request. Any contributions are greatly appreciated!
