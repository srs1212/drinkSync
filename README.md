# drinkSync

This app was developed as a project by Skyla Sisco, John Seyfert, and Charles Blood. The problem we wanted 
to solve was deciding on what cocktail to imbibe in given the season, day of the week, time of day, temperature, precipitation, and location.
We created a proprietary algorithm to calculate an overall score for cocktails based on the above factors, 
and coded that in Javascript.  We consumed data from a weather and cocktail data from a public domain API's processed that with date and time data, and built out the application purely in React Native.

Built With

React Native

Versioning

1.0

Authors

Skyla Sisco
John Seyfert
Charles Blood

License

This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments

A special thank you to Doug Walter, Harold Shinsato, and Jay Cheroske for their guidance and assistance.  Also to our fellow
Montana Code School classmates for their assistance as well.

File Hierarchy

DrinkList (State) - holds all JS functionality- No React
Index (State and ultimate rendering)
   -Landing
   -DataAndLogic
       -AllDrinks
       -MainNav
           -HeaderLogo
           -Geolocation
           -ShowDrink
               -ImageAndIngredients
                   -Ingredients
               -Weather
               -DrinkName
               -Recipe
               -ShowNextButton
               -ShowPreviousButton
           -ShowFilter
               -AlcoholFilterButtons (State)
               -ApplyFilterButton (State)