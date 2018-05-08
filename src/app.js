class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePickup=this.handlePickup.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            options:[]
        }
    }
    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options:[]
            }
        });
    };
    handlePickup(){
        const randomNum=Math.floor(Math.random()*this.state.options.length);
        const options=this.state.options[randomNum];
        alert(options);
    }
    handleAddOption(option){
        if(!option){
            return 'Item is required'
        } else if(this.state.options.indexOf(option)>-1){
            return 'This item already exist'
        }
        this.setState((prevState)=>{
        return{
            options:prevState.options.concat(option)
        }
        });
    }
    render(){
        const title='Indecision App';
        const subtitle='Think what to do today?';
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePickup={this.handlePickup}
                />
                <Options options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />  
            </div>
        )
    }
}

const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

// functional component
const Action=(props)=>{
    return(
        <div>
            <button onClick={props.handlePickup} disabled={!props.hasOptions}>
                What Should I do?
            </button>
        </div>
    )
};

const Options=(props)=>{
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option)=><Option key={option} optionText={option} />
            )
            }
        </div>
    )
}

const Option=(props)=>{
    return(
        <div>
            {props.optionText}
        </div>
    )
};

class AddOption extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        const error=this.props.handleAddOption(option);
        this.setState(()=>{
            return { error };
        });
        e.target.elements.option.value="";      
    }
    render(){
        return( 
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));