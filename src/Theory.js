/*

1.1

1.2

2.1 Smart Component vs Dumb Component
    01) No metter there have class based component or function based component. If it have state in both they are smart component. But if state is missing from one or both component they are dumb component.

2.2 

2.3 Difference between pure component & component
    01) If the value of state will be change after render method & the value will be as same as before, then component will render again & again. But the pure component won't render again. This way pure component will optimize applcation.

    02) componentDidMount()
        01) Dynamically after render component for change the value ot state.
    
2.4 Create and Transform Element
    01) If we use JSX then we don't need to create Element with React.createElement() {See in Core React JS repository}

    02) Here are some method relative with it
        01) React.clone
        02) React.children
        03) React.map
        04) React.forEach

2.5 React Fragment
    01) For representation our JSX we need to render it & we can't render two or more siblings in after imidiate render. We need to provide div or any parent to representation two or more view. But in case we don't need any parent. Then it can solved in 4 ways.
        01) Function Component (Passing as Children)
        02) React.Fragment
        03) Fragment
        04) <> </>


3.1 Understand REST API
    01) There are 3 ways to work with Data
        01) REST API
            01) REST - Representational State Transfer
            02) API - Application Programming Interface
        
        02) There are 2 ways to work with REST API
            01) Own server and API
            02) Third Party API's

    02) GhaphQL
    03) Server Rendered

3.2 Difference between API and URL
    01) In API we get or have which much data we need not others data

    02) In URL we get all data
    
    03) Software for work with REST Client
        01) PostMan
        02) Insomnia 
            01) Website - insomnia.rest


3.3 HTTPS Method
    01) CRUD 
        01) C - Create - POST
        02) R - Read - GET
        03) U - Update - PUT/PATCH
        04) D - Delete - DELETE
    
    02) We can work with API data in 2 ways
        01) XML HTTPS Resquest
        02) Fetch
            01) We can Fecth data esaily with a popular library 
                01) AXIOS


3.4 AXIOS 
    01) GET
        axios.get(url).then()

    02) POST
        axios.get(url,body).then()

    03) PUT/PATCH
        axios.put/patch(url,body).then()

    04) DELETE
        axios.delete(url).then()

*/