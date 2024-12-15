<script>

        

        /* PUT PAGECOUNT INTO An HTTP COOKIE!
            name value pair

            pageCounter = pageCount(this the number of times page has been accessed)

            expiration date     ( keep for a time period or make it for the session )

            ? How long to keep this data?   10years 

            Put the data into the cookie!
        */
        //pageCount++;

        pageSetup = () => {

            //let pageCount = 1;      //We need this information every time the page accessed
                //how to keep this between pages?  Maintain State

            //NOTE:  Change this to use the pageCOunter value from the Cookie, add 1 to it
            //      display the new value and save it in the cookie

            document.querySelector("#displayCount").innerHTML = pageCount;
            
            console.log(document.cookie);

            setCookie("pageCounter",pageCount,3650);
        }

    </script>