Tap
=======

This is a standalone app to record events broadcasted by segment.io into a postgres backend. This ensures core application performance is never affected by analytics event recording.


## Installation

1. Install node/npm `brew install nodejs`
2. `npm install`
3. `foreman start`


## API

```
POST /events

Content-type: application/json

Parameters: action, event, userId, anonymousId, properties

action must be type "Track", all other fields are optional
```
