import React, { Component } from "react";
import PropTypes from "prop-types"

import AppHeader from "../app-header";

import PostList from "../post-list/post-list";
import "./app.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { count: 0, id: 1 },
                { count: 0, id: 2 },
                { count: 0, id: 3 },
                { count: 0, id: 4 },
                { count: 0, id: 5 },
            ],
        };
        // this.deleteItem = this.deleteItem.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.refreshCount = this.refreshCount.bind(this);
        this.restore = this.restore.bind(this);
        this.baseState = this.state.data;
    }

    //*------------- Add item - -------------*//
    increment(itemId) {
        const data = this.state.data.map(({ id, count }) => ({
            count: id === itemId ? ++count : count,
            id,
        }));
        this.setState({ data })
    }
    //*------------- Subtraction + -------------*//
    decrement(itemId) {
        const data = this.state.data.map(({ id, count }) => ({
            count: id === itemId && count > 0 ? --count : count,
            id,
        }))
        this.setState({ data })
    }
    //*------------- All items 0 -------------*//
    refreshCount() {
        const data = this.state.data.map(({ id, count }) => ({
            count: count > 0 ? 0 : count,
            id,
        }))
        this.setState({ data })
    }
    //*------------- Renew all list -------------*//
    restore() {
        if (this.state.data.length === 0) {
            this.setState({ data: this.baseState })
        }
    };

    //*------------- Remove row -------------*//
    //! deletion using filter method "new"
    deleteItem = (id) => {
        const data = this.state.data.filter((i) => i.id !== id);
        this.setState({ data: data })
    }

    
    render() {
        const { data } = { ...this.state } //!---changes
        const allPosts = this.state.data.length
        //!--- Counts, more them 0
        let notZero = data.filter(e => e.count > 0).length
        return (
            <div className="app">
                <AppHeader allPosts={allPosts} notZero={notZero} />
                <div className="update">
                    <button className="btn btn-success" onClick={this.refreshCount}>
                        Refresh numbers <ion-icon name="sync-outline"></ion-icon>
                    </button>
                    {/* Attachment inner class */}
                    <button className={allPosts === 0 ? "btn btn-primary" : "btn btn-primary disabled"} onClick={this.restore}> {/**/}
                        Restore <ion-icon name="swap-vertical-outline"></ion-icon>
                    </button>
                </div>
                <PostList
                    data={data}
                    increment={this.increment}
                    decrement={this.decrement}
                    onDelete={this.deleteItem}
                    count={this.count}
                />
            </div>
        )
    }
};

// REVIEW // I'm not sure if this is true,
         // Code requires additional review :)
App.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            count: PropTypes.number,
            id: PropTypes.number
        })
    ),
};


//NOTE ---------- I have a console warning regarding esLint ----------