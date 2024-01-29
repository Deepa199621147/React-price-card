import '@fortawesome/fontawesome-free/css/all.css';
import { faCheck ,faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Card(props) {
    return (

        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-5 mb-5 ml-2 mr-2">

            <div className="card border">
                <div className="card-header">
                    <p>{props.data.header}</p>
                    <h2>$ {props.data.month}/ month</h2>
                </div>
                <div className="card-body">
                    <ul className="list-group list-unstyled text-start">
                        {
                            props.data.listitems.map((li) => {
                           
                                return li.enable !== false ? (<li className="li"><FontAwesomeIcon icon={faCheck} className="my-icon me-2" /> {li.list}</li>) :
                                    (<li className="li text-muted "><FontAwesomeIcon icon={faTimes} className="my-icon me-2"/>  {li.list}</li>)

                            })
                        }
                    </ul>
                    <div className='btn1'>
                    <button type="button" className="btn btn-primary mt-5 mb-5 ">Button</button>
                    </div>

                </div>
            </div>
        </div>

    )

}
export default Card;