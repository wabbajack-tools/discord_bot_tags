# Error logging into Mega.

From Mega Support:
> We have recently added a feature to enhance the security of our platform. This measure requires MEGA client software to solve a complicated mathematical equation during each login attempt. This feature significantly increases the cost for attackers attempting mass-scale unauthorized access to MEGA accounts, protecting you from unauthorised logins by malicious attackers who used to try hundreds of millions of passwords every day.
> 
> Outdated official MEGA clients and most third-party tools, including those using the MEGA API, do not currently support solving this mathematical equation and may encounter issues such as the "402 Payment Required" error.
> This error does not indicate a problem with your subscription or payment status; instead, it is a response indicating that the login attempt could not fulfil the computational requirement.
> 
> To continue using the MEGA API, please log in using an updated MEGA client, such as your web browser in incognito mode.
> 
> Once logged in successfully, please use the API again within 24 hours.
> 
> Kind regards,
> MEGA Support

TD;DR Anonymous login's wont work if you have this issue. Instead create a account and follow the below work around.

1. Go to your regular browser
2. Go to https://mega.io/
3. If you are already logged in, log out
4. Login to mega using your browser
5. Restart wabbajack and try to login.
