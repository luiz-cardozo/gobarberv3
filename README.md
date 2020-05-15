# GoBarber (typescript version)

## Forgot password

**RF**

- User must be able to recover password informing e-mail;
- User must receive an e-amil with instructions to recover password;
- USer must be able to reset password;

**RNF**

- Use Mailtrap to test sending mail functionality in development enviornment 
- Use Amazon SES to send mail in production
- E-mails should be handled as background jobs

**RN**

- Link sent to recover password should expire in 2 hours;
- User must confirm password when reseting password;

# Profile

**RF**

- User should be able to update name, e-mail and password;

**RNF**

- User can't update e-mail to another one that is already being used;
- To update password the user must inform the current password;
- To update password user must confirm the new password;

# Provider's dashboard

**RF**

- A provider should be able to list all the appointments by selecting the desired date;
- Providers must receive a notification everytime that a new appointment is made;
- Providers must be able too see all the unread notifications; 

**RNF**

- Appointments must be stored in cache;
- Notifications must be stored in MongoDB;
- Notifications to provider must be sent in real time using Socket.io;

**RN**

- Notifications must have status read/unread;

# Schedule appointment

**RF**

- User must be able to list all the providers with an active account at GoBarber;
- User must be able to list all the dates that a specific provider have at least on available appointment time;
- User must be able to list all the available times of a specific provider;
- User must be able to make an appointment with a provider

**RNF**

- Providers list must be stored in cache;
- 

**RN**

- Appointments will have duration of 1 hour;
- Appontments must be booked between 8 AM and 6 PM;
- Users can't book an appointment to an unavailable slot;
- Users can't book an appointment in a past time;
- Users can't book an appointment with self;

