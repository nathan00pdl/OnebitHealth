# OneBitHealth — BMI Calculator

[![React Native](https://img.shields.io/badge/React%20Native-0.72-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-49-000020?logo=expo&logoColor=white)](https://expo.dev/)
[![License](https://img.shields.io/github/license/nathan00pdl/OnebitHealth)](LICENSE)

A mobile app that calculates your **BMI** (Body Mass Index) from your weight and height, and keeps a history of every result.

Built while following the OneBitCode course, one commit per lesson. It was my first contact with React Native, with mobile components and with the device APIs that a web page does not have.

## What it does

- Takes **weight** and **height** and shows the BMI to two decimal places.
- Refuses to calculate with an empty field: it shows *"Campo Obrigatório"* and **vibrates the device**, through React Native's `Vibration` API.
- Keeps a **history** of the calculations in a `FlatList`, most recent first.
- **Shares** a result with any app on the phone, through the `Share` API.
- Dismisses the keyboard when you tap outside the fields.

## Tech stack

- **React Native 0.72** and **React 18**
- **Expo 49**
- JavaScript, with hooks (`useState`) for all the state

## Structure

| Path | What it is |
|---|---|
| `App.js` | Assembles the screen: `Title` above, `Form` below |
| `src/components/Title` | The header |
| `src/components/Form` | The fields, the validation, the calculation and the history |
| `src/components/Form/ResultIMC` | The result and its share button |

Each component keeps its styles in a `style.js` next to it.

## Running it

Requirements: **Node.js** and the **Expo Go** app on your phone, or an Android/iOS emulator.

```bash
git clone https://github.com/nathan00pdl/OnebitHealth.git
cd OnebitHealth
npm install
npx expo start
```

Expo prints a QR code: scan it with Expo Go on the same network and the app opens on the phone. To use an emulator instead, press `a` for Android or `i` for iOS in the same terminal.

> **Note:** this is a study project that follows the course lesson by lesson, and it stops at lesson 13. There are no tests, and nothing is persisted: the history lives in memory and is gone when the app closes.

## License

Licensed under the [MIT License](LICENSE).

## Contact

Nathan Paiva de Lacerda — [LinkedIn](https://www.linkedin.com/in/nathan-paiva-636336236)
