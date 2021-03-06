# The Pleo Frontend Challenge

### [🚀 See my app on Netlify 🚀](https://devan-space-x.netlify.app/)

I made three branches for each of the three tasks.
1. `b/1-launches-details-timezone-tooltip`
2. `f/2-user-favourites-sidebar`
3. `f/3-animations-and-night-mode`

My branch naming convention for this task includes [b/f] in the first postion for bug or feature, followed by the "ticket" number, and short description of the task/ticket.

I also made a `master` branch for production and `staging-01` branch where I first merged my branches to test them before they are merged to production (`master`).

## Tasks

### 1. Fix a bug

Since most of this project was built with Chakra UI components, I first looked for a Tooltip component made by Chakra UI. 
After importing the component and wrapping the local time, I added some props like `hasArrow` to style the Tooltip. 
The label includes the user's local time and includes some text for the user to know what the date/time represents.

Next, I needed to find a solution for how I can show the user's current timezone and the Launch Pad's timezone. 
Inside the utils/format-date.js began by trying to get the user's local timezone string from the offset in 
the ISO timestamp inside the Intl.DateTimeFormat function.

After some [research](https://stackoverflow.com/questions/20712419/get-utc-offset-from-timezone-in-javascript), I noticed it wasn't possible to get the actual timezone string from the offset since multiple timezones may use the same offset value.
I tried to complete this first task using only Javascript but after searching for a solution I realized there was no solution without using Moment.js or Luxon.
I decided to go with Luxon because it's a [smaller package](https://www.npmtrends.com/luxon-vs-moment) but also the successor to Moment.js and likely to stay maintained.

Once the package was imported it became easy to get the UTC offset of the `launch_date_local` string using `DateTime.fromISO(timestamp, { setZone: true })` this returned the string of the UTC offset of my launch pad.
I decided to also show the user's time prefernce by using `navigator.language` to get the prefered language and therefore the prefered date/time display of the user.
For example, European users see 24h clock and North American users see 12h. This also gets the current timezone of the user.

I also changed the name of the original function and created a second function. 
`formatUserLocalDateTime(timestamp)` shows the local timestamp of the user and `formatUTCOffsetDateTime(timestamp)` shows the timestamp with the UTC offset.

### 2. Favourite Launches and Launch Pads

Before I started to build I thought about what I would need to build this feature. I decided I needed a global state management to access the favourited items, since I’d need to access that list in multiple places in the application (sidebar, item list), I also needed to create a single button component that I could reuse throughout the application where needed.

Since my background is with Vue.js, I have worked with Vuex quite a bit, so my first thought was to try to find a similar solution for React apps. I knew I needed a way to handle a global state to manage my list of favourited launches and launch pads. I decided to go with a ContextAPI over Redux because of the size of the app. ContextAPI first appeared to have an easier set up, and given the limited need of the global state seemed like the right approach. It allowed me to write less code and update the state directly from the component I made, making it easier to work with.

### 3. Impress us

For this last section, I decided to add a dark mode version to the application. Making use of the ChakraUI, I was able to set a toggle button to set the UI to light/dark. More users are expecting night dark modes on applications they use.

Some next steps I would like to implement would be a dark mode for the Google Maps, as well as some more animations on page loads. I believe subtle uses of animations allow users to really feel a sense in interaction with the application resulting in a better user experience. This may include smoother page transitions and fade in of the item cards on first load. 

## Develop

> You'll need [Node](https://nodejs.org/en/) and
> [Yarn](https://classic.yarnpkg.com/en/) installed

- run `yarn` to install dependencies
- run `yarn start` to start development environment

## Build

> You'll need [Node](https://nodejs.org/en/) and
> [Yarn](https://classic.yarnpkg.com/en/) installed

- run `yarn` to install dependencies
- run `yarn build` to start development environment
- output is in `build` directory,
  [ready to be deployed](https://create-react-app.dev/docs/deployment/)

## Data

All data is fetched from the unofficial SpaceX API V3 at
[spacexdata.com](https://docs.spacexdata.com/?version=latest).

### Technologies Used

> This project was bootstrapped with
> [Create React App](https://github.com/facebook/create-react-app). You can
> learn more in the
> [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

- [React](https://reactjs.org/) - UI library
- [Chakra UI](https://chakra-ui.com/) - Design system and component library,
  with [Emotion](https://emotion.sh), its peer dependency
- [SWR](https://swr.now.sh/) - Data fetching and caching library
- [React Router v6](https://github.com/ReactTraining/react-router/blob/f59ee5488bc343cf3c957b7e0cc395ef5eb572d2/docs/installation/getting-started.md) -
  routing library
- [React Feathers](https://github.com/feathericons/react-feather) - Icons
  ([Feather icons](https://feathericons.com/) wrapper for React)
- [timeago.js](https://timeago.org/) - Tiny library to display human-readable
  relative time difference
- [Luxon.js](https://github.com/moment/luxon) - Successor of Moment.js to deal with Date/Time/Zones
- [Framer Motion](https://www.framer.com/motion/) - Animation and motion library for React apps


