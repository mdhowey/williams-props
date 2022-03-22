import CardList from "CardList";

const App = () => {
  const jobs = [
    // 0
    {
      company: "Amazon",
      city: "Dedhum",
      position: "Amazon Associate",
    },
    // 1
    {
      company: "university",
      city: "Cambridge",
      position: "Lead Mentor",
    }
  ]

  return( 
    <div>
      <CardList jobs={jobs} />
    </div>
  );
}

export default App
