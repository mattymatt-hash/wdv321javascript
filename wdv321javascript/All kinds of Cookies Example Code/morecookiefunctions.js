<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        //create a function to set a cookie, read a cookie, delete a cookie

        function setCookie(cookieName, cookieValue, expireDays) {
            let expires = "";
  
            if (expireDays) {
                const today = new Date();
                today.setTime(today.getTime() + (expireDays * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
                expires = "; expires=" + today.toUTCString();
            }
  
            document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + expires;
            //located at: https://www.mbloging.com/post/how-to-read-write-and-delete-cookies-in-javascript
        }//end setCookie()

        setCookie("productName",'Green Stapler',3);

        let productPrices = [1.99,2.99,3.99,.89];

        setCookie("productPriceArray",productPrices,1);

        let productObject = {
            productName:'Green Stapler',
            productPrice:8.99,
            productNumber:"GrnST-4"
        }

        setCookie('productObjectName',productObject,1);

        function getCookieValue(name) {
            const cookies = document.cookie.split(';');
  
            for (let cookie of cookies) {
                const [cookieName, cookieValue] = cookie.trim().split('=');
                
                if (cookieName === name) {
                return decodeURIComponent(cookieValue);
                }
            }
  
            return null; // Cookie not found
        }//end getCookieValue()

        console.log( productObject)

        let productObjectJSON = JSON.stringify(productObject);  //convert a JS object into a JSON object
        setCookie('productObjectName',productObjectJSON,1);

        console.log( getCookieValue('productObjectName') );
        //catch the JSON object, use JSON.parse() to convert to a JavaScript object
        console.log( productPrices );
        console.log( getCookieValue('productPriceArray') );

    </script>
</head>
<body>
    
</body>
</html>

//Various functions to use when handling HTTP Cookies

function setCookie(cookieName, cookieValue, expireDays) {
    let expires = "";

    if (expireDays) {
        const today = new Date();
        today.setTime(today.getTime() + (expireDays * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
        expires = "; expires=" + today.toUTCString();
    }

    document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + expires;
    //located at: https://www.mbloging.com/post/how-to-read-write-and-delete-cookies-in-javascript
}//end setCookie()

function getCookieValue(name) {
    const cookies = document.cookie.split(';');

    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        
        if (cookieName === name) {
        return decodeURIComponent(cookieValue);
        }
    }

    return null; // Cookie not found
}//end getCookieValue()

//Need a Delete Cookie function