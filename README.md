# glimmer-tracked-issue

To run this 

1. Follow the NativeScript Setup Guides https://docs.nativescript.org/angular/start/quick-setup
2. tns debug ios --bundle --debug-brk


To see the issue just tap "Click Me" multiple times, then click "Go to Page 2". Once on page two, click "Back" in the ActionBar
Then try and click "Click me" again, and you'll notice the counter wont increase anymore.

This seems to be because Nativescript uses a cached version of the page instead of doing a full render when you click back.
This gives multiple benefits like keeping your position in a large list and being quicker to show the page.
