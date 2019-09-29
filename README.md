# ionic-react-auto-focus-modal-bug

Demonstrates and issue with autofocus fields inside Ionic modal components.  On mobile devices, opening a modal with an autofocus field causes the modal to transition out of view.  If the device is then switch to landscape orientation and then back to portrait, the modal becomes visibile again.


## Installation
- `git clone`
- `npm install`
- `ionic serve`

## Instructions
- Load app on desktop with dev tools open.
 - Click the 2 show modal buttons to see that both work properly on desktop.
 - Note the warning `Autofocus processing was blocked because a document already has a focused element.`
- Load the app on a mobile device (iOS is all I tested)
 - Tap the "Show Good Modal" to demonstrate that it works properly
 - Tap the "Show Bad Modal" button to recreate the problem.
