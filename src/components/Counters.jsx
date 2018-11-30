import React, { Component } from "react";
import CounterChild from "./CounterChild";
const Counters = ({ counter, onReset, onDecrement, onIncrement, onRemove }) => {
  if (counter.length > 0) {
    return (
      <main role="main" className="container">
        <div className="row col">
          <div className="card">
            <div className="card-header">Counters</div>
            <div className="card-body">
              <button onClick={onReset} className="btn btn-warning">
                Reset
              </button>
              <ul className="list-group">
                {counter.map(c => {
                  return (
                    <CounterChild
                      key={c.id}
                      onRemove={() => {
                        onRemove(c);
                      }}
                      onIncrement={() => onIncrement(c)}
                      onDecrement={() => onDecrement(c)}
                      count={c}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  } else return <div className="alert alert-danger">No More item left!!</div>;
};
export default Counters;
