import pic from '../../assets/Plans/jubilee-general.jpeg'
import { NavLink } from 'react-router-dom';
function Card1({heading, hospital, room_ent, pre_post_hosp, romm_board, critical_ill, increase_lim, rupees,img }) {
    return (
        <div className='card1-plan'>
            <div className="card bg-base-100 shadow-xl" style={{ padding: "0rem 2rem" }}>
                <div className='card1-plan-text'>
                    <div>
                        <img className='img-plan' src={img} alt="" />
                    </div>
                    <div style={{ margin: "1.4rem 0", textAlign: "center" }}>
                        <h1 style={{ fontSize: "1.5rem", fontWeight: "500" }}>{heading} -WTO</h1>
                        <p style={{ fontWeight: "500", margin: "0.1rem 0" }}>Health Takaful & Insurance</p>
                        <div className='card1-plan-div'>
                            {
                                hospital ?
                                    <div>
                                        <p>Hospital limit</p>
                                        <p>{hospital}</p>
                                    </div> : null
                            }
                            {
                                room_ent ?
                                    <div>
                                        <p>Room entitlement</p>
                                        <p>{room_ent}</p>
                                    </div> : null
                            }
                            {
                                pre_post_hosp ?
                                    <div>
                                        <p>Pre & Post Hospitalization Benefits</p>
                                        <p>{pre_post_hosp}</p>
                                    </div> : null
                            }

                            {
                                romm_board ?
                                    <div>
                                        <p>Room & Board</p>
                                        <p>{romm_board}</p>
                                    </div> : null
                            }
                            {
                                critical_ill ?
                                    <div>
                                        <p>Critical illness limit</p>
                                        <p>{critical_ill}</p>
                                    </div> : null

                            }
                            {
                                increase_lim ? 
                                <div>
                                    <p>Increase in limit (dueToAccidents)</p>
                                    <p>{increase_lim}</p>
                                </div>: null
                            }
                        </div>
                    </div>
                    <div>
                        <p style={{textAlign: 'center', fontWeight: "500", fontSize: "2rem", margin: '2rem 0 1rem 0'}}>{rupees}-/PKR</p>
                        <div className='buy-now-btn'>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card1