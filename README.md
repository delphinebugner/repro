# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

Run prebuild & build for the wanted platform.

## Usage

This is a repro app for issue https://github.com/software-mansion/react-native-reanimated/issues/6676. 

To reproduce it here:

   1. Run the repro on a real device (error does not occur on emulator)
   2. Just after mounting the Home, try to clic on a "Press me" button : nothing happens 🚨
   3. Click on "Explore" Tab
   4. Return to "Home" Tab
   5. Click on a "Press me" button: an alert shows up ✅
   6. Click on the "Toggle animated buttons" to unmount-remount them
   7. Click again a "Press me" button: nothing happens 🚨


