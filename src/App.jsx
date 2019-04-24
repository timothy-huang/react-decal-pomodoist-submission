import React from "react";
import Timer from "./components/Timer";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import ClearButton from "./components/ClearButton";
import EmptyState from "./components/EmptyState";

import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.clearCompletedItems = this.clearCompletedItems.bind(this);
    this.startSession = this.startSession.bind(this);
    this.increaseSessionsCompleted = this.increaseSessionsCompleted.bind(this);
    this.toggleItemIsCompleted = this.toggleItemIsCompleted.bind(this);

    this.state = {
      items: [],
      nextItemId: 0,
      sessionIsRunning: false,
      itemIdRunning: null
    };
  }

  addItem(description) {
    const { nextItemId } = this.state;
    const newItem = {
      id: nextItemId,
      description: description,
      sessionsCompleted: 0,
      isCompleted: false
    };
    this.setState(prevState => ({
      // TODO 2: append new items to list and increase nextItemId by 1
      items: [...prevState.items].concat([newItem]),
      nextItemId: prevState.nextItemId + 1
    }));
  }

  clearCompletedItems() {
    // TODO 6
    let newItems = [...this.state.items];
    let filteredItems = newItems.filter(item => item.isCompleted == false);
    this.setState({
      items: filteredItems
    });
  }

  increaseSessionsCompleted(itemId) {
    // TODO 5
    let newItems = [...this.state.items];
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].id == itemId) {
        newItems[i].sessionsCompleted += 1;
      }
    }
    this.setState(prevState => ({
      items: newItems
    }));
  }

  toggleItemIsCompleted(itemId) {
    // TODO 6
    let newItems = [...this.state.items];
    let existItemsMarkedAsCompleted = false;
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].id == itemId) {
        newItems[i].isCompleted = !newItems[i].isCompleted;
      }
      if (newItems[i].isCompleted) {
        existItemsMarkedAsCompleted = true;
      }
    }
    this.setState(prevState => ({
      items: newItems,
      areItemsMarkedAsCompleted: existItemsMarkedAsCompleted
    }));
  }

  startSession(id) {
    // TODO 4
    this.setState(prevState => ({
      sessionIsRunning: true,
      itemIdRunning: id
    }));
  }

  render() {
    const {
      items,
      sessionIsRunning,
      itemIdRunning,
      areItemsMarkedAsCompleted
    } = this.state;

    const emptyList = items.length == 0;

    return (
      <div className="flex-wrapper">
        <div className="container">
          <header>
            <h1 className="heading">Today</h1>
            {areItemsMarkedAsCompleted && (
              <ClearButton onClick={this.clearCompletedItems} />
            )}
          </header>
          {/* TODO 4 */}
          {sessionIsRunning && (
            <Timer
              mode="WORK"
              onSessionComplete={() => {
                this.increaseSessionsCompleted(itemIdRunning);
                this.toggleItemIsCompleted(itemIdRunning);
              }}
              autoPlays
              key={itemIdRunning}
            />
          )}
          <div className="items-container">
            {emptyList ? (
              <h1>Your list is empty!</h1>
            ) : (
              items.map(item => (
                <TodoItem
                  description={item.description}
                  sessionsCompleted={item.sessionsCompleted}
                  isCompleted={item.isCompleted}
                  startSession={() => this.startSession(item.id)}
                  key={item.id}
                />
              ))
            )}
          </div>
        </div>
        <footer>
          <TodoInput addItem={this.addItem} />
        </footer>
      </div>
    );
  }
}

export default App;
