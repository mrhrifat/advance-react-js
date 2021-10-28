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
    01) In API we get or have which much data we need not others data.

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


4.2 Constructor & Render
    01) Every class has a Constructor, which is auto called when the class is run the constructor create a new constrcutor object.

    02) In React constructor called can say Mount and constructor remove can say Unmount.

    03) In React render method will call as time as th state has been changed.

    04) Render method get called after Constructor called.

    05) Constructor get called only one time.

    06) Render get called again and again.


4.3 ComponentDidMount
    01) Render method render JSX in Virtual DOM but ComponentDidMount do it in real web DOM.

    02) ComponentDidMount get called after render called.

    03) ComponentDidMount called only one time like constructor.

    04) We can use ComponentDidMount at Asynchronous task, JQuery, Animation work perpous.

4.4 ComponentDidUpdate
    01) We can pass 3 parameter (prevProps,prevState,snapshot).

    02) ComponentDidUpdate get called whenever any props or state changed.

    03) It call after render.

4.5 ComponentDidMount vs ComponentDidUpdate
    01) Which data we need after load - ComponentDidMount

    02) Which data we need in future - ComponentDidUpdate

4.6 componentWillUnmount
    01) If there any children life cycle method in render, then it will call before parent life cycle method's get called.

    02) It will remove an component with condition.
    
    03) It will called after Render called and before Parent Did Update Called



* The most 3 used Life Cycle Method are 
    01) componentDidMount
    02) componentDidUpdate
    03) componentWillUnmount

* Constructor > Render > ComponentDidMount



4.7 Get Derive State From Props
    01) static getDeriveStateFromProps

    02) It take's two parameter (props,state)

    03) It's only use in very rare case

    04) There are other alternative way to work against this method

    05) It's is good to don't use it

    06) It will called in both mount and update 

    07) It will called before render method

4.8 ShoudComponentUpdate
    01) It takes 2 parameter (nextProps,nextState)

    02) It will call before Render

    03) It help to control the calling system of Render


4.9 Get Snapshoot Before Update
    01) It takes two parameter (previousProps,previousState)

    02) It help to store previos value of Props or State in a Component

    03) It works like keep screenshot or store


5.1 process.env.NODE_ENV
- development, production,testing

We can change the value of NODE_ENV

 .env
- To keep local variable

React Environment Variable
REACT_APP_VarName
- REACT_APP_API_KEY
We can't see the changes of React Env untill we don't restart web browser server

As we don't want to show our Env in real world, that's why for github we have set it in .gitignore file as .env

REACT_APP_API_KEY='90u23knfd099uno'
 
We can called everywhere in project Env Variable

console.log(process.env.REACT_APP_API_KEY)





*/