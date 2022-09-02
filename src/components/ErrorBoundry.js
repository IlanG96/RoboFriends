import React ,{Component} from "react";

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false,
            Error_msg:""
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError:true,Error_msg:info});
    }

    render(){
        const {hasError,Error_msg}=this.state;
        if (hasError){
            return <h1>Error Please refresh the page!</h1>
        }
        return this.props.children;
    }

}

export default ErrorBoundry;