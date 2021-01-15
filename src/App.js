import React, {Component} from 'react';
import {Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {initialization} from "./redux/appReducer";

import s from './App.module.css'
import Header from "./Component/Header/Header";
import Login from "./Component/Login/Login";

class App extends Component {
    componentDidMount(): void {
        this.props.initialization()
    }

    render() {
        return (
            <div className={s.appWrapper}>
                <Header/>
                <Route path={'/login'}
                       render={() => <Login/>}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
});


export default compose(connect(mapStateToProps, {initialization}), withRouter)(App);