function Person(props) {
  return (
    <div className="person">
    <h1>{props.name}</h1>
    <p>Your age: {props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Jaden" age="19"/>
    <Person name="Dave" age="46"/>
  </div>
);

ReactDOM.render(app, document.querySelector('#app'));
