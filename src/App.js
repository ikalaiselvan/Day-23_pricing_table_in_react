import "./App.css";
import Pricing from './components/Pricing';

function App() {
  let data = [
    {
      plan: "FREE",
      price: "0",
      users: "Single User",
      usersEnabler: true,
      fontWeight: false,
      storage: "5GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: false,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: false,
      subDomain: "Free Subdomain",
      subDomainEnabler: false,
      subDomainUnlimit: false,
      statusReports: "Monthly Status Reports",
      statusReportsEnabler: false,
    },
    {
      plan: "Plus",
      price: "9",
      users: "5 User",
      usersEnabler: true,
      fontWeight: true,
      storage: "50GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Free Subdomain",
      subDomainEnabler: true,
      subDomainUnlimit: false,
      statusReports: "Monthly Status Reports",
      statusReportsEnabler: false,
    },
    {
      plan: "PRO",
      price: "49",
      users: "Unlimited Users",
      usersEnabler: true,
      fontWeight: true,
      storage: "150GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Free Subdomains",
      subDomainEnabler: true,
      subDomainUnlimit: true,
      statusReports: "Monthly Status Reports",
      statusReportsEnabler: true,
    },
  ];

  return (
      <section className="pricing py-5">
        <div className="container">
          <div className="row">

            {data.map((e)=>(
              <Pricing data={e}/>
            ))}
            
          {/* <Pricing data={data[1]}/>
          <Pricing data={data[2]}/> */}
          </div>
        </div>
      </section>
  );
}

export default App;
