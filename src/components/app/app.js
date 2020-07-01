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
            term: "",

        };
        this.deleteItem = this.deleteItem.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.refreshCount = this.refreshCount.bind(this);
    }

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

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            console.log();

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            };
        });
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.label.indexOf(term) > -1;
        });
    }

    filterPost(items, filter) {
        if (filter === "like") {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    onFilterSelect(filter) {
        this.setState({ filter });
    }

    render() {
        const { data, term, filter } = this.state;

        const allPosts = this.state.data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader allPosts={allPosts} />

                <div className="update">
                    <button className="btn btn-success" onClick={this.refreshCount}>
                        Refresh numbers <ion-icon name="sync-outline"></ion-icon>
                    </button>
                    <button className="btn btn-primary" disabled>
                        Restore <ion-icon name="swap-vertical-outline"></ion-icon>
                    </button>
                </div>
                <PostList
                    posts={visiblePosts}
                    increment={this.increment}
                    decrement={this.decrement}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                    count={this.count}
                />
            </div>
        );
    }
}
