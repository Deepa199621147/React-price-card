import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Card from './Card';


function App() {
  let cardList = [
    {
      header: "FREE",
      month: "0",
      listitems: [
        {
          list: "Single use"
        },
        {
          list: "50GB Storage"
        },
        {
          list: "unlimited public project"
        },
        {
          list: "Community Acess"
        },
        {
          list: "Unlimited private projects",
          enable: false
        },
        {
          list: "Dedicated phone Support",
          enable: false
        },
        {
          list: "free subdomain",
          enable: false

        },
        {
          list: "Monthly status Reports",
          enable: false

        }
      ],


    },
    {
      header: "PLUS",
      month: "9",
      listitems: [
        {
          list: "5 User"
        },
        {
          list: "50GB Storage"
        },
        {
          list: "unlimited public project"
        },
        {
          list: "Community Acess"
        },
        {
          list: "Unlimited private projects"
        },
        {
          list: "Dedicated phone Support"
        },
        {
          list: "free subdomain"
        },
        {
          list: "Monthly status Reports",
          enable: false
        }
      ],

    },
    {
      header: "PRO",
      month: "49",
      listitems: [
        {
          list: "Unlimited user"
        },
        {
          list: "50GB Storage"
        },
        {
          list: "unlimited public project"
        },
        {
          list: "Community Acess"
        },
        {
          list: "Unlimited private projects"
        },
        {
          list: "Dedicated phone Support"
        },
        {
          list: "free subdomain"
        },
        {
          list: "Monthly status Reports"
        }
      ],

    }
  ]
  return (
    <div class="container text-center ">
      <h1 class="mt-5">REACT PRICE CARD TASK</h1>
      <div class="row bg-primary">
        {
          cardList.map((card) => {
            return <Card data={card} />
          })
        }

      </div>
    </div>
  )

}

export default App;