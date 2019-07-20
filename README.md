#Explanation

Good afternoon Rachel,

In order to integrate Mixpanel on a site, you will need to follow these steps.

1. Register for free on Mixpanel at https://mixpanel.com/register/#1 and create a new project. 
2. Retrieve your token by navigating to the project settings.
3. Copy the script tag from https://developer.mixpanel.com/docs/javascript and paste it in the head of your html.
4. Replace "Your Token" in the tag with the token from your project. 
5. Trigger a function on your site that will send the tracking information to Mixpanel. The function should include "mixpanel.track([insert information to track])".
6. When the function is called, you can view live tracking in your Mixpanel project.