# Histogram

In this application I used the following technologies: React library with Next.js Framework and for communication with the API I used 
Apollo GraphQL.
To styling I used Material-UI and for histogram I used VISX.

In the "histogram.js" component there is the part that deals with displaying the histogram, and in the "index.js" file I have separated 
the logic that calls the "allPosts" query and formats the data to be sent as props in the histogram component.

To display errors and loading circle I created "GenericLoadingAndError.js" component

After the data has been displayed as a graph, more data about each month of 2019 will be displayed by 
clicking on the histogram or by hovering.