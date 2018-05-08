class VisibilityToogle extends React.Component{
    constructor(props){
        super(props);
        this.toogleBtn=this.toogleBtn.bind(this);
        this.state={
            visibility:false
        }
    }

    toogleBtn(){
        this.setState((prevState)=>{
            return{
                visibility:!prevState.visibility
            }
        });
    }   
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toogleBtn}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && <p>some text</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToogle />,document.getElementById('app'));
