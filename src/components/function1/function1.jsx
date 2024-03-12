import "./function1.css";
const Activity = () => {
  const customers = [
    {
      name: "Favour",
      purchaseAmount: "$100",
      shoppingPrefrence: "white shoes",
      members: "yes",
      age: "20",
    },
    {
      name: "Sarah",
      purchaseAmount: "$50",
      shoppingPrefrence: "black shoes",
      members: "no",
      age: "30",
    },
    {
      name: "Musa",
      purchaseAmount: "$10",
      shoppingPrefrence: "pink shoes",
      members: "no",
      age: "40",
    },
    {
      name: "Ibrahim",
      purchaseAmount: "$20",
      shoppingPrefrence: "blue shoes",
      members: "no",
      age: "50",
    },
    {
      name: "Uju",
      purchaseAmount: "$30",
      shoppingPrefrence: "red shoes",
      members: "yes",
      age: "60",
    },
    {
      name: "Emeka",
      purchaseAmount: "$200",
      shoppingPrefrence: "green shoes",
      members: "yes",
      age: "70",
    },
    {
      name: "Chinaza",
      purchaseAmount: "$40",
      shoppingPrefrence: "purple shoes",
      members: "yes",
      age: "80",
    },
    {
      name: "Joy",
      purchaseAmount: "$60",
      shoppingPrefrence: "oxblood shoes",
      members: "no",
      age: "90",
    },
    {
      name: "Amos",
      purchaseAmount: "$70",
      shoppingPrefrence: "white shirt",
      members: "no",
      age: "100",
    },
    {
      name: "Scholar",
      purchaseAmount: "$80",
      shoppingPrefrence: "blue shirt",
      members: "yes",
      age: "110",
    },
    {
      name: "Sheddy",
      purchaseAmount: "$90",
      shoppingPrefrence: "green shirt",
      members: "yes",
      age: "120",
    },
    {
      name: "Tommy",
      purchaseAmount: "$110",
      shoppingPrefrence: "purple shirt",
      members: "no",
      age: "130",
    },
    {
      name: "Ife",
      purchaseAmount: "$120",
      shoppingPrefrence: "orange shirt",
      members: "yes",
      age: "140",
    },
    {
      name: "Tega",
      purchaseAmount: "$130",
      shoppingPrefrence: "black shirt",
      members: "yes",
      age: "150",
    },
    {
      name: "Faith",
      purchaseAmount: "$140",
      shoppingPrefrence: "yellow shirt",
      members: "no",
      age: "160",
    },
  ];
  // members
  const filteredcustomers = customers.filter(
    (newfilteredcustomers) => newfilteredcustomers.members === "yes"
  );

  //oldest

  const findage = customers.find(
    (oldeststudent) => oldeststudent.age === "160"
  );
  //removing first five persons and replacing with two
  // testing
  //   const revampedCustomers = customers.splice(
  //     0,
  //     15,
  //     {
  //       name: "xfc",
  //       purchaseAmount: "$xf",
  //       shoppingPrefrence: "xfx shirt",
  //       members: "yxxes",
  //       age: "xf",
  //     }
  //     // "customer2"
  //   );
  //   console.log(revampedCustomers);
  //   // newsplice => newsplice.name;
  // testing

  const abcMall = [
    {
      name: "Favour",
      purchaseAmount: "$100",
      shoppingPrefrence: "white shoes",
      members: "yes",
      age: "20",
    },
    {
      name: "Sarah",
      purchaseAmount: "$50",
      shoppingPrefrence: "black shoes",
      members: "yes",
      age: "30",
    },
    {
      name: "Musa",
      purchaseAmount: "$10",
      shoppingPrefrence: "pink shoes",
      members: "yes",
      age: "40",
    },
    {
      name: "Ibrahim",
      purchaseAmount: "$20",
      shoppingPrefrence: "blue shoes",
      members: "yes",
      age: "50",
    },
    {
      name: "Uju",
      purchaseAmount: "$30",
      shoppingPrefrence: "red shoes",
      members: "yes",
      age: "60",
    },
    {
      name: "Emeka",
      purchaseAmount: "$200",
      shoppingPrefrence: "green shoes",
      members: "yes",
      age: "70",
    },
    {
      name: "Chinaza",
      purchaseAmount: "$40",
      shoppingPrefrence: "purple shoes",
      members: "yes",
      age: "80",
    },
    {
      name: "Joy",
      purchaseAmount: "$60",
      shoppingPrefrence: "oxblood shoes",
      members: "yes",
      age: "90",
    },
    {
      name: "Amos",
      purchaseAmount: "$70",
      shoppingPrefrence: "white shirt",
      members: "yes",
      age: "100",
    },
    {
      name: "Scholar",
      purchaseAmount: "$80",
      shoppingPrefrence: "blue shirt",
      members: "yes",
      age: "110",
    },
    {
      name: "Sheddy",
      purchaseAmount: "$90",
      shoppingPrefrence: "green shirt",
      members: "yes",
      age: "120",
    },
    {
      name: "Tommy",
      purchaseAmount: "$110",
      shoppingPrefrence: "purple shirt",
      members: "yes",
      age: "130",
    },
    {
      name: "Ife",
      purchaseAmount: "$120",
      shoppingPrefrence: "orange shirt",
      members: "yes",
      age: "140",
    },
    {
      name: "Tega",
      purchaseAmount: "$130",
      shoppingPrefrence: "black shirt",
      members: "yes",
      age: "150",
    },
    {
      name: "Faith",
      purchaseAmount: "$140",
      shoppingPrefrence: "yellow shirt",
      members: "yes",
      age: "160",
    },
  ];


  abcMall.splice(
    0,
    5,
    {
      name: "firstname",
      purchaseAmount: "2pounds",
      shoppingPrefrence: "three shirts",
      members: "yes",
      age: "12",
    },
    {
      name: "secondname",
      purchaseAmount: "5pounds",
      shoppingPrefrence: "five shirt",
      members: "yes",
      age: "7",
    }
  );
  return (
    <div>
      {/* first arranging the data in a table */}
      <h2 className="mallhead">ABC MALL</h2>
      <p>
        ABC Mall was founded in 1976 by prof. Abisola and since then has being
        known for its high security and low cost of products. <br />
        The following are the total numbers of workers in the ABC mall both
        members and non members
      </p>
      <ol className="table1List">
        <table>
          <thead>
            <tr className="theading">
              <th className="th">Name</th>
              <th className="th">Amount</th>
              <th className="th">Prefrence</th>
              <th className="th">Members</th>
              <th className="th">Age</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.purchaseAmount}</td>
                <td>{customer.shoppingPrefrence}</td>
                <td>{customer.members}</td>
                <td>{customer.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ol>

      {/* secondly people that are members */}
      <h2 className="mallhead2">Members</h2>
      <p>
        ABC Mall has always being considerate, we try as much as possible to
        reduce the rate of unemployment <br />
        but then not all workers are members because there are stages of how
        things works here. This is a loving <br />
        organization to work with and so far our oldest member is the person of{" "}
        {findage.name}
        Below is the list of our members
      </p>
      <div>
        <ul className="list">
          {filteredcustomers.map((membersABC, index) => (
            <li key={index}> {membersABC.name}</li>
          ))}
        </ul>
      </div>
      <h2 className="mallhead2">Revamped customers</h2>
      {/* removing and replacing */}
      <ol className="table1List">
        <table>
          <thead>
            <tr className="theading">
              <th className="th">Name</th>
              <th className="th">Amount</th>
              <th className="th">Prefrence</th>
              <th className="th">Members</th>
              <th className="th">Age</th>
            </tr>
          </thead>

          <tbody>
            {abcMall.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.purchaseAmount}</td>
                <td>{customer.shoppingPrefrence}</td>
                <td>{customer.members}</td>
                <td>{customer.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ol>

      {/* lastly purchase amount and name */}

      <h2 className="lasthead"> Customers and Their Recent Purchase</h2>
      <p>
        Why do customers buy products? As a brand, this is one of the most
        fundamental questions you ask. Innovation and quality are nice, but they
        don’t <br/>matter if customers don’t care about your items. It would be ideal
        if you took the time to learn about the factors that drive your
        consumers’ behavior. <br/>It is critical to have a deep understanding of your
        consumers in order to develop high-quality products and advertise them
        successfully. Our grasp <br/>of what influences people’s decisions to
        purchase or not to purchase our products needs to be extensive. 
        Here is a list of our<br/> customers and the amount paid for their recent goods
      </p>
      <ul className="nameAmount">
        {customers.map((nameAmount, index) => (
          <li key={index}>
            {nameAmount.name} - {nameAmount.purchaseAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activity;
