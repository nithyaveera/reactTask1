import React from 'react';
import First from './component/First';

const App = () => {
  let jsonData = [
    {
      title: "FREE",
      price: "$0/Month",
      user: "Single user",
      storage: "5GB storage",
      publicproject: "Unlimited Public Projects",
      access: "Community Access",
      privatepro: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free SubDomain",
      report: "Monthly Status Reports",
    },
    {
      title: "PLUS",
      price: "$9/Month",
      user: "5 user",
      storage: "50GB storage",
      publicproject: "Unlimited Public Projects",
      access: "Community Access",
      privatepro: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free SubDomain",
      report: "Monthly Status Reports",
    },
    {
      title: "PRO",
      price: "$49/Month",
      user: "Unlimited user",
      storage: "5GB storage",
      publicproject: "Unlimited Public Projects",
      access: "Community Access",
      privatepro: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free SubDomain",
      report: "Monthly Status Reports",
    },
  ];
  return (
    <div class="container">
      <First jsonData={jsonData} />
    </div>
  );
};

export default App;