import "./function2.css";
const Function2 = () => {
  const athletes = [
    {
      name: "Chidi",
      sport: "football",
      pMetrics: "excellent",
      gLevel: "primary 1",
      jerseyNo: "1",
    },
    {
      name: "Emeka",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 2",
      jerseyNo: "2",
    },
    {
      name: "mark",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "3",
    },
    {
      name: "Genesis",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "4",
    },
    {
      name: "Exodus",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "5",
    },
    {
      name: "Isaiah",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "6",
    },
    {
      name: "John",
      sport: "football",
      pMetrics: "good",
      gLevel: "primary 2",
      jerseyNo: "7",
    },
    {
      name: "Samuel",
      sport: "basketball",
      pMetrics: "fair",
      gLevel: "primary 3",
      jerseyNo: "8",
    },
    {
      name: "Peter",
      sport: "basketball",
      pMetrics: "fair",
      gLevel: "primary 3",
      jerseyNo: "9",
    },
    {
      name: "Peter",
      sport: "football",
      pMetrics: "poor",
      gLevel: "primary 3",
      jerseyNo: "10",
    },
    {
      name: "Miracle",
      sport: "football",
      pMetrics: "poor",
      gLevel: "primary 4",
      jerseyNo: "11",
    },
    {
      name: "Festus",
      sport: "table-tennis",
      pMetrics: "poor",
      gLevel: "primary 4",
      jerseyNo: "12",
    },
    {
      name: "Faith",
      sport: "long-tennis",
      pMetrics: "good",
      gLevel: "primary 4",
      jerseyNo: "13",
    },
    {
      name: "matthew",
      sport: "long-tennis",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "14",
    },
    {
      name: "Job",
      sport: "long-tennis",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "15",
    },
    {
      name: "Obianuju",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "16",
    },
    {
      name: "Emma",
      sport: "football",
      pMetrics: "fair",
      gLevel: "primary 2",
      jerseyNo: "17",
    },
    {
      name: "Ruby",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 1",
      jerseyNo: "18",
    },
    {
      name: "Micheal",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 1",
      jerseyNo: "19",
    },
    {
      name: "Emeka",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 2",
      jerseyNo: "20",
    },
    {
      name: "Emeka",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 2",
      jerseyNo: "21",
    },
    {
      name: "Maro",
      sport: "basketball",
      pMetrics: "fair",
      gLevel: "primary 1",
      jerseyNo: "22",
    },
    {
      name: "Helen",
      sport: "football",
      pMetrics: "good",
      gLevel: "primary 2",
      jerseyNo: "23",
    },
    {
      name: "Scholar",
      sport: "tennis",
      pMetrics: "fair",
      gLevel: "primary 1",
      jerseyNo: "24",
    },
    {
      name: "Jude",
      sport: "Long-tennis",
      pMetrics: "good",
      gLevel: "primary 5",
      jerseyNo: "25",
    },
    {
      name: "Emperor",
      sport: "table-tennis",
      pMetrics: "good",
      gLevel: "primary 5",
      jerseyNo: "26",
    },
    {
      name: "Rose",
      sport: "football",
      pMetrics: "poor",
      gLevel: "primary 5",
      jerseyNo: "27",
    },
    {
      name: "Anabel",
      sport: "table-tennis",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "28",
    },
    {
      name: "Monday",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 2",
      jerseyNo: "29",
    },
    {
      name: "Uc",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "30",
    },
  ];
  const seniorstudent = athletes.filter(
    (newseniorstudent) => newseniorstudent.gLevel === "primary 6"
  );

  const brilliantstudent = athletes.find(
    (newbrilliantstudent) => newbrilliantstudent.pMetrics === "excellent"
  );

  const revampedstudents = [
    {
      name: "Chidi",
      sport: "football",
      pMetrics: "excellent",
      gLevel: "primary 1",
      jerseyNo: "1",
    },
    {
      name: "Emeka",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 2",
      jerseyNo: "2",
    },
    {
      name: "mark",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "3",
    },
    {
      name: "Genesis",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "4",
    },
    {
      name: "Exodus",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "5",
    },
    {
      name: "Isaiah",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "6",
    },
    {
      name: "John",
      sport: "football",
      pMetrics: "good",
      gLevel: "primary 2",
      jerseyNo: "7",
    },
    {
      name: "Samuel",
      sport: "basketball",
      pMetrics: "fair",
      gLevel: "primary 3",
      jerseyNo: "8",
    },
    {
      name: "Peter",
      sport: "basketball",
      pMetrics: "fair",
      gLevel: "primary 3",
      jerseyNo: "9",
    },
    {
      name: "Paul",
      sport: "football",
      pMetrics: "poor",
      gLevel: "primary 3",
      jerseyNo: "10",
    },
    {
      name: "Miracle",
      sport: "football",
      pMetrics: "poor",
      gLevel: "primary 4",
      jerseyNo: "11",
    },
    {
      name: "Festus",
      sport: "table-tennis",
      pMetrics: "poor",
      gLevel: "primary 4",
      jerseyNo: "12",
    },
    {
      name: "Faith",
      sport: "long-tennis",
      pMetrics: "good",
      gLevel: "primary 4",
      jerseyNo: "13",
    },
    {
      name: "matthew",
      sport: "long-tennis",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "14",
    },
    {
      name: "Job",
      sport: "long-tennis",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "15",
    },
    {
      name: "Obianuju",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "16",
    },
    {
      name: "Emma",
      sport: "football",
      pMetrics: "fair",
      gLevel: "primary 2",
      jerseyNo: "17",
    },
    {
      name: "Ruby",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 1",
      jerseyNo: "18",
    },
    {
      name: "Micheal",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 1",
      jerseyNo: "19",
    },
    {
      name: "Emeka",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 2",
      jerseyNo: "20",
    },
    {
      name: "Emeka",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 2",
      jerseyNo: "21",
    },
    {
      name: "Maro",
      sport: "basketball",
      pMetrics: "fair",
      gLevel: "primary 1",
      jerseyNo: "22",
    },
    {
      name: "Helen",
      sport: "football",
      pMetrics: "good",
      gLevel: "primary 2",
      jerseyNo: "23",
    },
    {
      name: "Scholar",
      sport: "tennis",
      pMetrics: "fair",
      gLevel: "primary 1",
      jerseyNo: "24",
    },
    {
      name: "Jude",
      sport: "Long-tennis",
      pMetrics: "good",
      gLevel: "primary 5",
      jerseyNo: "25",
    },
    {
      name: "Emperor",
      sport: "table-tennis",
      pMetrics: "good",
      gLevel: "primary 5",
      jerseyNo: "26",
    },
    {
      name: "Rose",
      sport: "football",
      pMetrics: "poor",
      gLevel: "primary 5",
      jerseyNo: "27",
    },
    {
      name: "Anabel",
      sport: "table-tennis",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "28",
    },
    {
      name: "Monday",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 2",
      jerseyNo: "29",
    },
    {
      name: "Uc",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 6",
      jerseyNo: "30",
    },
  ];
  revampedstudents.splice(
    15,
    1,
    {
      name: "firstname",
      sport: "football",
      pMetrics: "good",
      gLevel: "primary 4",
      jerseyNo: "1",
    },
    {
      name: "secondname",
      sport: "tennis",
      pMetrics: "good",
      gLevel: "primary 1",
      jerseyNo: "2",
    },
    {
      name: "thirdname",
      sport: "basketball",
      pMetrics: "good",
      gLevel: "primary 2",
      jerseyNo: "3",
    },
    {
      name: "fourthname",
      sport: "tennis",
      pMetrics: "fair",
      gLevel: "primary 1",
      jerseyNo: "4",
    },
    {
      name: "fifthname",
      sport: "football",
      pMetrics: "poor",
      gLevel: "primary 4",
      jerseyNo: "5",
    }
  );
  return (
    <div>
      <h1 id="firsthead">River City School</h1>
      <marquee>call us @ 09000000287</marquee>
      <div className="parent">
        <p>
          River City School has a total number of 30 students, below is a list
          of the total number of students in our school
        </p>
        <ol className="table1List">
          <table>
            <thead>
              <tr className="theading">
                <th className="th">Name</th>
                <th className="th">Sport</th>
                <th className="th">metrics</th>
                <th className="th">Grade</th>
                <th className="th">Jersey</th>
              </tr>
            </thead>
            <tbody>
              {athletes.map((athlete, index) => (
                <tr key={index}>
                  {/* <li> */}
                  <td>{athlete.name}</td>
                  {/* </li> */}
                  <td>{athlete.sport}</td>
                  <td>{athlete.pMetrics}</td>
                  <td>{athlete.gLevel}</td>
                  <td>{athlete.jerseyNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ol>
        <h3 className="head3">Senior students</h3>
        <p>
          Students in Primary 6 typically range in age from 11 to 12 years old,
          although this can vary depending on the educational system and
          country. <br />
          Primary 6 is typically the final year of primary education before
          students transition to secondary school. Here are some general
          characteristics <br />
          and aspects related to students in Primary 6. some general
          characteristics and aspects related to students in Primary 6 are
          Academic Focus,
          <br />
          Social and Emotional Development, Independence, Transition to
          Secondary School, Hobbies and Interests, Critical Thinking, Curriculum
          Content
          <br /> below is a list of our senior students
        </p>
        <ul className="list">
          {seniorstudent.map((senior, index) => (
            <li key={index}> {senior.name}</li>
          ))}
        </ul>
        <p>
          Hence it is important to state that our most brilliant student is{" "}
          {brilliantstudent.name} with jersey number of
          {brilliantstudent.jerseyNo} in {brilliantstudent.gLevel} and a lover
          of {brilliantstudent.sport}
        </p>
        <h3 className="head3">Modified</h3>
        <div className="table2">
          <ol>
            <table>
              <thead>
                <tr>
                  <th className="theading">Name</th>
                  <th className="theading">Sport</th>
                  <th className="theading">Performance</th>
                  <th className="theading">level</th>
                  <th className="theading">jersey</th>
                </tr>
              </thead>
              <tbody className="theading">
                {revampedstudents.map((revamped, index) => (
                  <tr key={index}>
                    <td className="tbody">{revamped.name}</td>
                    <td className="tbody">{revamped.sport}</td>
                    <td className="tbody">{revamped.pMetrics}</td>
                    <td className="tbody">{revamped.gLevel}</td>
                    <td className="tbody">{revamped.jerseyNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ol>
        </div>

        <label className="label1">fill in your favourite athlete</label>

        <select id="dropdown">
          {revampedstudents.map((athletees, index) => (
            <option key={index}>
              {athletees.name} - {athletees.sport}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Function2;
