import './function2.css'
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
      (newbrilliantstudent) => newbrilliantstudent.pMetrics ==="excellent"
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
const riverRevamped = revampedstudents.splice(
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
      <body>
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
                    <li>
                      <td>{athlete.name}</td>
                    </li>
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
            Students in Primary 6 typically range in age from 11 to 12 years
            old, although this can vary depending on the educational system and
            country. <br />
            Primary 6 is typically the final year of primary education before
            students transition to secondary school. Here are some general
            characteristics <br />
            and aspects related to students in Primary 6. some general
            characteristics and aspects related to students in Primary 6 are
            Academic Focus,
            <br />
            Social and Emotional Development, Independence, Transition to
            Secondary School, Hobbies and Interests, Critical Thinking,
            Curriculum Content
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

          <label className='label1'>fill in your favourite athlete</label>
          <select id="dropdown">
            <option value="">Select athlete</option>
            <option value="option1">Chidi - basketball</option>
            <option value="option2">Emeka - basketball</option>
            <option value="option3">mark - basketball</option>
            <option value="option4">Genesis - basketball</option>
            <option value="option5">Exodus - basketball</option>
            <option value="option6">Isaiah - football</option>
            <option value="option7">Samuel - football</option>
            <option value="option8">John - basketball</option>
            <option value="option9">Samuel - basketball</option>
            <option value="option10">Peter - football</option>
            <option value="option11">Paul - football</option>
            <option value="option12">Miracle - tabletennis</option>
            <option value="option13">Festus - longtennis</option>
            <option value="option14">Faith - longtennis</option>
            <option value="option15">firstname - football</option>
            <option value="option16">secondname - tennis</option>
            <option value="option17">thirdname - basketball</option>
            <option value="option18">fourthname - tennis</option>
            <option value="option19">fifthname - football</option>
            <option value="option20">Mtthew - basketball</option>
            <option value="option21">Job - fottball</option>
            <option value="option22">Obianuju - longtennis</option>
            <option value="option23">Emma - longtennis</option>
            <option value="option24">Ruby - football</option>
            <option value="option25">Micheal - basketball</option>
            <option value="option26">Emeka - basketball</option>
            <option value="option27">Emeka - basketball</option>
            <option value="option28">Maro - basketball</option>
            <option value="option29">Helen - football</option>
            <option value="option30">Scholar - tennis</option>
            <option value="option31">Jude - longtennis</option>
            <option value="option32">Anabel - table tennis</option>
            <option value="option33">Monday - basketball</option>
            <option value="option34">UC - basketball</option>
          </select>
        </div>
      </body>
    );
}
 
export default Function2;