# AG-codingProject

<ins>Overview</ins>

A project developed within seven days, from 07/12/2023 to 07/19/2023, that was meant to mimic the appearance of a provided profile app wireframe. This app did not require actual functionality, only the appearance that it was taking in user data values and saving them to the profile page.

Hours Spent on Project: 50

<ins>Tech Specs</ins>
- Base app: React Native Expo
- Development Device: iPhone SE
- iOS: v16.5.1(c)
- Node.js: v18.16.1
- Git: v2.41.0.windows.2
- React Native: v0.71.8
- React Native Cli: v2.0.1

<ins>Installation/Running Instructions</ins>
  Pre-requisites for General Use
- Node.js (LTS releases strongly recommended)
- Git
- Watchman (only for Linux and macOS users)

 <ins> Pre-requisites for Physical Device Demo</ins>
- Expo Go app (available in App Store and Google Play Store)

<ins>Pre-requisites for iPhone Simulator (see additional notes)</ins>
- Xcode
- Xcode Command Line Tools

1. Download repo code
2. Open code in text editor (VS Code recommended)
3. In terminal run 'npx expo start'. Depending on command configurations with macOS, may need to use 'sudo npx expo start'. This will build the metro bundle in the terminal. From here there are a couple of options
   on how to pull up the app.
_If Using a Physical Device_
4. Scan the QR code that appears in terminal and click the link that appears, this will redirect to the app. The javascript bundle will compile (this may take a minute if this is the first
     time compiling the app on the device). Once the bundle has complied it will display the app which can be interacted with freely. To close the app and development server, exit out of the app and run the
     command 'ctrl c' or 'cmd c' in editor terminal.
     **Strongly recommended to only use this method if in possession of a iphone SE.** The app has only been tested on an iPhone SE as of the currently writing, and while it has some limited dynamic styling to allow
     for some adjustment to other screens, this has not been properly tested. Using the app on any other iPhone device or an Android device may result in skewed appearance.
_If Using iPhone Simulator_
4. If the simulator is already running iPhone SE press 'i' in terminal to create simulator and load app. If simulator is not properly configured press 'shift i', this will pull up a menu of iPhone versions to choose
   from. Pick iPhone SE and the simulator will run and the app will download to the simulator
   **Note that the first time the app is run on the simulator the iOS will ask if you want to open the Expo Go app, press ok on this prompt. If the prompt does not immediately appear, interact with the simulator
   screen such as tapping the screen or dragging another app will cause the prompt to appear.**

<ins>Additional Notes</ins>
1. [iOS Simulator - Expo Documentation](https://docs.expo.dev/workflow/ios-simulator/) this website is a documentation page for React Native Expo and covers both how to install the pre-requisites for iOS simulator development and common troubleshooting
  when dealing with iPhone simulators.
  
