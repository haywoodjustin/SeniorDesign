# Constraints Essay 

## Project Description:

Our project will be a web-based application that allows users to request songs to be played in group settings. Users will navigate to the website, whether it be by QR code scan or otherwise, and will be met with a session that represents the current party they are requesting songs for. One user will be the session leader. That user needs to log into their Spotify account to allow the songs to be queued. The session leader will have ability to reorder the queue and remove songs from the queue. Users can upvote songs they want to hear and there will also be a feature to keep the same song from being queued twice in a short time.

 

## Constraints:

One constraint that affects our project design is that when we decide to host this website/database to the cloud, we will need to have a source of funding. Being constrained economically, we will research free alternatives before considering AWS or Google Cloud Platform. However, if we do have to pay out of pocket, we will make sure to minimize the usage of these services. An issue that can arise is if we have a query that won’t end and we don’t realize it, then we could incur heavy costs. We will need to have checks and spending limits on our cloud services so that we don’t have issues financially.

Additionally there will be a social usage constraint. This project is based on users of Spotify and if a party host does not use Spotify they cannot use the app. Alternatives to Spotify include Apple Music, Pandora, Sound Cloud, and others. To make this app as socially usable as possible we will use the host as the main source of authentication to the Spotify API allowing users inside the party to query Spotify’s song library. This is a difficulty of its own for security reasons as well. 

For guests to add songs, we simply need to be able to query using the Spotify API. This does not require any sort of user authentication into Spotify. However, we will need to link the guest’s session and songs they add to the host’s queue of music, which will require the host’s authentication.

Another possible legal constraint is if we do not follow Spotify’s API usage policies. We will need to do research to make sure that we are complying with all the requirements and developer practices. If we decide to include Spotify’s logos or color themes, there are also certain rules we must follow. Spotify does encourage the use of their API for creating extensions or cool apps but this could be a legal constraint if we misuse their API.