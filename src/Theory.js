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




*/