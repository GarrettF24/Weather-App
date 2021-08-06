# Project Overview

## Weather-App

[My project here] (url here)

## Project Description

Project is a weather app that shows the search locations current weather and 7 day forecast.

## API and Data Sample

[Open weather api] (https://openweathermap.org/api;)

```
"coord": { "lon": -71.0583, "lat": 42.3603 },
"weather": [ { "id": 801, "main": "Clouds",
"description": "few clouds", "icon": "02d" }
```

## Wireframes

[wireframe] (https://lucid.app/lucidchart/invitations/accept/inv_ad9dc89f-3f66-4bc0-bfad-d1cfdb06c7a7?viewport_loc=-565%2C-19%2C2893%2C1400%2C0_0)

### MVP/PostMVP

#### MVP

1. User will search by location by city,state,country. On clicking submit the current weather (CW) will appear.
2. On the return the locations CW will be shown in middle of screen.
3. The background of the CW will appear slightly raised, as if the CW box is sitting atop the background body, as opposed to appearing to be apart of it.
4. The whole page will start dark from outsides and becomer lighter as it goes towards the middle. With the CW weather report resting above the lightest middle part.
5. When the mouse pointer is over the CW, the size will increase marginally and become slightly more emphasized. Also the text content and imagery of CW will be a lighter color to contrast with the dark background. (Once multiply weather boxes are rendered it will draw attention to current weather box.
6. If site viewed on mobile or tablet the scale of webpage will be adjusted accordingly to fit. Elements on webpage will be stacked neatly on top of one another.

#### PostMVP

1. Add a drop down on search so all cities with that name will appear. User will be able to specify using state/territory and country.
2. Add in a future forcast underneath the current search's day's weather.
3. When CW loads, a drop down display will appear underneath with emojis that are relevant to CW. (Example, if it is raining, a raincoat emoji will appear.)
4. When the mouse passes over an emoji, a text box will appear with a relevant phrase to the CW emoji. (Example, if mouse passes over raincoat phrase will say "Stay dry out there, wouldn't want to catch a cold!")
5. When the drop down display occurs, the emojis will appear similar to when a drawer is opened. When drop down display closes a similar effect will happen on emojis to simulate a closing drawer.
6. Emojis will also have relevant animations.(Example, if it's raining then raindrops will appear on/around raincoat.

## Project Schedule

| Day              | Deliverable                                                      | Status     |
| ---------------- | ---------------------------------------------------------------- | ---------- |
| July 30          | Prompt / Wireframes / Priority Matrix / Timeframes               | Complete   |
| August 2         | Project approval, get basic structure set up, begin pseudocoding | Complete   |
| August 3         | Begin coding, start MVP's                                        | Complete   |
| August 4         | Finish MVP, finalize styling and descriptive comments            | Complete   |
| August 5         | Make sure everything works, Start on PMVP's                      | Complete   |
| August 6         | Presentations                                                    | Incomplete |
| August 7-onwards | Cont. PMVP                                                       | ---        |

## Priority Matrix

[Priority Matrix] (https://lucid.app/lucidchart/1859e4a2-c924-4b38-96e3-ee67b20c2e7b/edit?page=0_0#)

## Timeframes

| Component                        |      Priority       | Estimated Time | Time Invested | Actual Time |
| -------------------------------- | :-----------------: | :------------: | :-----------: | :---------: |
| Adding Form                      |          H          |      2hr       |      1hr      |     1hr     |
| Working with API                 |          H          |      3hr       |      3hr      |     3hr     |
| Create Dyn HTML                  |          H          |      1hr       |      1hr      |     1hr     |
| Basic CSS Layout                 |          H          |      1hr       |      2hr      |     2hr     |
| Incorporate Flex Box             |          H          |      2hr       |      4hr      |     4hr     |
| Adjust CSS                       |          H          |      1hr       |      2hr      |     2hr     |
| Pseudocode                       |          H          |      3hr       |      2hr      |     2hr     |
| Append items to DOM              |          H          |      3hr       |      2hr      |     2hr     |
| Make sure API calls render       |          H          |      3hr       |      2hr      |     2hr     |
| Remove Elements on new Search Fn |          H          |      1hr       |      1hr      |     1hr     |
| Clean Code/Refactor              |          H          |      1hr       |      1hr      |     1hr     |
| Future Forecast                  |          M          |      4hr       |      3hr      |     3hr     |
| Add Emoji                        |          L          |      5hr       |     :---:     |    :---:    |
| Emoji Drop Display               |          L          |      4hr       |     :---:     |    :---:    |
| Emoji Animations                 |          L          |      10hr      |     :---:     |    :---:    |
| Total                            | H=Done for DeadLine |       44       |     25hr      |    25hr     |

## Code Snippet

```
const weatherData = find.data;
    const lat = weatherData.coord.lat;
    const lon = weatherData.coord.lon;
    const findForecast = await axios.get(
      `https://api.troposphere.io/forecast/${lat},${lon}?token=1f04e75602d0534928c5e51adf08122f4dd12a89aed11cfb5c`
    );
```

I had to get a second api for 7 day forecast that only took coordinates as parameters. So I assigned the
latitude and longitude of the first api to variables and using string interpolation inputted the search's coordinates into the second api to call the 7 day forecast.

## Change Log

I changed some of the styling, I originally wanted the the background to go from light to dark moving towards the center but reversed it as my original idea did not look good.

Also had to utilize a second api because open weather api's forecast option was behind a paid subscription.
