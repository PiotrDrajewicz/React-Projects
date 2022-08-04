import React, { useState } from "react";
import peopleList from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(peopleList);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {console.log(people)}
        <List peopleee={people} />
        <button onClick={() => setPeople([])}>remove all</button>
      </section>
    </main>
  );
}

export default App;
