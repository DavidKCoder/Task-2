import React, { Component } from "react";

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
            ],
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.refreshCount = this.refreshCount.bind(this);
        this.restore = this.restore.bind(this);
        this.baseState = this.state.data;
    }

    //*------------- Increment + -------------*//
    increment(itemId) {
        const data = this.state.data.map(({ id, count }) => ({
            count: id === itemId ? ++count : count,
            id,
        }));
        this.setState(prevState => {
            return {
                ...prevState,
                data,
            }
        });
    }
    //*------------- Decrement + -------------*//
    decrement(itemId) {
        const data = this.state.data.map(({ id, count }) => ({
            count: id === itemId && count > 0 ? --count : count,
            id,
        }));
        this.setState(prevState => {
            return {
                ...prevState,
                data,
            }
        });
    }
    //*------------- Refresh button + -------------*//
    refreshCount() {
        const data = this.state.data.map(({ id, count }) => ({
            count: count > 0 ? count = 0 : count,
            id,
        }));
        this.setState(prevState => {
            return {
                ...prevState,
                data,
            }
        });
    }
    //*------------- Restore button + -------------*//
    restore() {
        this.setState(() => {
            const baseState = this.baseState;
            if (this.state.data.length === 0) {
                return {
                    data: baseState
                }
            }
        })
    }
    //*------------- Delete items + -------------*//
    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            };
        });
    }

    render() {
        const { data } = this.state;
        const allPosts = this.state.data.length;

        //!---- Counts, more them 0, incomplete...
        let notZero;
        notZero = this.state.data.map(function (e) { return e.count }).filter(e => e.count > 0 ? e === 1 : e)
        //!---------------------------------------- 
        
        let classNames = "btn btn-primary disabled";
        if (allPosts === 0) {
            classNames = "btn btn-primary"
        }

        return (

            <div className="app">
                <AppHeader allPosts={allPosts} notZero={notZero} />

                <div className="update">
                    <button className="btn btn-success" onClick={this.refreshCount}>
                        Refresh numbers <ion-icon name="sync-outline"></ion-icon>
                    </button>
                    <button className={classNames} onClick={this.restore}> {/**/}
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
        );
    }
};