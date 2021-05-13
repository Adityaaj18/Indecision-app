class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
       
    }
    render() {
        return(
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'hide details' : 'show details'}</button>
                {this.state.visibility && (
                                     <div><p>Here are some details</p></div>
                    
                                 )
                    
                                 }
            </div>
        )
    }
    
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))





// let visibility = false

// const toggleVisibility = () => {
//     visibility = !visibility
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={toggleVisibility}>
//             {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div><p>Here are some details</p></div>

//             )

//             }
//         </div>
        
//     )
//     ReactDOM.render(template, document.getElementById('app'))
// }
// render()